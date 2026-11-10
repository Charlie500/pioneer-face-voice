import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { once } from 'node:events';
import { fileURLToPath } from 'node:url';
import { validateConfig, chatReply, chatReplyStream, listModels, listSpeechModels, synthesizeSpeech, transcribe } from './src/model-adapter.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
try { process.loadEnvFile(path.join(root, '.env')); }
catch (error) {
  if (error.code !== 'ENOENT') throw new Error('无法读取本地 .env，请检查文件权限和格式。');
}
const args = process.argv.slice(2);
const valueOf = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const port = Number(valueOf('--port', process.env.PORT || 4173));
const host = valueOf('--host', '127.0.0.1');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.glsl': 'text/plain; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.wasm': 'application/wasm', '.woff2': 'font/woff2' };

async function config() {
  const defaults = JSON.parse(await fs.readFile(path.join(root, 'config/models.json'), 'utf8'));
  try { return validateConfig(JSON.parse(await fs.readFile(path.join(root, 'config/models.local.json'), 'utf8'))); }
  catch (error) { if (error.code !== 'ENOENT') throw error; return validateConfig(defaults); }
}

async function body(request, max = 15 * 1024 * 1024) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > max) throw new Error('录音过长，请缩短后重试。');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

function json(response, status, data) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(data));
}

const server = http.createServer(async (request, response) => {
  const controller = new AbortController();
  response.on('close', () => { if (!response.writableEnded) controller.abort(); });
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    if (url.pathname.startsWith('/api/')) {
      // Local UI endpoints accept their own origin. Secret values never enter the browser.
      if (request.headers.origin && request.headers.origin !== `http://${request.headers.host}`) return json(response, 403, { error: '请从本地项目页面操作。' });
      if (url.pathname === '/api/hardware' && request.method === 'GET') {
        const memoryGB = Math.round(os.totalmem() / (1024 ** 3));
        const logicalCores = os.availableParallelism();
        return json(response, 200, { platform: os.platform(), arch: os.arch(), memoryGB, logicalCores, recommendedSpeechModel: memoryGB >= 8 && logicalCores >= 4 ? 'base' : 'tiny' });
      }
      const current = await config();
      if (url.pathname === '/api/status' && request.method === 'GET') return json(response, 200, { chatConfigured: Boolean(current.chat.baseUrl && current.chat.model), transcriptionConfigured: Boolean(current.transcription.baseUrl && current.transcription.model), model: current.chat.model, provider: current.chat.provider, autoStartVoice: current.autoStartVoice });
      if (url.pathname === '/api/config' && request.method === 'GET') return json(response, 200, current);
      if (url.pathname === '/api/config' && request.method === 'PUT') {
        const next = validateConfig(JSON.parse((await body(request, 64000)).toString()));
        await fs.writeFile(path.join(root, 'config/models.local.json'), JSON.stringify(next, null, 2) + '\n');
        return json(response, 200, { ok: true });
      }
      if (url.pathname === '/api/models' && request.method === 'GET') return json(response, 200, { models: await listModels(current) });
      if (url.pathname === '/api/speech/models' && request.method === 'GET') return json(response, 200, { models: await listSpeechModels(current, controller.signal) });
      if (url.pathname === '/api/speech' && request.method === 'POST') {
        const data = JSON.parse((await body(request, 64000)).toString());
        const audio = await synthesizeSpeech(current, data.text, controller.signal);
        response.writeHead(200, { 'Content-Type': audio.type, 'Content-Length': audio.bytes.length, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
        return response.end(audio.bytes);
      }
      if (url.pathname === '/api/chat/stream' && request.method === 'POST') {
        const data = JSON.parse((await body(request, 256000)).toString());
        let reply = '';
        const send = async (event, payload) => {
          if (response.destroyed) return;
          if (!response.headersSent) response.writeHead(200, { 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-cache, no-transform', 'X-Accel-Buffering': 'no' });
          if (!response.write(`event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`)) await once(response, 'drain', { signal: controller.signal });
        };
        try {
          for await (const part of chatReplyStream(current, data.messages, controller.signal)) {
            if (part.type === 'delta') { reply += part.text; await send('delta', { text: part.text }); }
            else await send('meta', { streaming: part.streaming });
          }
          await send('done', { reply: reply.trim() });
          return response.end();
        } catch (error) {
          if (response.destroyed) return;
          if (!response.headersSent) throw error;
          await send('error', { error: error.message });
          return response.end();
        }
      }
      if (url.pathname === '/api/chat' && request.method === 'POST') {
        const data = JSON.parse((await body(request, 256000)).toString());
        return json(response, 200, { reply: await chatReply(current, data.messages, controller.signal) });
      }
      if (url.pathname === '/api/transcribe' && request.method === 'POST') return json(response, 200, { text: await transcribe(current, await body(request), request.headers['content-type'] || 'audio/webm', controller.signal) });
      return json(response, 404, { error: '接口不存在。' });
    }
    const requested = decodeURIComponent(url.pathname);
    if (!['/', '/index.html', '/style.css'].includes(requested) && !requested.startsWith('/src/') && !requested.startsWith('/assets/') && requested !== '/config/palettes.json') return json(response, 404, { error: '文件不存在。' });
    const filename = path.resolve(root, '.' + (requested === '/' ? '/index.html' : requested));
    if (!filename.startsWith(root + path.sep)) return json(response, 403, { error: '路径无效。' });
    const relative = path.relative(root, filename).split(path.sep).join('/');
    if (!['index.html', 'style.css', 'config/palettes.json'].includes(relative) && !relative.startsWith('src/') && !relative.startsWith('assets/')) return json(response, 404, { error: '文件不存在。' });
    const bytes = await fs.readFile(filename);
    response.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Content-Length': bytes.length, 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    response.end(bytes);
  } catch (error) {
    if (response.destroyed) return;
    json(response, error.code === 'ENOENT' ? 404 : 400, { error: error.code === 'ENOENT' ? '文件不存在。' : error.message });
  }
});
server.on('error', error => { console.error(`启动失败：${error.code}`); process.exitCode = 1; });
server.listen(port, host, () => console.log(`Face voice preview: http://${host}:${server.address().port}/`));
