import { readSSE, readNDJSON } from './event-stream.mjs';

export function validateConfig(input) {
  if (!input || typeof input !== 'object') throw new Error('配置格式无效。');
  const chat = input.chat ?? {};
  const transcription = input.transcription ?? {};
  const speech = input.speech ?? {};
  if (!['ollama', 'compatible'].includes(chat.provider)) throw new Error('请选择 Ollama 或兼容 API。');
  if (speech.provider && !['system', 'compatible', 'qwen'].includes(speech.provider)) throw new Error('请选择系统声音、TTS API 或本地 Qwen3-TTS。');
  for (const service of [chat, transcription, speech]) {
    if (service.baseUrl) {
      const url = new URL(service.baseUrl);
      if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) throw new Error('服务地址必须是 HTTP/HTTPS 地址，不要在地址中嵌入密钥或查询参数。');
    }
    if (service.apiKeyEnv && !/^[A-Za-z_][A-Za-z0-9_]*$/.test(service.apiKeyEnv)) throw new Error('密钥环境变量名称无效。');
  }
  return {
    chat: { provider: chat.provider, baseUrl: String(chat.baseUrl || '').replace(/\/+$/, ''), model: String(chat.model || '').trim(), apiKeyEnv: String(chat.apiKeyEnv || ''), systemPrompt: String(chat.systemPrompt || '') },
    transcription: { baseUrl: String(transcription.baseUrl || '').replace(/\/+$/, ''), model: String(transcription.model || '').trim(), apiKeyEnv: String(transcription.apiKeyEnv || ''), language: String(transcription.language || 'zh') },
    speech: { provider: speech.provider || 'system', baseUrl: String(speech.baseUrl || 'http://127.0.0.1:8090/v1').replace(/\/+$/, ''), model: String(speech.model || 'Qwen/Qwen3-TTS-12Hz-0.6B-Base').trim(), voice: String(speech.voice || 'pioneer').trim(), apiKeyEnv: String(speech.apiKeyEnv || ''), language: ['Chinese', 'English', 'Auto'].includes(speech.language) ? speech.language : 'Chinese' },
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

async function upstreamJson(url, options = {}, label = '模型服务') {
  let response;
  const signals = [AbortSignal.timeout(60000), ...(options.signal ? [options.signal] : [])];
  try { response = await fetch(url, { ...options, signal: AbortSignal.any(signals) }); }
  catch (error) { if (options.signal?.aborted) throw error; throw new Error(`无法连接${label}。请检查服务地址、运行状态和监听端口。`); }
  if (!response.ok) throw new Error(`${label}返回 HTTP ${response.status}。请检查模型名、接口类型和授权。`);
  try { return await response.json(); } catch { throw new Error(`${label}没有返回 JSON，请检查 API 地址。`); }
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

export async function* chatReplyStream(config, history, signal) {
  const service = config.chat;
  if (!service.baseUrl || !service.model) throw new Error('请先在“模型”中填写服务地址和模型名。');
  if (!Array.isArray(history) || history.some(m => !['user', 'assistant'].includes(m.role) || typeof m.content !== 'string')) throw new Error('对话消息格式无效。');
  const url = service.provider === 'ollama' ? `${service.baseUrl}/api/chat` : apiUrl(service.baseUrl, 'chat/completions');
  let response, received = false, finished = false;
  try {
    response = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders(service) },
      body: JSON.stringify({ model: service.model, messages: [{ role: 'system', content: service.systemPrompt }, ...history.slice(-16)], stream: true }),
      signal: AbortSignal.any([AbortSignal.timeout(90000), ...(signal ? [signal] : [])]),
    });
    if (!response.ok) throw new Error(`模型服务返回 HTTP ${response.status}。请检查模型、流式支持和授权。`);
    const type = response.headers.get('content-type') || '';
    if (type.includes('application/json')) {
      const data = await response.json();
      const text = service.provider === 'ollama' ? data.message?.content : data.choices?.[0]?.message?.content;
      if (typeof text !== 'string' || !text.trim()) throw new Error('模型没有返回可播放的文字回复。');
      yield { type: 'meta', streaming: false };
      yield { type: 'delta', text };
      return;
    }
    yield { type: 'meta', streaming: true };
    if (service.provider === 'ollama') {
      for await (const data of readNDJSON(response.body)) {
        if (data.error) throw new Error('模型流式生成失败。');
        const text = data.message?.content;
        if (typeof text === 'string' && text) { received = true; yield { type: 'delta', text }; }
        if (data.done) { finished = true; break; }
      }
    } else {
      for await (const item of readSSE(response.body)) {
        if (item.data.trim() === '[DONE]') { finished = true; break; }
        let data;
        try { data = JSON.parse(item.data); } catch { throw new Error('模型没有返回有效的数据流。'); }
        if (data.error) throw new Error('模型流式生成失败。');
        const text = data.choices?.[0]?.delta?.content;
        if (typeof text === 'string' && text) { received = true; yield { type: 'delta', text }; }
        if (data.choices?.[0]?.finish_reason) finished = true;
      }
    }
    if (!received) throw new Error('模型没有返回可播放的文字回复。');
    if (!finished) throw new Error('模型流式连接提前结束，回复尚未完成，请重试。');
  } catch (error) {
    if (signal?.aborted) throw error;
    if (/^(模型|服务)/.test(error.message)) throw error;
    throw new Error('模型流式连接中断或超时，请检查服务后重试。');
  }
}

