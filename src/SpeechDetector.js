export function joinSamples(frames) {
  const samples = new Float32Array(frames.reduce((sum, frame) => sum + frame.length, 0));
  let offset = 0;
  for (const frame of frames) { samples.set(frame, offset); offset += frame.length; }
  return samples;
}

/** Local energy endpointing. Echo cancellation is requested separately on the microphone track. */
export class SpeechDetector {
  constructor({ sampleRate, threshold = 0.012, silenceMs = 850, minSpeechMs = 280, maxMs = 30000, calibrationMs = 0, onReady = () => {}, onStart, onEnd }) {
    Object.assign(this, { sampleRate, threshold, silenceMs, minSpeechMs, maxMs, onStart, onEnd, calibrationMs, onReady });
    this.noiseFloor = this.calibratedMs = 0;
    this.calibrationLevels = [];
    this.reset();
  }
  reset() {
    this.recording = false;
    this.frames = [];
    this.preRoll = [];
    this.preRollMs = this.voicedMs = this.quietMs = this.durationMs = 0;
  }
  feed(frame, enabled = true) {
    if (!enabled) { this.reset(); return; }
    const ms = frame.length / this.sampleRate * 1000;
    let energy = 0;
    for (const value of frame) energy += value * value;
    const rms = Math.sqrt(energy / Math.max(1, frame.length));
    if (this.calibratedMs < this.calibrationMs) {
      this.calibrationLevels.push(rms);
      this.calibratedMs += ms;
      if (this.calibratedMs >= this.calibrationMs) {
        this.calibrationLevels.sort((a, b) => a - b);
        this.noiseFloor = this.calibrationLevels[Math.floor(this.calibrationLevels.length * 0.4)];
        this.calibrationLevels = [];
        this.onReady();
      }
      return;
    }
    const voiced = rms >= Math.max(this.threshold, this.noiseFloor * 2.5 + 0.003);
    if (!this.recording && !voiced && this.calibrationMs) this.noiseFloor = this.noiseFloor * 0.98 + rms * 0.02;
    if (!this.recording) {
      this.preRoll.push(frame);
      this.preRollMs += ms;
      while (this.preRollMs > 350 && this.preRoll.length > 1) this.preRollMs -= this.preRoll.shift().length / this.sampleRate * 1000;
      if (voiced) { this.voicedMs += ms; this.quietMs = 0; }
      else {
        this.quietMs += ms;
        if (this.quietMs > 180) this.voicedMs = 0;
      }
      if (this.voicedMs < this.minSpeechMs) return;
      this.frames = this.preRoll;
      this.preRoll = [];
      this.recording = true;
      this.durationMs = this.preRollMs;
      this.quietMs = 0;
      this.onStart();
      return;
    }
    this.frames.push(frame);
    this.durationMs += ms;
    this.quietMs = voiced ? 0 : this.quietMs + ms;
    if (this.quietMs >= this.silenceMs || this.durationMs >= this.maxMs) {
      const samples = joinSamples(this.frames);
      this.reset();
      this.onEnd(samples);
    }
  }
}

export function encodeWave(samples, sampleRate) {
  const bytes = new ArrayBuffer(44 + samples.length * 2), view = new DataView(bytes);
  const write = (offset, text) => { for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i)); };
  write(0, 'RIFF'); view.setUint32(4, bytes.byteLength - 8, true); write(8, 'WAVE');
  write(12, 'fmt '); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true); view.setUint32(28, sampleRate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true);
  write(36, 'data'); view.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i++) { const sample = Math.max(-1, Math.min(1, samples[i])); view.setInt16(44 + i * 2, sample * (sample < 0 ? 32768 : 32767), true); }
  return new Blob([bytes], { type: 'audio/wav' });
}
