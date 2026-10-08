class VoiceCapture extends AudioWorkletProcessor {
  constructor() { super(); this.samples = new Float32Array(1024); this.offset = 0; }
  process(inputs, outputs) {
    for (const channel of outputs[0] || []) channel.fill(0);
    const channels = inputs[0];
    if (!channels?.length) return true;
    for (let i = 0; i < channels[0].length; i++) {
      let value = 0;
      for (const channel of channels) value += channel[i] / channels.length;
      this.samples[this.offset++] = value;
      if (this.offset === this.samples.length) {
        this.port.postMessage({ audio: this.samples }, [this.samples.buffer]);
        this.samples = new Float32Array(1024);
        this.offset = 0;
      }
    }
    return true;
  }
}
registerProcessor('voice-capture', VoiceCapture);
