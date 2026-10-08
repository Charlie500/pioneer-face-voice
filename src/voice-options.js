export function isChineseVoice(voice) {
  return /^(zh|cmn|yue)(-|$)/i.test(voice.lang.replaceAll('_', '-'));
}

export function chooseVoice(voices, voiceURI = '') {
  return voices.find(voice => voice.voiceURI === voiceURI && voiceURI)
    || voices.find(voice => /^(zh-(cn|hans)(-|$)|cmn(-|$))/i.test(voice.lang.replaceAll('_', '-')))
    || voices.find(voice => /^zh-tw(-|$)/i.test(voice.lang))
    || voices.find(isChineseVoice)
    || voices.find(voice => voice.default)
    || voices[0];
}

export function normalizeVoiceOptions(options = {}) {
  const clamp = (value, min, max) => typeof value === 'number' && Number.isFinite(value) ? Math.max(min, Math.min(max, value)) : 1;
  return {
    voiceURI: typeof options?.voiceURI === 'string' ? options.voiceURI : '',
    rate: clamp(options?.rate, 0.7, 1.3),
    pitch: clamp(options?.pitch, 0.8, 1.2),
  };
}
