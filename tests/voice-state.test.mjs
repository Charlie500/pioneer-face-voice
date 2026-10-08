import test from 'node:test';
import assert from 'node:assert/strict';
import { VoiceController } from '../src/VoiceController.js';
import { normalizeVoiceOptions } from '../src/voice-options.js';

function browser(t) {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const utterance = Object.getOwnPropertyDescriptor(globalThis, 'SpeechSynthesisUtterance');
  const spoken = [];
  const instances = [];
  class Recognition {
    constructor() { instances.push(this); }
    start() {}
    stop() {}
    abort() { this.onerror?.({ error: 'aborted' }); this.onend?.(); }
  }
  const voices = [
    { name: 'Cantonese', lang: 'zh-HK', voiceURI: 'cantonese' },
    { name: 'Mandarin', lang: 'zh-CN', voiceURI: 'mandarin' },
    { name: 'Taiwan Mandarin', lang: 'zh-TW', voiceURI: 'taiwan' },
  ];
  globalThis.window = { SpeechRecognition: Recognition, speechSynthesis: { cancel() {}, getVoices: () => voices, speak: item => spoken.push(item) } };
  globalThis.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };
  t.after(() => {
    if (previous) Object.defineProperty(globalThis, 'window', previous); else delete globalThis.window;
    if (utterance) Object.defineProperty(globalThis, 'SpeechSynthesisUtterance', utterance); else delete globalThis.SpeechSynthesisUtterance;
  });
  return { instances, spoken };
}

test('recognition completion does not overwrite the subsequent waiting-for-model status', async t => {
  const { instances } = browser(t);
  const statuses = [];
  const voice = new VoiceController({ onStatus: text => statuses.push(text), onSpeaking() {}, onTranscript: () => statuses.push('等待模型回应') });
  await voice.start('browser');
  const result = [{ transcript: '你好' }];
  result.isFinal = true;
  instances[0].onresult({ results: [result] });
  instances[0].onend();
  assert.equal(statuses.at(-1), '等待模型回应');
  assert.equal(voice.active, false);
});

test('cancelled speech callbacks cannot stop a newer face response', t => {
  const { spoken } = browser(t);
  const states = [], statuses = [];
  const voice = new VoiceController({ onStatus: text => statuses.push(text), onSpeaking: state => states.push(state), onTranscript() {} });
  voice.speak('old');
  spoken[0].onstart();
  voice.cancel();
  voice.speak('new');
  spoken[1].onstart();
  spoken[0].onend();
  assert.equal(voice.playing, true);
  assert.equal(states.at(-1), true);
  assert.equal(statuses.at(-1), '正在回应');
  spoken[1].onend();
  assert.equal(states.at(-1), false);
});

test('reply playback uses the selected voice, language, rate and pitch, with Mandarin fallback', t => {
  const { spoken } = browser(t);
  const voice = new VoiceController({ onStatus() {}, onSpeaking() {}, onTranscript() {} });
  voice.speak('你好', { voiceURI: 'taiwan', rate: 0.9, pitch: 0.95 });
  assert.equal(spoken[0].voice.voiceURI, 'taiwan');
  assert.equal(spoken[0].lang, 'zh-TW');
  assert.equal(spoken[0].rate, 0.9);
  assert.equal(spoken[0].pitch, 0.95);
  voice.speak('你好', { voiceURI: 'missing-on-this-device', rate: Infinity, pitch: 7 });
  assert.equal(spoken[1].voice.voiceURI, 'mandarin');
  assert.equal(spoken[1].rate, 1);
  assert.equal(spoken[1].pitch, 1.2);
  assert.deepEqual(normalizeVoiceOptions(null), { voiceURI: '', rate: 1, pitch: 1 });
});

test('aborting recognition preserves the explicit stopped status', async t => {
  const { instances } = browser(t);
  const statuses = [];
  const voice = new VoiceController({ onStatus: text => statuses.push(text), onSpeaking() {}, onTranscript: () => assert.fail('Cancelled recognition must not submit') });
  await voice.start('browser');
  voice.cancel();
  statuses.push('已停止');
  instances[0].onend();
  assert.equal(statuses.at(-1), '已停止');
  assert.equal(voice.active, false);
});

test('browser recognition only shows listening after the engine starts and gives an actionable network error', async t => {
  const { instances } = browser(t);
  const statuses = [];
  const voice = new VoiceController({ onStatus: text => statuses.push(text), onSpeaking() {}, onTranscript() {} });
  await voice.start('browser');
  assert.equal(voice.active, false);
  assert.equal(voice.processing, true);
  instances[0].onstart();
  assert.equal(voice.active, true);
  instances[0].onerror({ error: 'network' });
  assert.equal(voice.active, false);
  assert.equal(voice.processing, false);
  assert.match(statuses.at(-1), /内置离线识别/);
  instances[0].onend();
  assert.match(statuses.at(-1), /内置离线识别/);
});

test('bundled recording releases the microphone and submits offline recognition without calling an STT API', async t => {
  let voice;
  t.after(() => voice?.cancel());
  browser(t);
  const previousNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const previousFetch = globalThis.fetch;
  let released = 0, apiCalls = 0, options;
  const stream = { getTracks: () => [{ stop() { released++; } }] };
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { mediaDevices: { getUserMedia: async () => stream } } });
  globalThis.fetch = () => { apiCalls++; throw new Error('Bundled recognition must not use a service'); };
  window.MediaRecorder = class {
    static isTypeSupported() { return true; }
    constructor() { this.mimeType = 'audio/webm'; this.state = 'inactive'; }
    start() { this.state = 'recording'; }
    stop() { this.state = 'inactive'; this.finished = this.onstop(); }
  };
  t.after(() => {
    if (previousNavigator) Object.defineProperty(globalThis, 'navigator', previousNavigator); else delete globalThis.navigator;
    globalThis.fetch = previousFetch;
  });
  const texts = [];
  voice = new VoiceController({ onStatus() {}, onSpeaking() {}, onTranscript: text => texts.push(text), localSpeech: {
    async load(model) { assert.equal(model, 'tiny'); },
    async transcribe(blob, passedOptions) { options = passedOptions; assert.equal(blob.type, 'audio/webm'); return '你好'; },
    cancel() {},
  } });
  await voice.start('bundled', { model: 'tiny', language: 'chinese' });
  assert.equal(voice.active, true);
  const recorder = voice.recorder;
  recorder.ondataavailable({ data: new Blob(['fixture audio']) });
  voice.finishRecording();
  await recorder.finished;
  assert.equal(released, 1);
  assert.equal(apiCalls, 0);
  assert.equal(options.model, 'tiny');
  assert.equal(options.language, 'chinese');
  assert.deepEqual(texts, ['你好']);
  assert.equal(voice.active, false);
  assert.equal(voice.processing, false);
});
