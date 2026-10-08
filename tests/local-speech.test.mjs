import test from 'node:test';
import assert from 'node:assert/strict';
import { LocalSpeechRecognizer } from '../src/LocalSpeechRecognizer.js';

test('stopping offline inference terminates the worker and a fresh request ignores late results', async t => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'Worker');
  const workers = [];
  globalThis.Worker = class {
    constructor() { workers.push(this); }
    postMessage(data) { this.last = data; }
    terminate() { this.terminated = true; }
  };
  t.after(() => { if (previous) Object.defineProperty(globalThis, 'Worker', previous); else delete globalThis.Worker; });
  const speech = new LocalSpeechRecognizer();
  const first = speech.load('base');
  const rejected = assert.rejects(first, { name: 'AbortError' });
  const oldWorker = workers[0];
  speech.cancel();
  await rejected;
  assert.equal(oldWorker.terminated, true);
  const next = speech.load('tiny');
  oldWorker.onmessage({ data: { id: oldWorker.last.id, type: 'complete', result: 'stale result' } });
  assert.equal(speech.pending.size, 1);
  workers[1].onmessage({ data: { id: workers[1].last.id, type: 'complete', result: 'ready' } });
  assert.equal(await next, 'ready');
  const disposed = speech.dispose();
  workers[1].onmessage({ data: { id: workers[1].last.id, type: 'complete' } });
  await disposed;
  assert.equal(workers[1].terminated, true);
});
