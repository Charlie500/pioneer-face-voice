import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

test('local server protects private files, saves settings, and authenticates using its local env file', async t => {
  const project = new URL('../', import.meta.url);
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'face-voice-server-'));
  await fs.mkdir(path.join(root, 'src'));
  await fs.mkdir(path.join(root, 'config'));
  for (const name of ['server.mjs', 'package.json', 'index.html', 'style.css', 'src/model-adapter.mjs']) {
    await fs.copyFile(new URL(name, project), path.join(root, name));
  }
  // Keep this fixture unconfigured and independent of the user's real model service.
  await fs.writeFile(path.join(root, 'config/models.json'), JSON.stringify({
    chat: { provider: 'ollama', baseUrl: 'http://127.0.0.1:11434', model: '', apiKeyEnv: '', systemPrompt: 'Test assistant' },
    transcription: { baseUrl: '', model: '', apiKeyEnv: '', language: 'zh' },
  }));
  await fs.writeFile(path.join(root, '.env'), 'FACE_VOICE_TEST_API_KEY=fixture-model-key\n');
  let upstreamAuthorization;
  let upstreamMessages;
  const upstream = http.createServer(async (request, response) => {
    upstreamAuthorization = request.headers.authorization;
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    upstreamMessages = JSON.parse(Buffer.concat(chunks).toString()).messages;
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ choices: [{ message: { content: 'Authenticated fixture reply' } }] }));
  });
  await new Promise(resolve => upstream.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => upstream.close(resolve)));
  const childEnv = { ...process.env };
  delete childEnv.FACE_VOICE_TEST_API_KEY;
  const child = spawn(process.execPath, ['server.mjs', '--port', '0'], { cwd: root, env: childEnv, stdio: ['ignore', 'pipe', 'pipe'] });
  t.after(async () => {
    if (child.exitCode === null) { const exited = once(child, 'exit'); child.kill(); await exited; }
    await fs.rm(root, { recursive: true, force: true });
  });
  const base = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Server startup timed out')), 5000);
    child.once('error', error => { clearTimeout(timer); reject(error); });
    let output = '';
    child.stdout.on('data', chunk => {
      output += chunk;
      const found = output.match(/http:\/\/127\.0\.0\.1:\d+\//);
      if (found) { clearTimeout(timer); resolve(found[0].slice(0, -1)); }
    });
    child.once('exit', code => { clearTimeout(timer); reject(new Error(`Server exited: ${code}`)); });
  });
  const page = await fetch(base);
  assert.equal(page.status, 200);
  assert.match(await page.text(), /粒子人脸动画/);
  const state = await fetch(`${base}/api/status`).then(r => r.json());
  assert.equal(state.chatConfigured, false);
  const hardware = await fetch(`${base}/api/hardware`).then(r => r.json());
  assert.ok(hardware.memoryGB > 0);
  assert.ok(hardware.logicalCores > 0);
  assert.ok(['base', 'tiny'].includes(hardware.recommendedSpeechModel));
  for (const name of ['.env', 'config/models.json', 'config/models.local.json', 'reference/index.html', 'assets/%2e%2e%2f.env', 'src/%2e%2e%2fconfig/models.local.json']) {
    assert.equal((await fetch(`${base}/${name}`)).status, 404);
  }
  const defaults = await fetch(`${base}/api/config`).then(r => r.json());
  const blocked = await fetch(`${base}/api/config`, { method: 'PUT', headers: { Origin: 'https://outside.example', 'Content-Type': 'application/json' }, body: JSON.stringify(defaults) });
  assert.equal(blocked.status, 403);
  const next = { ...defaults, chat: { ...defaults.chat, provider: 'compatible', baseUrl: `http://127.0.0.1:${upstream.address().port}/v1`, model: 'handoff-model', apiKeyEnv: 'FACE_VOICE_TEST_API_KEY' } };
  const saved = await fetch(`${base}/api/config`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(next) });
  assert.equal(saved.status, 200);
  const stored = JSON.parse(await fs.readFile(path.join(root, 'config/models.local.json'), 'utf8'));
  assert.equal(stored.chat.model, 'handoff-model');
  assert.deepEqual(await fetch(`${base}/api/config`).then(r => r.json()), stored);
  const chat = await fetch(`${base}/api/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [{ role: 'user', content: 'Hello fixture' }] }) });
  assert.equal(chat.status, 200);
  assert.deepEqual(await chat.json(), { reply: 'Authenticated fixture reply' });
  assert.equal(upstreamAuthorization, 'Bearer fixture-model-key');
  assert.deepEqual(upstreamMessages, [{ role: 'system', content: 'Test assistant' }, { role: 'user', content: 'Hello fixture' }]);
  assert.equal((await fetch(`${base}/api/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [{ role: 'system', content: 'bad role' }] }) })).status, 400);
});
