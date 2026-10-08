/** Microphone access begins only after an explicit user gesture. */
export class VoiceController {
  constructor({ onTranscript, onStatus, onSpeaking }) {
    Object.assign(this, { onTranscript, onStatus, onSpeaking });
    this.generation = 0;
    this.playbackGeneration = 0;
    this.active = false;
    this.processing = false;
    this.playing = false;
  }

  async start(mode) {
    this.cancel();
    const generation = this.generation;
    if (mode === 'browser') return this.startBrowserRecognition(generation);
    this.processing = true;
    this.onStatus('准备录音');
    let stream;
    try {
      const status = await fetch('/api/status').then(r => r.json());
      if (generation !== this.generation) return;
      if (!status.transcriptionConfigured) throw new Error('请先在“模型”中配置本地识别服务，或选择浏览器识别。');
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) throw new Error('浏览器不支持录音，请在 Windows Chrome/Edge 中打开 localhost 页面。');
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (generation !== this.generation) { stream.getTracks().forEach(t => t.stop()); return; }
      this.stream = stream;
      const chunks = [];
      const type = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'].find(x => MediaRecorder.isTypeSupported(x));
      const recorder = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
      this.recorder = recorder;
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onerror = () => { if (generation === this.generation) { this.cancel(); this.onStatus('录音失败，请检查麦克风后重试。'); } };
      recorder.onstop = async () => {
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
          const response = await fetch('/api/transcribe', { method: 'POST', headers: { 'Content-Type': blob.type }, body: blob, signal: controller.signal });
          const result = await response.json();
          if (!response.ok) throw new Error(result.error || '语音识别失败');
          if (generation !== this.generation) return;
          this.processing = false;
          this.onStatus(result.text?.trim() ? '就绪' : '没有识别到语音，请重试');
          if (result.text?.trim()) this.onTranscript(result.text);
        } catch (error) {
          if (generation === this.generation) { this.processing = false; this.onStatus(error.message); }
        } finally { if (this.transcriptionController === controller) this.transcriptionController = null; }
      };
      recorder.start();
      this.processing = false;
      this.active = true;
      this.onStatus('正在录音，点“结束录音”发送');
    } catch (error) {
      stream?.getTracks().forEach(t => t.stop());
      if (generation === this.generation) { this.processing = false; throw error; }
    }
  }

  startBrowserRecognition(generation) {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) throw new Error('该浏览器不支持浏览器语音识别。请用 Windows Chrome/Edge，或连接 Windows 语音识别服务。');
    const recognition = new Recognition();
    this.recognition = recognition;
    let delivered = false, failed = false;
    recognition.lang = 'zh-CN';
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onresult = event => {
      const result = event.results[event.results.length - 1];
      if (generation !== this.generation || delivered) return;
      if (result.isFinal) {
        delivered = true;
        this.active = false;
        this.onStatus('就绪');
        this.onTranscript(result[0].transcript);
      } else this.onStatus(`识别中：${result[0].transcript}`);
    };
    recognition.onerror = event => {
      if (generation !== this.generation) return;
      failed = true;
      this.active = false;
      this.onStatus(`语音识别失败：${event.error}`);
    };
    recognition.onend = () => {
      if (generation !== this.generation) return;
      this.active = false;
      if (!delivered && !failed) this.onStatus('没有识别到语音，请重试');
    };
    recognition.start();
    this.active = true;
    this.onStatus('正在聆听');
  }

  finishRecording() {
    if (this.recorder?.state === 'recording') this.recorder.stop();
    this.recognition?.stop();
    this.active = false;
  }

  speak(text) {
    this.stopPlayback();
    if (!window.speechSynthesis) { this.onStatus('浏览器没有语音播放能力，回复已显示为文字'); return; }
    const generation = this.playbackGeneration;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    const voice = window.speechSynthesis.getVoices().find(v => v.lang.startsWith('zh'));
    if (voice) utterance.voice = voice;
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
    this.recognition?.abort();
    this.recognition = null;
    if (this.recorder?.state === 'recording') this.recorder.stop();
    this.recorder = null;
    this.stream?.getTracks().forEach(t => t.stop());
    this.stream = null;
    this.transcriptionController?.abort();
    this.active = this.processing = false;
    this.stopPlayback();
  }
}