export async function listSpeechModels(config, signal) {
  const service = config.speech;
  if (service.provider === 'system') return [];
  const data = await upstreamJson(apiUrl(service.baseUrl, 'models'), { headers: authHeaders(service), signal }, '语音服务');
  if (!Array.isArray(data.data)) throw new Error('语音服务没有返回兼容的模型列表。');
  return data.data.map(item => item.id).filter(item => typeof item === 'string');
}

export async function synthesizeSpeech(config, text, signal) {
  const service = config.speech;
  if (service.provider === 'system' || !service.baseUrl || !service.model) throw new Error('请先在“声音”页配置 TTS 服务并保存。');
  if (typeof text !== 'string' || !text.trim() || text.length > 4000) throw new Error('语音合成文字为空或过长。');
  let response;
  try {
    response = await fetch(apiUrl(service.baseUrl, 'audio/speech'), {
      method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders(service) },
      body: JSON.stringify({ model: service.model, input: text, voice: service.voice, response_format: 'wav', ...(service.provider === 'qwen' ? { language: service.language } : {}) }),
      signal: AbortSignal.any([AbortSignal.timeout(90000), ...(signal ? [signal] : [])]),
    });
  } catch (error) { if (signal?.aborted) throw error; throw new Error('无法连接语音服务，请检查 TTS 地址和启动状态。'); }
  if (!response.ok) throw new Error(`语音服务返回 HTTP ${response.status}。请检查模型、音色和授权。`);
  const type = (response.headers.get('content-type') || '').split(';')[0];
  if (!/^audio\/(mpeg|wav|x-wav|wave|ogg|webm|mp4|aac|flac)$/.test(type)) { await response.body?.cancel(); throw new Error('语音服务没有返回可播放的音频。'); }
  const limit = 16 * 1024 * 1024;
  const chunks = []; let size = 0;
  for await (const chunk of response.body) {
    size += chunk.length;
    if (size > limit) { await response.body.cancel().catch(() => {}); throw new Error('语音服务返回的音频过长。'); }
    chunks.push(chunk);
  }
  if (!size) throw new Error('语音服务返回了空音频。');
  return { bytes: Buffer.concat(chunks), type };
}

export async function transcribe(config, buffer, contentType, signal) {
  const service = config.transcription;
  if (!service.baseUrl || !service.model) throw new Error('外部语音识别服务尚未配置，请填写服务地址和模型，或使用内置离线识别。');
  const form = new FormData();
  const suffix = contentType.includes('mp4') ? 'm4a' : contentType.includes('wav') ? 'wav' : 'webm';
  form.append('file', new Blob([buffer], { type: contentType }), `voice.${suffix}`);
  form.append('model', service.model);
  if (service.language !== 'auto') form.append('language', service.language);
  const data = await upstreamJson(apiUrl(service.baseUrl, 'audio/transcriptions'), { method: 'POST', headers: authHeaders(service), body: form, signal });
  if (typeof data.text !== 'string') throw new Error('语音识别服务没有返回 text 字段。');
  return data.text;
}
