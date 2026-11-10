import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { readSSE, readNDJSON } from '../src/event-stream.mjs';
import { validateConfig, chatReplyStream, synthesizeSpeech } from '../src/model-adapter.mjs';
import { SpeechDetector, encodeWave } from '../src/SpeechDetector.js';

async function fixture(t, handler) {
  const server = http.createServer(handler);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => { server.closeAllConnections(); server.close(resolve); }));
  return `http://127.0.0.1:${server.address().port}`;
}
function byteStream(text) {
  const bytes = new TextEncoder().encode(text);
  return new ReadableStream({ start(controller) { for (const byte of bytes) controller.enqueue(Uint8Array.of(byte)); controller.close(); } });
}
const settings = (baseUrl, provider = 'compatible') => validateConfig({ chat: { provider, baseUrl, model: 'fixture', systemPrompt: 'Short replies.' }, speech: { provider: 'compatible', baseUrl, model: 'fixture-tts', voice: 'fixture-voice' } });

test('SSE preserves split UTF-8, CRLF, comments and multi-line data; NDJSON accepts a final unterminated line', async () => {
  const events = [];
  for await (const event of readSSE(byteStream(': keepalive\r\n\r\nevent: delta\r\ndata: 你好\r\ndata: 世界\r\n\r\ndata: [DONE]\n\n'))) events.push(event);
  assert.deepEqual(events, [{ event: 'delta', data: '你好\n世界' }, { event: 'message', data: '[DONE]' }]);
  const lines = [];
  for await (const line of readNDJSON(byteStream('{"text":"你"}\n{"text":"好"}'))) lines.push(line);
  assert.deepEqual(lines, [{ text: '你' }, { text: '好' }]);
});

test('compatible streaming preserves versioned gateway paths and ignores reasoning tokens', async t => {
  let release, finished = false;
  const gate = new Promise(resolve => { release = resolve; });
  const base = await fixture(t, async (request, response) => {
    if (request.url !== '/v2/tokenplan/personal/chat/completions') {
      response.writeHead(404).end();
      return;
    }
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks));
    assert.equal(body.stream, true);
    assert.deepEqual(body.messages, [{ role: 'system', content: 'Short replies.' }, { role: 'user', content: '测试' }]);
    response.writeHead(200, { 'Content-Type': 'text/event-stream' });
    response.write('data: {"choices":[{"delta":{"reasoning_content":"do not speak private reasoning"}}]}\n\n');
    response.write('data: {"choices":[{"delta":{"content":"第一句。"}}]}\n\n');
    await gate;
    finished = true;
    response.end('data: {"choices":[{"delta":{"content":"第二句。"}}]}\n\ndata: [DONE]\n\n');
  });
  t.after(release);
  const stream = chatReplyStream(settings(`${base}/v2/tokenplan/personal/`), [{ role: 'user', content: '测试' }]);
  assert.deepEqual((await stream.next()).value, { type: 'meta', streaming: true });
  assert.deepEqual((await stream.next()).value, { type: 'delta', text: '第一句。' });
  assert.equal(finished, false);
  release();
  assert.deepEqual((await stream.next()).value, { type: 'delta', text: '第二句。' });
  assert.equal((await stream.next()).done, true);
});

test('Ollama NDJSON streams content and non-streaming JSON is explicitly marked as a fallback', async t => {
  const base = await fixture(t, async (request, response) => {
    for await (const _ of request) {}
    if (request.url === '/api/chat') {
      response.writeHead(200, { 'Content-Type': 'application/x-ndjson' });
      response.end('{"message":{"content":"你好"},"done":false}\n{"message":{"content":"。"},"done":true}\n');
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end('{"choices":[{"message":{"content":"整段回复"}}]}');
    }
  });
  const streamed = []; for await (const item of chatReplyStream(settings(base, 'ollama'), [])) streamed.push(item);
  assert.deepEqual(streamed, [{ type: 'meta', streaming: true }, { type: 'delta', text: '你好' }, { type: 'delta', text: '。' }]);
  const fallback = []; for await (const item of chatReplyStream(settings(base), [])) fallback.push(item);
  assert.deepEqual(fallback, [{ type: 'meta', streaming: false }, { type: 'delta', text: '整段回复' }]);
});

test('interrupting a stream aborts the still-running upstream request', async t => {
  const base = await fixture(t, async (request, response) => {
    for await (const _ of request) {}
    response.writeHead(200, { 'Content-Type': 'text/event-stream' });
    response.write('data: {"choices":[{"delta":{"content":"开头"}}]}\n\n');
  });
  const controller = new AbortController(), stream = chatReplyStream(settings(base), [], controller.signal);
  await stream.next(); await stream.next();
  controller.abort();
  await assert.rejects(stream.next(), error => error.name === 'AbortError');
});

