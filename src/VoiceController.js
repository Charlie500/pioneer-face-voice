import { LocalSpeechRecognizer } from './LocalSpeechRecognizer.js';
import { chooseVoice, normalizeVoiceOptions } from './voice-options.js';

/** Microphone access begins only after an explicit user gesture. */
export class VoiceController {
  constructor({ onTranscript, onStatus, onSpeaking, localSpeech = new LocalSpeechRecognizer() }) {
    Object.assign(this, { onTranscript, onStatus, onSpeaking });
    this.localSpeech = localSpeech;
    this.generation = 0;
    this.playbackGeneration = 0;
    this.active = false;
    this.processing = false;
    this.playing = false;
  }

  async start(mode = 'bundled', options = {}) {
    this.cancel();
    const generation = this.generation;
    if (mode === 'browser') return this.startBrowserRecognition(generation, options.language);
    this.processing = true;
    this.onStatus('准备录音');
    let stream;
    try {
      if (mode === 'bundled') {
        this.onStatus('正在准备内置识别模型…');
        const controller = new AbortController();
        this.transcriptionController = controller;
        await this.localSpeech.load(options.model || 'base', { signal: controller.signal });
        if (generation !== this.generation) return;
        this.transcriptionController = null;
      } else {
        const status = await fetch('/api/status').then(r => r.json());
        if (generation !== this.generation) return;
        if (!status.transcriptionConfigured) throw new Error('外部识别服务尚未配置，请切换为“内置离线识别”，或填写识别服务地址和模型。');
      }
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) throw new Error('当前浏览器不支持录音，请用 Chrome、Edge 或 Safari 打开 localhost 页面。');
      this.onStatus('正在开启麦克风，请允许录音权限…');
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (generation !== this.generation) { stream.getTracks().forEach(t => t.stop()); return; }
      this.stream = stream;
      const chunks = [];
      const Recorder = window.MediaRecorder;
      const type = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'].find(x => Recorder.isTypeSupported(x));
      const recorder = new Recorder(stream, type ? { mimeType: type } : undefined);
      this.recorder = recorder;
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onerror = () => { if (generation === this.generation) { this.cancel(); this.onStatus('录音失败，请检查麦克风后重试。'); } };
      recorder.onstop = async () => {
        clearTimeout(this.recordingTimer);
        stream.getTracks().forEach(t => t.stop());
        if (generation !== this.generation) return;
        this.stream = null;
        this.recorder = null;
        this.active = false;
        this.processing = true;
        this.onStatus('识别中');
        const controller = new AbortController();
        this.transcriptionController = controller;
        try {
          const blob = new Blob(chunks, { type: recorder.mimeType });
          let text;
          if (mode === 'bundled') text = await this.localSpeech.transcribe(blob, { ...options, signal: controller.signal });
          else {
            const response = await fetch('/api/transcribe', { method: 'POST', headers: { 'Content-Type': blob.type }, body: blob, signal: controller.signal });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || '语音识别失败');
            text = result.text;
          }
          if (generation !== this.generation) return;
          this.processing = false;
          this.onStatus(text?.trim() ? '就绪' : '没有识别到语音，请靠近麦克风后重试');
          if (text?.trim()) this.onTranscript(text);
        } catch (error) {
          if (generation === this.generation) { this.processing = false; this.onStatus(error.message); }
        } finally { if (this.transcriptionController === controller) this.transcriptionController = null; }
      };
      recorder.start();
      this.recordingTimer = setTimeout(() => {
        if (generation === this.generation && this.active) this.finishRecording();
      }, 30000);
      this.processing = false;
      this.active = true;
      this.onStatus('正在录音，点“结束录音”发送');
    } catch (error) {
      stream?.getTracks().forEach(t => t.stop());
      if (generation === this.generation) { this.processing = false; throw error; }
    }
  }

  startBrowserRecognition(generation, language = 'chinese') {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) throw new Error('当前浏览器没有浏览器语音识别，请切换为项目自带的“内置离线识别”。');
    const recognition = new Recognition();
    this.recognition = recognition;
    let delivered = false, failed = false;
    recognition.lang = language === 'english' ? 'en-US' : language === 'auto' ? navigator.language : 'zh-CN';
    recognition.interimResults = true;
    recognition.continuous = false;
    this.processing = true;
    this.onStatus('正在开启语音识别…');
    recognition.onstart = () => {
      if (generation !== this.generation || failed || delivered) return;
      this.processing = false;
      this.active = true;
      this.onStatus('正在聆听');
    };
    recognition.onresult = event => {
      const result = event.results[event.results.length - 1];
      if (generation !== this.generation || delivered) return;
      if (result.isFinal) {
        delivered = true;
        this.active = false;
        this.processing = false;
        this.onStatus('就绪');
        this.onTranscript(result[0].transcript);
      } else this.onStatus(`识别中：${result[0].transcript}`);
    };
    recognition.onerror = event => {
      if (generation !== this.generation) return;
      failed = true;
      this.active = false;
      this.processing = false;
      const errors = {
        network: '浏览器识别服务连接失败。请切换为“内置离线识别”，无需访问浏览器的在线识别服务。',
        'not-allowed': '麦克风或语音识别权限未允许，请检查此页面和系统的麦克风权限。',
        'audio-capture': '无法访问麦克风，请检查输入设备及系统权限。',
        'service-not-allowed': '浏览器识别服务不可用，请切换为“内置离线识别”。',
        'no-speech': '没有识别到语音，请靠近麦克风后重试。',
      };
      this.onStatus(errors[event.error] || `语音识别失败：${event.error}`);
    };
    recognition.onend = () => {
      if (generation !== this.generation) return;
      this.active = false;
      this.processing = false;
      if (!delivered && !failed) this.onStatus('没有识别到语音，请重试');
    };
    try { recognition.start(); }
    catch (error) { this.processing = false; this.recognition = null; throw error; }
  }

  async testBundledRecognition(options = {}) {
    this.cancel();
    const generation = this.generation;
    const controller = new AbortController();
    this.transcriptionController = controller;
    this.processing = true;
    this.onStatus('正在检查内置识别…');
    const started = performance.now();
    try {
      await this.localSpeech.load(options.model || 'base', { signal: controller.signal });
      const response = await fetch('/assets/audio/speech-test-zh.wav', { signal: controller.signal });
      if (!response.ok) throw new Error('中文示例音频缺失，请下载完整项目。');
      const text = await this.localSpeech.transcribe(await response.blob(), { ...options, language: 'chinese', signal: controller.signal });
      if (generation !== this.generation) throw new DOMException('已停止', 'AbortError');
      return { text, seconds: Math.round((performance.now() - started) / 100) / 10 };
    } finally {
      if (generation === this.generation) {
        this.processing = false;
        this.transcriptionController = null;
        this.onStatus('就绪');
      }
    }
  }

  finishRecording() {
    clearTimeout(this.recordingTimer);
    if (this.recorder?.state === 'recording') this.recorder.stop();
    this.recognition?.stop();
    this.active = false;
  }

  speak(text, options = {}) {
    this.stopPlayback();
    if (!window.speechSynthesis) { this.onStatus('浏览器没有语音播放能力，回复已显示为文字'); return; }
    const generation = this.playbackGeneration;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    const settings = normalizeVoiceOptions(options);
    const voice = chooseVoice(window.speechSynthesis.getVoices(), settings.voiceURI);
    if (voice) { utterance.voice = voice; utterance.lang = voice.lang; }
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;
    this.playing = true;
    this.onStatus('准备播放回应');
    utterance.onstart = () => { if (generation === this.playbackGeneration) { this.onSpeaking(true); this.onStatus('正在回应'); } };
    utterance.onend = () => { if (generation === this.playbackGeneration) { this.playing = false; this.onSpeaking(false); this.onStatus('就绪'); } };
    utterance.onerror = event => {
      if (generation !== this.playbackGeneration) return;
      this.playing = false;
      this.onSpeaking(false);
      this.onStatus(['canceled', 'interrupted'].includes(event.error) ? '已停止' : `语音播放失败：${event.error}`);
    };
    window.speechSynthesis.speak(utterance);
  }

  async previewSourceAudio() {
    this.stopPlayback();
    const generation = this.playbackGeneration;
    const audio = new Audio('/assets/audio/c_hello.mp3');
    this.audio = audio;
    this.playing = true;
    this.onStatus('准备播放原站语音');
    audio.onplaying = () => { if (generation === this.playbackGeneration) { this.onSpeaking(true); this.onStatus('播放原站语音'); } };
    audio.onended = () => { if (generation === this.playbackGeneration) { this.playing = false; this.onSpeaking(false); this.onStatus('就绪'); } };
    try { await audio.play(); }
    catch (error) { if (generation === this.playbackGeneration) { this.stopPlayback(); throw error; } }
  }

  stopPlayback() {
    ++this.playbackGeneration;
    this.audio?.pause();
    this.audio = null;
    window.speechSynthesis?.cancel();
    this.playing = false;
    this.onSpeaking(false);
  }

  cancel() {
    ++this.generation;
    clearTimeout(this.recordingTimer);
    this.recognition?.abort();
    this.recognition = null;
    if (this.recorder?.state === 'recording') this.recorder.stop();
    this.recorder = null;
    this.stream?.getTracks().forEach(t => t.stop());
    this.stream = null;
    this.transcriptionController?.abort();
    this.transcriptionController = null;
    this.localSpeech.cancel();
    this.active = this.processing = false;
    this.stopPlayback();
  }

  async dispose() { this.cancel(); await this.localSpeech.dispose(); }
}
