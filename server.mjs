import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateConfig, chatReply, listModels, transcribe } from './src/model-adapter.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const valueOf = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const port = Number(valueOf('--port', process.env.PORT || 4173));
const host = valueOf('--host', '127.0.0.1');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.glsl': 'text/plain; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp3': 'audio/mpeg', '.woff2': 'font/woff2' };

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
      const current = await config();
      if (url.pathname === '/api/status' && request.method === 'GET') return json(response, 200, { chatConfigured: Boolean(current.chat.baseUrl && current.chat.model), transcriptionConfigured: Boolean(current.transcription.baseUrl && current.transcription.model), model: current.chat.model, provider: current.chat.provider });
      if (url.pathname === '/api/config' && request.method === 'GET') return json(response, 200, current);
      if (url.pathname === '/api/config' && request.method === 'PUT') {
        const next = validateConfig(JSON.parse((await body(request, 64000)).toString()));
        await fs.writeFile(path.join(root, 'config/models.local.json'), JSON.stringify(next, null, 2) + '\n');
        return json(response, 200, { ok: true });
      }
      if (url.pathname === '/api/models' && request.method === 'GET') return json(response, 200, { models: await listModels(current) });
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
    const bytes = await fs.readFile(filename);
    response.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    response.end(bytes);
  } catch (error) {
    if (response.destroyed) return;
    json(response, error.code === 'ENOENT' ? 404 : 400, { error: error.code === 'ENOENT' ? '文件不存在。' : error.message });
  }
});
server.on('error', error => { console.error(`启动失败：${error.code}`); process.exitCode = 1; });
server.listen(port, host, () => console.log(`Face voice preview: http://${host}:${server.address().port}/`));
