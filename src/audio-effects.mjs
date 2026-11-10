// A restrained electronic layer for a low-pitched voice. The dry signal
// remains dominant so the effect preserves consonants and speech rhythm.
export function applyFutureVoice(bytes) {
  if (bytes.length < 46 || bytes.toString('ascii', 0, 4) !== 'RIFF'
    || bytes.toString('ascii', 8, 12) !== 'WAVE' || bytes.toString('ascii', 36, 40) !== 'data'
    || bytes.readUInt16LE(20) !== 1 || bytes.readUInt16LE(22) !== 1 || bytes.readUInt16LE(34) !== 16
    || bytes.readUInt32LE(40) !== bytes.length - 44 || (bytes.length - 44) % 2) {
    throw new Error('未来 AI 音色需要单声道 PCM16 WAV。');
  }
  const sampleRate = bytes.readUInt32LE(24);
  if (sampleRate < 16000 || sampleRate > 48000) throw new Error('未来 AI 音色支持 16–48 kHz 的合成音频。');

  const output = Buffer.from(bytes);
  const delay = new Float64Array(Math.round(sampleRate * 0.0105));
  const high = Math.exp(-2 * Math.PI * 65 / sampleRate);
  const low = 1 - Math.exp(-2 * Math.PI * 5800 / sampleRate);
  const carrierStep = 2 * Math.PI * 68 / sampleRate;
  let previousInput = 0, highPass = 0, lowPass = 0;
  for (let offset = 44, sample = 0; offset < bytes.length; offset += 2, sample++) {
    const input = bytes.readInt16LE(offset);
    highPass = high * (highPass + input - previousInput);
    previousInput = input;
    lowPass += low * (highPass - lowPass);

    const tone = input * 0.8 + lowPass * 0.2;
    const modulation = 0.9 + 0.1 * Math.cos(carrierStep * sample);
    const delayIndex = sample % delay.length;
    const value = tone * modulation + 0.04 * (delay[delayIndex] - tone);
    delay[delayIndex] = tone;
    output.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(value))), offset);
  }
  return output;
}
