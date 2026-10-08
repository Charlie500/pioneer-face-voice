/** Decode UTF-8 incrementally: a network chunk may split a Chinese character or an SSE event. */
async function* records(body, separator) {
  if (!body) throw new Error('服务没有返回数据流。');
  const reader = body.getReader(), decoder = new TextDecoder();
  let buffer = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      buffer += done ? decoder.decode() : decoder.decode(value, { stream: true });
      let match;
      while ((match = separator.exec(buffer))) {
        const record = buffer.slice(0, match.index);
        buffer = buffer.slice(match.index + match[0].length);
        if (record.length > 256000) throw new Error('服务返回的数据流过长。');
        if (record.trim()) yield record;
      }
      if (buffer.length > 256000) throw new Error('服务返回的数据流过长。');
      if (done) { if (buffer.trim()) yield buffer; break; }
    }
  } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
}

export async function* readSSE(body) {
  for await (const record of records(body, /\r?\n\r?\n/)) {
    let event = 'message';
    const data = [];
    for (const line of record.split(/\r?\n/)) {
      if (line.startsWith('event:')) event = line.slice(6).trim();
      if (line.startsWith('data:')) data.push(line.slice(5).replace(/^ /, ''));
    }
    if (data.length) yield { event, data: data.join('\n') };
  }
}

export async function* readNDJSON(body) {
  for await (const record of records(body, /\r?\n/)) {
    try { yield JSON.parse(record); }
    catch { throw new Error('模型没有返回有效的数据流。'); }
  }
}
