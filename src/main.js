import { FaceStage } from './FaceStage.js';
import { VoiceController } from './VoiceController.js';

const $ = id => document.getElementById(id);
const messages = [];
let face, config, requestController, busy = false, requestGeneration = 0;
function status(text) { $('activity').textContent = text; updateControls(); }
function updateControls() {
  $('mic-button').textContent = voice.active ? '结束录音' : '开始说话';
  $('mic-button').disabled = voice.processing;
  $('stop-button').disabled = !busy && !voice.active && !voice.playing && !voice.processing;
  $('send-button').disabled = busy;
  $('preview-button').disabled = busy || voice.active || voice.processing;
}
const voice = new VoiceController({
  onTranscript: text => { $('message').value = text; sendMessage(text); },
  onStatus: status,
  onSpeaking: speaking => { face?.setSpeaking(speaking); updateControls(); },
});

async function api(url, options) {
  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || `请求失败：${response.status}`);
  return result;
}

async function refreshConnection() {
  const state = await api('/api/status');
  $('connection-status').textContent = state.chatConfigured ? `已配置 ${state.provider === 'ollama' ? 'Ollama' : '兼容 API'} · ${state.model}` : '模型未连接 · 等待 Windows 配置';
}

async function sendMessage(text) {
  text = text.trim();
  if (!text || busy) return;
  voice.cancel();
  const generation = ++requestGeneration;
  const message = { role: 'user', content: text };
  $('last-user').textContent = text;
  busy = true;
  status('等待模型回应');
  const controller = new AbortController();
  requestController = controller;
  try {
    const result = await api('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [...messages, message] }), signal: controller.signal });
    if (generation !== requestGeneration) return;
    messages.push(message, { role: 'assistant', content: result.reply });
    if (messages.length > 16) messages.splice(0, messages.length - 16);
    $('reply').textContent = result.reply;
    $('message').value = '';
    if ($('voice-output').checked) voice.speak(result.reply);
    else status('就绪');
  } catch (error) { if (generation === requestGeneration && error.name !== 'AbortError') status(error.message); }
  finally { if (generation === requestGeneration) { busy = false; requestController = null; updateControls(); } }
}

$('message-form').addEventListener('submit', event => { event.preventDefault(); sendMessage($('message').value); });
$('mic-button').addEventListener('click', async () => {
  if (voice.active) { voice.finishRecording(); updateControls(); return; }
  if (busy) { status('先点“停止回应”，再开始说话。'); return; }
  try { await voice.start($('recognition-mode').value); updateControls(); }
  catch (error) { status(error.name === 'NotAllowedError' ? '麦克风未获授权，请在浏览器中允许此页面使用麦克风。' : error.message); }
});
$('stop-button').addEventListener('click', () => { ++requestGeneration; requestController?.abort(); requestController = null; voice.cancel(); busy = false; status('已停止'); });
$('preview-button').addEventListener('click', async () => {
  $('reply').textContent = 'Hello, human.';
  $('last-user').textContent = '';
  try { await voice.previewSourceAudio(); } catch { status('音频未能播放，请再点一次预览。'); }
});
$('recognition-mode').addEventListener('change', () => {
  voice.cancel();
  $('recognition-note').textContent = $('recognition-mode').value === 'browser' ? '浏览器识别可能使用浏览器厂商的在线语音服务。中文语音由浏览器提供。' : 'Windows 识别服务需要单独配置。录音仅在按下“开始说话”后启动。';
  status('就绪');
});

function formConfig() {
  return { chat: { ...config.chat, provider: $('provider').value, baseUrl: $('model-url').value.trim(), model: $('model-name').value.trim(), apiKeyEnv: $('model-key-env').value.trim() }, transcription: { ...config.transcription, baseUrl: $('stt-url').value.trim(), model: $('stt-model').value.trim(), apiKeyEnv: $('stt-key-env').value.trim() } };
}

$('settings-button').addEventListener('click', async () => {
  try {
    config = await api('/api/config');
    $('provider').value = config.chat.provider;
    $('model-url').value = config.chat.baseUrl;
    $('model-name').value = config.chat.model;
    $('model-key-env').value = config.chat.apiKeyEnv;
    $('stt-url').value = config.transcription.baseUrl;
    $('stt-model').value = config.transcription.model;
    $('stt-key-env').value = config.transcription.apiKeyEnv;
    $('settings-status').textContent = '';
    $('settings').showModal();
  } catch (error) { status(error.message); }
});
$('close-settings').addEventListener('click', () => $('settings').close());
$('settings-form').addEventListener('submit', async event => {
  event.preventDefault();
  try {
    const next = formConfig();
    await api('/api/config', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(next) });
    config = next;
    await refreshConnection();
    $('settings').close();
    status('配置已保存；请在 Windows 上验证模型连接。');
  } catch (error) { $('settings-status').textContent = error.message; }
});
$('load-models').addEventListener('click', async () => {
  $('settings-status').textContent = '读取模型列表…';
  $('load-models').disabled = true;
  try {
    config = formConfig();
    await api('/api/config', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(config) });
    const result = await api('/api/models');
    $('model-names').replaceChildren(...result.models.map(name => { const option = document.createElement('option'); option.value = name; return option; }));
    if (!$('model-name').value && result.models.length) $('model-name').value = result.models[0];
    $('settings-status').textContent = result.models.length ? `读取到 ${result.models.length} 个模型。请保存配置后测试。` : '服务可连接，模型列表为空。';
  } catch (error) { $('settings-status').textContent = error.message; }
  finally { $('load-models').disabled = false; }
});

try {
  const palettes = await api('/config/palettes.json');
  face = await new FaceStage($('face-stage'), palettes.amethyst).init();
  $('theme').addEventListener('change', () => face.setTheme(palettes[$('theme').value]));
  status('就绪');
  await refreshConnection();
} catch (error) { status(error.message); $('mic-button').disabled = true; $('preview-button').disabled = true; }
window.addEventListener('pagehide', () => { voice.cancel(); face?.dispose(); });
