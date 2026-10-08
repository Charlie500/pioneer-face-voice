export function validateConfig(input) {
  if (!input || typeof input !== 'object') throw new Error('配置格式无效。');
  const chat = input.chat ?? {};
  const transcription = input.transcription ?? {};
  if (!['ollama', 'compatible'].includes(chat.provider)) throw new Error('请选择 Ollama 或兼容 API。');
  for (const service of [chat, transcription]) {
    if (service.baseUrl) {
      const url = new URL(service.baseUrl);
      if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) throw new Error('服务地址必须是 HTTP/HTTPS 地址，不要在地址中嵌入密钥或查询参数。');
    }
    if (service.apiKeyEnv && !/^[A-Za-z_][A-Za-z0-9_]*$/.test(service.apiKeyEnv)) throw new Error('密钥环境变量名称无效。');
  }
  return {
    chat: { provider: chat.provider, baseUrl: String(chat.baseUrl || '').replace(/\/+$/, ''), model: String(chat.model || '').trim(), apiKeyEnv: String(chat.apiKeyEnv || ''), systemPrompt: String(chat.systemPrompt || '') },
    transcription: { baseUrl: String(transcription.baseUrl || '').replace(/\/+$/, ''), model: String(transcription.model || '').trim(), apiKeyEnv: String(transcription.apiKeyEnv || ''), language: String(transcription.language || 'zh') },
  };
}

export function apiUrl(base, suffix) {
  const root = base.replace(/\/+$/, '');
  return root.endsWith('/v1') ? `${root}/${suffix}` : `${root}/v1/${suffix}`;
}

export function authHeaders(service, environment = process.env) {
  const token = service.apiKeyEnv ? environment[service.apiKeyEnv] : undefined;
  if (service.apiKeyEnv && !token) throw new Error(`服务端缺少密钥环境变量：${service.apiKeyEnv}`);
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function upstreamJson(url, options = {}) {
  let response;
  const signals = [AbortSignal.timeout(60000), ...(options.signal ? [options.signal] : [])];
  try { response = await fetch(url, { ...options, signal: AbortSignal.any(signals) }); }
  catch (error) { if (options.signal?.aborted) throw error; throw new Error('无法连接模型服务。请在 Windows 上检查地址、服务状态和监听端口。'); }
  if (!response.ok) throw new Error(`模型服务返回 HTTP ${response.status}。请检查模型名、接口类型和授权。`);
  try { return await response.json(); } catch { throw new Error('模型服务没有返回 JSON，请检查 API 地址。'); }
}

export async function listModels(config) {
  const service = config.chat;
  if (!service.baseUrl) throw new Error('请先填写模型服务地址。');
  const url = service.provider === 'ollama' ? `${service.baseUrl}/api/tags` : apiUrl(service.baseUrl, 'models');
  const data = await upstreamJson(url, { headers: authHeaders(service) });
  const models = service.provider === 'ollama' ? data.models?.map(m => m.name) : data.data?.map(m => m.id);
  if (!Array.isArray(models)) throw new Error('模型列表格式与所选接口类型不符。');
  return models.filter(Boolean);
}

export async function chatReply(config, history, signal) {
  const service = config.chat;
  if (!service.baseUrl || !service.model) throw new Error('请先在“模型”中填写服务地址和模型名。');
  if (!Array.isArray(history) || history.some(m => !['user', 'assistant'].includes(m.role) || typeof m.content !== 'string')) throw new Error('对话消息格式无效。');
  const messages = [{ role: 'system', content: service.systemPrompt }, ...history.slice(-16)];
  const body = { model: service.model, messages, stream: false };
  const url = service.provider === 'ollama' ? `${service.baseUrl}/api/chat` : apiUrl(service.baseUrl, 'chat/completions');
  const data = await upstreamJson(url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders(service) }, body: JSON.stringify(body), signal });
  const reply = service.provider === 'ollama' ? data.message?.content : data.choices?.[0]?.message?.content;
  if (typeof reply !== 'string' || !reply.trim()) throw new Error('模型没有返回可播放的文字回复。');
  return reply.trim();
}

export async function transcribe(config, buffer, contentType, signal) {
  const service = config.transcription;
  if (!service.baseUrl || !service.model) throw new Error('请先配置 Windows 语音识别服务。');
  const form = new FormData();
  const suffix = contentType.includes('mp4') ? 'm4a' : contentType.includes('wav') ? 'wav' : 'webm';
  form.append('file', new Blob([buffer], { type: contentType }), `voice.${suffix}`);
  form.append('model', service.model);
  form.append('language', service.language);
  const data = await upstreamJson(apiUrl(service.baseUrl, 'audio/transcriptions'), { method: 'POST', headers: authHeaders(service), body: form, signal });
  if (typeof data.text !== 'string') throw new Error('语音识别服务没有返回 text 字段。');
  return data.text;
}
