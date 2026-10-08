import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { validateConfig, authHeaders, listModels, chatReply, transcribe } from '../src/model-adapter.mjs';

async function fixture(t, handler) {
  const server = http.createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const result = await handler(request, Buffer.concat(chunks));
    if (!response.destroyed) {
      response.writeHead(result.status || 200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result.body));
    }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => { server.closeAllConnections(); server.close(resolve); }));
  return `http://127.0.0.1:${server.address().port}`;
}
const settings = (baseUrl, provider = 'ollama') => validateConfig({ chat: { provider, baseUrl, model: 'test-model', systemPrompt: 'Keep it short.' }, transcription: {} });

test('Ollama uses native tags and non-streaming chat, retaining conversational context', async t => {
  const base = await fixture(t, (request, bytes) => {
    if (request.url === '/api/tags') return { body: { models: [{ name: 'test-model' }] } };
    assert.equal(request.url, '/api/chat');
    const payload = JSON.parse(bytes);
    assert.equal(payload.stream, false);
    assert.equal(payload.model, 'test-model');
    assert.deepEqual(payload.messages, [{ role: 'system', content: 'Keep it short.' }, { role: 'user', content: '你好' }]);
    return { body: { message: { content: '  你好，人类。  ' } } };
  });
  const config = settings(base);
  assert.deepEqual(await listModels(config), ['test-model']);
  assert.equal(await chatReply(config, [{ role: 'user', content: '你好' }]), '你好，人类。');
});

test('compatible API handles /v1 exactly once and uses server-side authorization', async t => {
  const token = 'mock-secret-never-a-real-key';
  process.env.FACE_TEST_TOKEN = token;
  t.after(() => delete process.env.FACE_TEST_TOKEN);
  const base = await fixture(t, (request, bytes) => {
    assert.equal(request.headers.authorization, `Bearer ${token}`);
    if (request.url === '/v1/models') return { body: { data: [{ id: 'test-model' }] } };
    assert.equal(request.url, '/v1/chat/completions');
    assert.equal(JSON.parse(bytes).stream, false);
    return { body: { choices: [{ message: { content: '兼容协议测试回复' } }] } };
  });
  const config = settings(`${base}/v1/`, 'compatible');
  config.chat.apiKeyEnv = 'FACE_TEST_TOKEN';
  assert.deepEqual(await listModels(config), ['test-model']);
  assert.equal(await chatReply(config, [{ role: 'user', content: 'test' }]), '兼容协议测试回复');
  assert.ok(!JSON.stringify(config).includes(token));
});

test('speech adapter uploads multipart audio, model and Chinese language', async t => {
  const base = await fixture(t, (request, bytes) => {
    assert.equal(request.url, '/v1/audio/transcriptions');
    assert.match(request.headers['content-type'], /^multipart\/form-data; boundary=/);
    const payload = bytes.toString();
    assert.match(payload, /filename="voice.webm"/);
    assert.ok(payload.includes('mock-audio-bytes'));
    assert.match(payload, /name="model"\r\n\r\ntest-stt/);
    assert.match(payload, /name="language"\r\n\r\nzh/);
    return { body: { text: '你好，这是模拟识别。' } };
  });
  const config = settings(base);
  config.transcription = { baseUrl: base, model: 'test-stt', language: 'zh', apiKeyEnv: '' };
  assert.equal(await transcribe(config, Buffer.from('mock-audio-bytes'), 'audio/webm;codecs=opus'), '你好，这是模拟识别。');
});

test('upstream errors do not disclose upstream response bodies or credentials', async t => {
  const base = await fixture(t, () => ({ status: 401, body: { error: 'sensitive-upstream-detail' } }));
  await assert.rejects(chatReply(settings(base), [{ role: 'user', content: 'test' }]), error => /HTTP 401/.test(error.message) && !error.message.includes('sensitive'));
});

test('stopping an in-flight conversation cancels the upstream fetch', async t => {
  let entered;
  const requested = new Promise(resolve => { entered = resolve; });
  const base = await fixture(t, async () => {
    entered();
    await new Promise(resolve => setTimeout(resolve, 80));
    return { body: { message: { content: 'late reply' } } };
  });
  const controller = new AbortController();
  const pending = chatReply(settings(base), [{ role: 'user', content: 'test' }], controller.signal);
  const rejected = assert.rejects(pending, error => error.name === 'AbortError');
  await requested;
  controller.abort();
  await rejected;
});

test('invalid configuration and missing models fail before a model request', async () => {
  assert.throws(() => validateConfig(null), /配置/);
  assert.throws(() => settings('file:///tmp/model'), /HTTP/);
  assert.throws(() => settings('https://name:secret@example.test'), /HTTP/);
  assert.throws(() => settings('https://example.test?token=secret'), /HTTP/);
  assert.throws(() => authHeaders({ apiKeyEnv: 'FACE_MISSING_TOKEN' }, {}), /FACE_MISSING_TOKEN/);
  const config = settings('http://127.0.0.1:1');
  config.chat.model = '';
  await assert.rejects(chatReply(config, []), /模型名/);
});
