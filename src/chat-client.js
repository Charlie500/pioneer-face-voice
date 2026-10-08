import { readSSE } from './event-stream.mjs';

export async function* streamReply(messages, { signal, onMeta = () => {} } = {}) {
  const response = await fetch('/api/chat/stream', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages }), signal });
  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.error || `对话请求失败：HTTP ${response.status}`);
  }
  let complete = false;
  for await (const item of readSSE(response.body)) {
    const data = JSON.parse(item.data);
    if (item.event === 'error') throw new Error(data.error || '流式回应中断。');
    if (item.event === 'meta') onMeta(data);
    if (item.event === 'delta' && typeof data.text === 'string') yield data.text;
    if (item.event === 'done') { complete = true; break; }
  }
  if (!complete) throw new Error('连接提前结束，回复尚未完成。');
}
