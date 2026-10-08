import { LocalSpeechRecognizer } from './LocalSpeechRecognizer.js';
import { SpeechDetector, encodeWave } from './SpeechDetector.js';

export class LiveVoice {
  constructor({ onTranscript, onStatus, onSpeechStart, onError, canListen = () => true, localSpeech = new LocalSpeechRecognizer() }) {
    Object.assign(this, { onTranscript, onStatus, onSpeechStart, onError, canListen, localSpeech });
    this.generation = 0;
    this.recognitionGeneration = 0;
    this.active = this.starting = this.processing = this.recording = false;
  }
  async start(mode = 'bundled', options = {}) {
    this.stop();
    const generation = this.generation;
    if (mode === 'browser') throw new Error('连续对话请使用“内置离线识别”或“外部识别服务”。');
    this.starting = true;
    this.controller = new AbortController();
    const signal = this.controller.signal;
    try {
      if (mode === 'bundled') {
        this.onStatus('正在准备连续对话识别模型…');
        await this.localSpeech.load(options.model || 'base', { signal });
      } else {
        const state = await fetch('/api/status', { signal }).then(response => response.json());
        if (!state.transcriptionConfigured) throw new Error('外部识别服务未配置，请使用内置离线识别。');
      }
      if (generation !== this.generation) return;
      const Context = window.AudioContext || window.webkitAudioContext;
      if (!Context || !window.AudioWorkletNode || !navigator.mediaDevices?.getUserMedia) throw new Error('此浏览器不支持连续录音，请使用 Chrome/Edge，或关闭“连续对话”改用手动录音。');
      this.onStatus('正在开启麦克风，请允许录音权限…');
      const context = new Context({ sampleRate: 16000 });
      this.context = context;
      await context.resume();
      if (generation !== this.generation) return;
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
      if (generation !== this.generation) { stream.getTracks().forEach(track => track.stop()); return; }
      this.stream = stream;
      await context.audioWorklet.addModule(new URL('./audio/vad-processor.js', import.meta.url));
      if (generation !== this.generation) return;
      this.detector = new SpeechDetector({
        sampleRate: context.sampleRate, silenceMs: options.silenceMs || 850, threshold: options.threshold || 0.012, calibrationMs: 800,
        onReady: () => { if (generation === this.generation) this.onStatus('正在聆听，说完停顿即可发送。'); },
        onStart: () => {
          if (generation !== this.generation) return;
          this.recording = true;
          this.onSpeechStart();
          this.onStatus('正在聆听你说话…');
        },
        onEnd: samples => {
          if (generation !== this.generation) return;
          this.recording = false;
          this.recognize(samples, context.sampleRate, mode, options, generation, signal);
        },
      });
      this.source = context.createMediaStreamSource(stream);
      this.capture = new window.AudioWorkletNode(context, 'voice-capture');
      this.capture.port.onmessage = ({ data }) => {
        if (generation === this.generation && this.active && data.audio) this.detector.feed(data.audio, !this.processing && this.canListen());
      };
      this.source.connect(this.capture);
      this.capture.connect(context.destination); // Worklet outputs silence; microphone samples are never monitored aloud.
      this.starting = false;
      this.active = true;
      this.onStatus('正在适应环境声，请安静片刻…');
    } catch (error) {
      if (generation !== this.generation) return;
      this.stop();
      throw error;
    }
  }
  async recognize(samples, sampleRate, mode, options, generation, signal) {
    const recognitionGeneration = ++this.recognitionGeneration;
    this.transcriptionController = new AbortController();
    const recognitionSignal = AbortSignal.any([signal, this.transcriptionController.signal]);
    this.processing = true;
    this.onStatus('正在识别这句话…');
    try {
      const blob = encodeWave(samples, sampleRate);
      let text;
      if (mode === 'bundled') text = await this.localSpeech.transcribe(blob, { ...options, signal: recognitionSignal });
      else {
        const response = await fetch('/api/transcribe', { method: 'POST', headers: { 'Content-Type': 'audio/wav' }, body: blob, signal: recognitionSignal });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || '语音识别失败。');
        text = result.text;
      }
      if (generation !== this.generation || recognitionGeneration !== this.recognitionGeneration) return;
      this.processing = false;
      if (text?.includes('\uFFFD')) text = '';
      if (text?.trim()) this.onTranscript(text.trim());
      this.onStatus(text?.trim() ? '正在聆听，可以继续说话。' : '没有识别到清晰语音，请靠近麦克风再说。');
    } catch (error) {
      if (generation !== this.generation || recognitionGeneration !== this.recognitionGeneration) return;
      this.processing = false;
      this.onError(error.message);
    } finally {
      if (generation === this.generation && recognitionGeneration === this.recognitionGeneration) this.transcriptionController = null;
    }
  }
  discardUtterance() {
    ++this.recognitionGeneration;
    this.transcriptionController?.abort();
    this.transcriptionController = null;
    this.localSpeech.cancel();
    this.detector?.reset();
    this.processing = this.recording = false;
  }
  stop() {
    ++this.generation;
    this.controller?.abort();
    this.controller = null;
    this.discardUtterance();
    if (this.capture) this.capture.port.onmessage = null;
    this.capture?.disconnect();
    this.source?.disconnect();
    this.capture = this.source = null;
    this.stream?.getTracks().forEach(track => track.stop());
    this.stream = null;
    this.context?.close().catch(() => {});
    this.context = null;
    this.detector?.reset();
    this.detector = null;
    this.active = this.starting = this.processing = this.recording = false;
  }
  async dispose() { this.stop(); await this.localSpeech.dispose(); }
}
