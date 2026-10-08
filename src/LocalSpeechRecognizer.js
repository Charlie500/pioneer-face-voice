/** The bundled model runs in its own worker; raw microphone audio stays on this computer. */
export class LocalSpeechRecognizer {
  constructor() {
    this.pending = new Map();
    this.sequence = 0;
    this.worker = null;
  }

  request(type, payload = {}, { signal, onProgress } = {}) {
    if (signal?.aborted) return Promise.reject(new DOMException('已停止', 'AbortError'));
    if (!this.worker) {
      const worker = new Worker(new URL('./speech-worker.js', import.meta.url), { type: 'module' });
      this.worker = worker;
      worker.onmessage = ({ data }) => {
        const job = this.pending.get(data.id);
        if (!job) return;
        if (data.type === 'progress') { job.onProgress?.(data.progress); return; }
        this.pending.delete(data.id);
        job.cleanup();
        if (data.type === 'error') job.reject(new Error(data.message));
        else job.resolve(data.result);
      };
      worker.onerror = error => {
        console.error('Offline speech worker:', error.message);
        this.abort(new Error('内置语音识别未能启动，请刷新后重试，或改用外部识别服务。'));
      };
    }
    const id = ++this.sequence;
    return new Promise((resolve, reject) => {
      const abort = () => this.cancel();
      signal?.addEventListener('abort', abort, { once: true });
      this.pending.set(id, { resolve, reject, onProgress, cleanup: () => signal?.removeEventListener('abort', abort) });
      try { this.worker.postMessage({ id, type, ...payload }, payload.audio ? [payload.audio.buffer] : []); }
      catch (error) { this.pending.delete(id); signal?.removeEventListener('abort', abort); reject(error); }
    });
  }

  load(model = 'base', options) { return this.request('load', { model }, options); }

  async transcribe(blob, { model = 'base', language = 'chinese', signal } = {}) {
    const Context = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!Context) throw new Error('当前浏览器不能处理录音，请用 Chrome、Edge 或 Safari 打开项目。');
    const context = new Context(1, 1, 16000);
    const decoded = await context.decodeAudioData(await blob.arrayBuffer());
    if (signal?.aborted) throw new DOMException('已停止', 'AbortError');
    const audio = new Float32Array(decoded.length);
    for (let channel = 0; channel < decoded.numberOfChannels; channel++) {
      const samples = decoded.getChannelData(channel);
      for (let i = 0; i < audio.length; i++) audio[i] += samples[i] / decoded.numberOfChannels;
    }
    let energy = 0;
    for (const sample of audio) energy += sample * sample;
    if (audio.length < 4800 || Math.sqrt(energy / audio.length) < 0.001) return '';
    return this.request('transcribe', { model, language, audio }, { signal });
  }

  abort(error) {
    this.worker?.terminate(); // Termination interrupts synchronous WASM inference and releases its memory.
    this.worker = null;
    const jobs = [...this.pending.values()];
    this.pending.clear();
    for (const job of jobs) { job.cleanup(); job.reject(error); }
  }
  cancel() { if (this.pending.size) this.abort(new DOMException('已停止', 'AbortError')); }
  async dispose() {
    if (this.pending.size) { this.cancel(); return; }
    if (!this.worker) return;
    try { await this.request('dispose'); }
    finally { this.worker?.terminate(); this.worker = null; }
  }
}