test('a stream that closes before its completion marker is reported as an incomplete reply', async t => {
  const base = await fixture(t, async (request, response) => {
    for await (const _ of request) {}
    response.writeHead(200, { 'Content-Type': 'text/event-stream' });
    response.end('data: {"choices":[{"delta":{"content":"部分文字"}}]}\n\n');
  });
  const stream = chatReplyStream(settings(base), []);
  await stream.next();
  assert.deepEqual((await stream.next()).value, { type: 'delta', text: '部分文字' });
  await assert.rejects(stream.next(), /回复尚未完成/);
});

test('TTS authenticates only server-side, preserves binary WAV and omits Qwen-only fields for generic APIs', async t => {
  process.env.FACE_TTS_TEST_KEY = 'fixture-tts-secret';
  t.after(() => delete process.env.FACE_TTS_TEST_KEY);
  const wav = Buffer.from('RIFF-fixture-WAVE');
  const bodies = [];
  const base = await fixture(t, async (request, response) => {
    assert.equal(request.url, '/v1/audio/speech');
    assert.equal(request.headers.authorization, 'Bearer fixture-tts-secret');
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    bodies.push(JSON.parse(Buffer.concat(chunks)));
    response.writeHead(200, { 'Content-Type': 'audio/wav' }); response.end(wav);
  });
  const config = settings(base); config.speech.apiKeyEnv = 'FACE_TTS_TEST_KEY';
  const result = await synthesizeSpeech(config, '你好');
  assert.equal(result.type, 'audio/wav'); assert.deepEqual(result.bytes, wav);
  assert.deepEqual(bodies[0], { model: 'fixture-tts', input: '你好', voice: 'fixture-voice', response_format: 'wav' });
  config.speech.provider = 'qwen'; config.speech.language = 'Chinese';
  await synthesizeSpeech(config, '新句子');
  assert.equal(bodies[1].language, 'Chinese');
  assert.ok(!JSON.stringify(config).includes('fixture-tts-secret'));
});

test('TTS rejects JSON audio and sanitizes upstream errors', async t => {
  const base = await fixture(t, async (request, response) => {
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    response.writeHead(JSON.parse(Buffer.concat(chunks)).input === 'bad' ? 401 : 200, { 'Content-Type': 'application/json' });
    response.end('{"error":"private-upstream-detail"}');
  });
  await assert.rejects(synthesizeSpeech(settings(base), 'bad'), error => /HTTP 401/.test(error.message) && !error.message.includes('private'));
  await assert.rejects(synthesizeSpeech(settings(base), 'wrong-mime'), /可播放的音频/);
});

test('VAD ignores a short click, retains speech onset, and submits once after a pause', async () => {
  let starts = 0; const recordings = [];
  const detector = new SpeechDetector({ sampleRate: 16000, silenceMs: 850, onStart: () => starts++, onEnd: samples => recordings.push(samples) });
  const frame = value => new Float32Array(800).fill(value);
  detector.feed(frame(0.1)); for (let i = 0; i < 8; i++) detector.feed(frame(0));
  assert.equal(starts, 0);
  for (let i = 0; i < 10; i++) detector.feed(frame(0.15));
  assert.equal(starts, 1);
  for (let i = 0; i < 18; i++) detector.feed(frame(0));
  assert.equal(recordings.length, 1);
  assert.ok(recordings[0].length >= 16000);
  assert.ok(recordings[0].some(value => value > 0.1));
  assert.equal(detector.recording, false);
  const wav = new DataView(await encodeWave(recordings[0], 16000).arrayBuffer());
  assert.equal(wav.getUint32(24, true), 16000);
  assert.equal(wav.getUint32(40, true), recordings[0].length * 2);
});

test('VAD pauses during blocked playback and bounds a long uninterrupted utterance', () => {
  let starts = 0, ends = 0;
  const detector = new SpeechDetector({ sampleRate: 16000, maxMs: 700, onStart: () => starts++, onEnd: () => ends++ });
  for (let i = 0; i < 10; i++) detector.feed(new Float32Array(1600).fill(0.2), false);
  assert.equal(starts, 0);
  for (let i = 0; i < 7; i++) detector.feed(new Float32Array(1600).fill(0.2));
  assert.equal(starts, 1); assert.equal(ends, 1);
});

test('environment calibration rejects steady background energy but accepts louder speech', () => {
  let starts = 0, ends = 0, ready = 0;
  const detector = new SpeechDetector({ sampleRate: 16000, calibrationMs: 800, onReady: () => ready++, onStart: () => starts++, onEnd: () => ends++ });
  const feed = (value, count) => { for (let i = 0; i < count; i++) detector.feed(new Float32Array(1600).fill(value)); };
  feed(0.02, 8);
  assert.equal(ready, 1);
  feed(0.02, 20);
  assert.equal(starts, 0);
  feed(0.1, 6);
  assert.equal(starts, 1);
  feed(0.02, 10);
  assert.equal(ends, 1);
  assert.equal(ready, 1);
});
