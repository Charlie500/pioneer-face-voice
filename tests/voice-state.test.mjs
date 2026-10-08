import test from 'node:test';
import assert from 'node:assert/strict';
import { VoiceController } from '../src/VoiceController.js';

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
  globalThis.window = { SpeechRecognition: Recognition, speechSynthesis: { cancel() {}, getVoices: () => [{ lang: 'zh-CN' }], speak: item => spoken.push(item) } };
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
