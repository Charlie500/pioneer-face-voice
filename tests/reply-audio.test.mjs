import test from 'node:test';
import assert from 'node:assert/strict';
import { ReplyAudio } from '../src/ReplyAudio.js';
import { SentenceBuffer } from '../src/SentenceBuffer.js';
const tick = () => new Promise(resolve => setImmediate(resolve));

test('sentence buffering keeps decimal tokens intact and flushes an unfinished final sentence', () => {
  const buffer = new SentenceBuffer();
  assert.deepEqual(buffer.append('版本3.'), []);
  assert.deepEqual(buffer.append('6可用。还有'), ['版本3.6可用。']);
  assert.deepEqual(buffer.flush(), ['还有']);
  assert.deepEqual(buffer.flush(), []);
});

test('sentence audio starts before text completion and stays ordered when the second synthesis finishes first', async t => {
  const prepared = [], played = [], gates = [];
  let firstReady, idle = 0;
  const first = new Promise(resolve => { firstReady = resolve; });
  const output = new ReplyAudio({ onStatus() {}, onSpeaking() {}, onIdle: () => idle++,
    prepare: async text => { prepared.push(text); if (text === '第一句。') await first; return { text }; },
    play: (chunk, options, signal, started) => { played.push(chunk.text); started(); return new Promise((resolve, reject) => { gates.push(resolve); signal.addEventListener('abort', () => reject(new DOMException('stop', 'AbortError')), { once: true }); }); },
  });
  t.after(() => output.cancel());
  output.begin(); output.append('第一句。第二句。');
  await tick(); assert.deepEqual(prepared, ['第一句。', '第二句。']); assert.equal(played.length, 0);
  firstReady(); await tick(); assert.deepEqual(played, ['第一句。']); assert.equal(output.closed, false);
  output.end(); gates.shift()(); await tick(); assert.deepEqual(played, ['第一句。', '第二句。']);
  gates.shift()(); await tick(); assert.equal(idle, 1); assert.equal(output.active, false);
});

test('barge-in cancels current audio and pending synthesis, and late old audio cannot play', async t => {
  const prepared = [], played = [], errors = [];
  let finishOld;
  const output = new ReplyAudio({ onStatus() {}, onSpeaking() {}, onError: error => errors.push(error),
    prepare: async (text, options, signal) => { prepared.push({ text, signal }); if (text === '旧第二句。') await new Promise(resolve => { finishOld = resolve; }); return { text }; },
    play: (chunk, options, signal, started) => { played.push(chunk.text); started(); return new Promise((resolve, reject) => { if (chunk.text === '新句子。') resolve(); else signal.addEventListener('abort', () => reject(new DOMException('stop', 'AbortError')), { once: true }); }); },
  });
  t.after(() => output.cancel());
  output.begin({ provider: 'compatible' }); output.append('旧第一句。旧第二句。'); await tick();
  output.begin(); output.append('新句子。'); output.end(); await tick();
  finishOld(); await tick();
  assert.equal(prepared[0].signal.aborted, true);
  assert.deepEqual(played, ['旧第一句。', '新句子。']); assert.deepEqual(errors, []);
});

test('cancel before the prefetch microtask never submits old text using a new turn controller', async t => {
  const sent = [];
  const output = new ReplyAudio({ onStatus() {}, onSpeaking() {}, prepare: async text => { sent.push(text); return { text }; }, play: async () => {} });
  t.after(() => output.cancel());
  output.begin(); output.append('旧文字。'); output.begin(); output.append('新文字。'); output.end(); await tick();
  assert.deepEqual(sent, ['新文字。']);
});

test('a failed preloaded TTS sentence reports once and stops playback while text generation may continue', async t => {
  const errors = [], played = [];
  const output = new ReplyAudio({ onStatus() {}, onSpeaking() {}, onError: error => errors.push(error), prepare: async () => { throw new Error('service down'); }, play: async chunk => played.push(chunk) });
  t.after(() => output.cancel());
  output.begin(); output.append('第一句。第二句。'); await tick(); output.append('第三句。'); output.end(); await tick();
  assert.deepEqual(errors, ['service down']); assert.deepEqual(played, []); assert.equal(output.active, false);
});
