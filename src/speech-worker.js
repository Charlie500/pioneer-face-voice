import { pipeline, env } from '../assets/speech/runtime/transformers.min.js';

env.allowRemoteModels = false;
env.allowLocalModels = true;
env.localModelPath = '/assets/speech/models/';
env.useBrowserCache = false;
env.backends.onnx.wasm.wasmPaths = new URL('../assets/speech/runtime/', import.meta.url).href;
env.backends.onnx.wasm.numThreads = 1;
env.backends.onnx.wasm.proxy = false;

const models = { tiny: 'Xenova/whisper-tiny', base: 'Xenova/whisper-base' };
let recognizer, currentModel;

async function load(model, id) {
  if (!models[model]) throw new Error('请选择项目自带的语音识别模型。');
  if (recognizer && currentModel === model) return;
  await recognizer?.dispose();
  recognizer = null;
  currentModel = null;
  recognizer = await pipeline('automatic-speech-recognition', models[model], {
    device: 'wasm', dtype: 'q8', local_files_only: true,
    progress_callback: progress => self.postMessage({ id, type: 'progress', progress }),
  });
  currentModel = model;
}

self.onmessage = async ({ data }) => {
  const { id, type } = data;
  try {
    let result;
    if (type === 'dispose') {
      await recognizer?.dispose();
      recognizer = null;
      currentModel = null;
    } else {
      await load(data.model, id);
      if (type === 'transcribe') {
        const options = { task: 'transcribe', chunk_length_s: 30, stride_length_s: 5, return_timestamps: false };
        if (['chinese', 'english'].includes(data.language)) options.language = data.language;
        result = (await recognizer(data.audio, options)).text.trim();
      }
    }
    self.postMessage({ id, type: 'complete', result });
  } catch (error) {
    console.error('Offline speech recognition:', error);
    self.postMessage({ id, type: 'error', message: '内置语音识别失败，请确认下载了完整项目，并尝试轻量模型或刷新页面。' });
  }
};
