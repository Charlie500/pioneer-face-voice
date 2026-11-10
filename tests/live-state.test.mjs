import test from 'node:test';
import assert from 'node:assert/strict';
import { LiveVoice } from '../src/LiveVoice.js';

const deferred = () => { let resolve; const promise = new Promise(r => { resolve = r; }); return { promise, resolve }; };
const tick = () => new Promise(r => setImmediate(r));

function environment(t, getMedia) {
  const oldWindow = globalThis.window;
  const oldNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const tracks = [{ stopped: false, stop() { this.stopped = true; } }];
  const contexts = [], nodes = [];
  class Context {
    constructor() { this.sampleRate = 16000; this.destination = {}; this.audioWorklet = { addModule: async () => {} }; contexts.push(this); }
    async resume() {}
    createMediaStreamSource() { return { connect() {}, disconnect() {} }; }
    async close() { this.closed = true; }
  }
  class Worklet { constructor() { this.port = {}; nodes.push(this); } connect() {} disconnect() { this.disconnected = true; } }
  globalThis.window = { AudioContext: Context, AudioWorkletNode: Worklet };
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { mediaDevices: { getUserMedia: getMedia || (async () => ({ getTracks: () => tracks })) } } });
  t.after(() => { globalThis.window = oldWindow; if (oldNavigator) Object.defineProperty(globalThis, 'navigator', oldNavigator); else delete globalThis.navigator; });
  return { tracks, contexts, nodes };
}
function createLive(localSpeech, overrides = {}) {
  const transcripts = [], statuses = [], errors = [];
  const live = new LiveVoice({ localSpeech, onTranscript: text => transcripts.push(text), onStatus: text => statuses.push(text), onSpeechStart() {}, onError: error => errors.push(error), ...overrides });
  return { live, transcripts, statuses, errors };
}
const recognizer = (transcribe = async () => '你好') => ({ load: async () => {}, cancel() {}, dispose: async () => {}, transcribe });
function utterance(node) {
  for (let i = 0; i < 14; i++) node.port.onmessage({ data: { audio: new Float32Array(1024) } });
  for (let i = 0; i < 8; i++) node.port.onmessage({ data: { audio: new Float32Array(1024).fill(0.04) } });
  for (let i = 0; i < 14; i++) node.port.onmessage({ data: { audio: new Float32Array(1024) } });
}

test('live worklet frames endpoint into ASR once, remain listening, and stop releases microphone', async t => {
  const env = environment(t);
  let captures = 0;
  const { live, transcripts, errors } = createLive(recognizer(async blob => { captures++; assert.equal(blob.type, 'audio/wav'); assert.ok(blob.size > 44); return '  你好  '; }));
  t.after(() => live.stop());
  await live.start('bundled');
  assert.equal(live.active, true);
  utterance(env.nodes[0]);
  await tick();
  assert.equal(captures, 1);
  assert.deepEqual(transcripts, ['你好']);
  assert.equal(live.active, true);
  assert.equal(live.processing, false);
  assert.deepEqual(errors, []);
  live.stop();
  assert.equal(env.tracks[0].stopped, true);
  assert.equal(env.contexts[0].closed, true);
  assert.equal(env.nodes[0].port.onmessage, null);
});

test('stop during delayed microphone permission closes any late granted stream', async t => {
  const media = deferred();
  const env = environment(t, () => media.promise);
  const { live } = createLive(recognizer());
  const start = live.start('bundled');
  await tick();
  assert.equal(live.starting, true);
  live.stop();
  media.resolve({ getTracks: () => env.tracks });
  await start;
  assert.equal(live.active, false);
  assert.equal(env.tracks[0].stopped, true);
  assert.equal(env.contexts.length, 0);
  assert.equal(env.nodes.length, 0);
});

test('typed interruption discards an in-flight transcript without ending live capture', async t => {
  const env = environment(t), pending = deferred();
  const { live, transcripts } = createLive(recognizer(() => pending.promise));
  t.after(() => live.stop());
  await live.start('bundled');
  utterance(env.nodes[0]);
  assert.equal(live.processing, true);
  const signal = live.transcriptionController.signal;
  live.discardUtterance();
  assert.equal(signal.aborted, true);
  pending.resolve('obsolete words');
  await tick();
  assert.deepEqual(transcripts, []);
  assert.equal(live.processing, false);
  assert.equal(live.active, true);
  assert.equal(env.tracks[0].stopped, false);
});

test('barge-in disabled blocks response audio from reaching ASR, then listening resumes', async t => {
  const env = environment(t);
  let canListen = false;
  const { live, transcripts } = createLive(recognizer(), { canListen: () => canListen });
  t.after(() => live.stop());
  await live.start('bundled');
  utterance(env.nodes[0]);
  await tick();
  assert.deepEqual(transcripts, []);
  canListen = true;
  utterance(env.nodes[0]);
  await tick();
  assert.deepEqual(transcripts, ['你好']);
});
