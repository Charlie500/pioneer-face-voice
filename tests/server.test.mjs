import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

test('local server serves the face app, protects private files, and validates saved settings', async t => {
  const project = new URL('../', import.meta.url);
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'face-voice-server-'));
  await fs.mkdir(path.join(root, 'src'));
  await fs.mkdir(path.join(root, 'config'));
  for (const name of ['server.mjs', 'package.json', 'index.html', 'style.css', 'src/model-adapter.mjs', 'config/models.json']) {
    await fs.copyFile(new URL(name, project), path.join(root, name));
  }
  await fs.writeFile(path.join(root, '.env'), 'PRIVATE_FILE_VALUE=must-not-be-served');
  const child = spawn(process.execPath, ['server.mjs', '--port', '0'], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
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
  for (const name of ['.env', 'config/models.json', 'config/models.local.json', 'reference/index.html']) {
    assert.equal((await fetch(`${base}/${name}`)).status, 404);
  }
  const defaults = await fetch(`${base}/api/config`).then(r => r.json());
  const blocked = await fetch(`${base}/api/config`, { method: 'PUT', headers: { Origin: 'https://outside.example', 'Content-Type': 'application/json' }, body: JSON.stringify(defaults) });
  assert.equal(blocked.status, 403);
  const next = { ...defaults, chat: { ...defaults.chat, provider: 'compatible', baseUrl: 'http://127.0.0.1:1234/v1', model: 'handoff-model' } };
  const saved = await fetch(`${base}/api/config`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(next) });
  assert.equal(saved.status, 200);
  const stored = JSON.parse(await fs.readFile(path.join(root, 'config/models.local.json'), 'utf8'));
  assert.equal(stored.chat.model, 'handoff-model');
  assert.deepEqual(await fetch(`${base}/api/config`).then(r => r.json()), stored);
  assert.equal((await fetch(`${base}/api/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [{ role: 'system', content: 'bad role' }] }) })).status, 400);
});
