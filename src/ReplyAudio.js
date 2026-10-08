import { SentenceBuffer } from './SentenceBuffer.js';
import { chooseVoice, normalizeVoiceOptions } from './voice-options.js';

async function prepareChunk(text, options, signal) {
  if (options.provider === 'system') return { text, system: true };
  const response = await fetch('/api/speech', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }), signal });
  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.error || `语音合成失败：HTTP ${response.status}`);
  }
  return { blob: await response.blob() };
}

function playChunk(chunk, options, signal, started) {
  return new Promise((resolve, reject) => {
    let audio, url, utterance, settled = false;
    const finish = error => {
      if (settled) return;
      settled = true;
      signal.removeEventListener('abort', abort);
      if (audio) { audio.pause(); audio.removeAttribute('src'); audio.load(); }
      if (url) URL.revokeObjectURL(url);
      error ? reject(error) : resolve();
    };
    const abort = () => {
      if (utterance) window.speechSynthesis?.cancel();
      finish(new DOMException('已停止', 'AbortError'));
    };
    if (signal.aborted) { abort(); return; }
    signal.addEventListener('abort', abort, { once: true });
    if (chunk.system) {
      if (!window.speechSynthesis) { finish(new Error('浏览器不支持语音播放。')); return; }
      utterance = new SpeechSynthesisUtterance(chunk.text);
      const voice = chooseVoice(window.speechSynthesis.getVoices(), options.voiceURI);
      utterance.lang = voice?.lang || 'zh-CN';
      if (voice) utterance.voice = voice;
      utterance.rate = options.rate;
      utterance.pitch = options.pitch;
      utterance.onstart = started;
      utterance.onend = () => finish();
      utterance.onerror = event => finish(new Error(`语音播放失败：${event.error}`));
      window.speechSynthesis.speak(utterance);
    } else {
      url = URL.createObjectURL(chunk.blob);
      audio = new Audio(url);
      audio.playbackRate = options.rate;
      audio.preservesPitch = true;
      audio.onplaying = started;
      audio.onended = () => finish();
      audio.onerror = () => finish(new Error('合成音频未能播放，请检查语音服务的音频格式。'));
      audio.play().catch(finish);
    }
  });
}

/** One ordered playback queue. At most two sentences are prepared ahead; cancellation drops the entire turn. */
export class ReplyAudio {
  constructor({ onStatus, onSpeaking, onIdle = () => {}, onError = () => {}, prepare = prepareChunk, play = playChunk }) {
    Object.assign(this, { onStatus, onSpeaking, onIdle, onError, prepare, play });
    this.generation = 0;
    this.active = this.speaking = false;
    this.queue = [];
    this.buffer = new SentenceBuffer();
  }
  begin(options = {}, enabled = true) {
    this.cancel();
    this.options = { ...normalizeVoiceOptions(options), provider: options.provider || 'system' };
    this.enabled = enabled;
    this.closed = this.failed = this.completed = false;
    this.controller = new AbortController();
  }
  append(text) { if (this.enabled && !this.failed) this.enqueue(this.buffer.append(text)); }
  end() {
    this.closed = true;
    if (this.enabled && !this.failed) this.enqueue(this.buffer.flush());
    this.finishIfIdle();
  }
  enqueue(sentences) {
    for (const text of sentences) this.queue.push({ text });
    if (!this.queue.length) return;
    this.active = true;
    this.prefetch();
    if (!this.running) this.pump();
  }
  prefetch() {
    const options = this.options, signal = this.controller.signal;
    for (const job of this.queue.slice(0, 2)) {
      // Catch here as well as in pump: a preloaded second sentence may fail before its turn starts.
      job.prepared ??= Promise.resolve().then(() => {
        if (signal.aborted) throw new DOMException('已停止', 'AbortError');
        return this.prepare(job.text, options, signal);
      }).then(value => ({ value }), error => ({ error }));
    }
  }
  async pump() {
    const generation = this.generation;
    this.running = true;
    try {
      while (generation === this.generation && this.queue.length) {
        const job = this.queue[0];
        this.onStatus(this.options.provider === 'system' ? '准备播放回应' : '正在合成下一句…');
        const prepared = await job.prepared;
        if (generation !== this.generation) return;
        if (prepared.error) throw prepared.error;
        await this.play(prepared.value, this.options, this.controller.signal, () => {
          if (generation !== this.generation) return;
          this.speaking = true;
          this.onSpeaking(true);
          this.onStatus('正在回应');
        });
        if (generation !== this.generation) return;
        this.speaking = false;
        this.onSpeaking(false);
        this.queue.shift();
        this.prefetch();
      }
    } catch (error) {
      if (generation === this.generation && error.name !== 'AbortError') {
        this.failed = true;
        this.controller.abort();
        this.queue = [];
        this.buffer = new SentenceBuffer();
        this.active = this.speaking = false;
        this.onSpeaking(false);
        this.onError(error.message);
      }
    } finally {
      if (generation === this.generation) {
        this.running = false;
        if (!this.queue.length) this.active = false;
        this.finishIfIdle();
      }
    }
  }
  finishIfIdle() {
    if (this.closed && !this.running && !this.queue.length && !this.completed) {
      this.completed = true;
      this.active = false;
      this.onIdle();
    }
  }
  cancel() {
    ++this.generation;
    this.controller?.abort();
    this.queue = [];
    this.buffer = new SentenceBuffer();
    this.running = this.active = this.speaking = false;
    this.onSpeaking(false);
  }
}
