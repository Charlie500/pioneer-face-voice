import { FaceStage } from './FaceStage.js';
import { VoiceController } from './VoiceController.js';

const $ = id => document.getElementById(id);
const messages = [];
const tabPanels = { chat: 'panel-chat', model: 'settings', appearance: 'panel-appearance' };
const tabs = [...document.querySelectorAll('[data-tab]')];
let face, config, requestController, busy = false, requestGeneration = 0, renderReady = false, configLoaded = false;

function status(text) {
  $('activity').textContent = text;
  updateControls();
}
function updateControls() {
  $('mic-label').textContent = voice.active ? '结束录音' : '开始说话';
  $('mic-button').disabled = voice.processing || !renderReady;
  $('stop-button').disabled = !busy && !voice.active && !voice.playing && !voice.processing;
  $('send-button').disabled = busy;
  $('preview-button').disabled = busy || voice.active || voice.processing || !renderReady;
  document.body.dataset.activity = voice.active ? 'listening' : busy || voice.playing ? 'responding' : 'idle';
}
const voice = new VoiceController({
  onTranscript: text => { $('message').value = text; sendMessage(text); },
  onStatus: status,
  onSpeaking: speaking => { face?.setSpeaking(speaking); updateControls(); },
});

function selectTab(name, focus = false) {
  tabs.forEach(tab => {
    const selected = tab.dataset.tab === name;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  Object.entries(tabPanels).forEach(([key, id]) => { $(id).hidden = key !== name; });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    selectTab(tab.dataset.tab);
    if (tab.dataset.tab === 'model' && !configLoaded) loadConnectionForm();
  });
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectTab(tabs[next].dataset.tab, true);
    if (tabs[next].dataset.tab === 'model' && !configLoaded) loadConnectionForm();
  });
});
$('control-panel').addEventListener('toggle', event => {
  const open = event.newState === 'open';
  $('controls-button').setAttribute('aria-expanded', String(open));
  $('controls-button').setAttribute('aria-label', open ? '关闭控制中心' : '打开控制中心');
  if (open && !configLoaded) loadConnectionForm();
});

async function api(url, options) {
  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || '请求失败：' + response.status);
  return result;
}
async function refreshConnection() {
  const state = await api('/api/status');
  $('connection-status').textContent = state.chatConfigured ? (state.provider === 'ollama' ? 'Ollama' : 'API') + ' · ' + state.model : '尚未连接';
  $('connection-status').title = state.chatConfigured ? '模型配置已保存，连接状态以实际回复为准。' : '在模型页连接你的服务。';
}
async function loadConnectionForm() {
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
    configLoaded = true;
  } catch (error) { $('settings-status').textContent = error.message; }
}

async function sendMessage(text) {
  text = text.trim();
  if (!text || busy) return;
  voice.cancel();
  const generation = ++requestGeneration;
  const message = { role: 'user', content: text };
  $('last-user').textContent = text;
  busy = true;
  status('等待回应');
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
  if (busy) { status('先停止当前回应，再开始说话。'); return; }
  try { await voice.start($('recognition-mode').value); updateControls(); }
  catch (error) { status(error.name === 'NotAllowedError' ? '请在浏览器中允许此页面使用麦克风。' : error.message); }
});
$('stop-button').addEventListener('click', () => {
  ++requestGeneration;
  requestController?.abort();
  requestController = null;
  voice.cancel();
  busy = false;
  status('已停止');
});
$('preview-button').addEventListener('click', async () => {
  $('reply').textContent = 'Hello, human.';
  $('last-user').textContent = '';
  try { await voice.previewSourceAudio(); }
  catch { status('音频未能播放，请再点一次预览。'); }
});
$('recognition-mode').addEventListener('change', () => {
  voice.cancel();
  $('recognition-note').textContent = $('recognition-mode').value === 'browser'
    ? '浏览器识别可能使用在线语音服务。'
    : '录音仅在你按下“开始说话”后启动。';
  status('就绪');
});
function formConfig() {
  return {
    chat: { ...config.chat, provider: $('provider').value, baseUrl: $('model-url').value.trim(), model: $('model-name').value.trim(), apiKeyEnv: $('model-key-env').value.trim() },
    transcription: { ...config.transcription, baseUrl: $('stt-url').value.trim(), model: $('stt-model').value.trim(), apiKeyEnv: $('stt-key-env').value.trim() },
  };
}
$('settings-form').addEventListener('submit', async event => {
  event.preventDefault();
  try {
    if (!configLoaded) await loadConnectionForm();
    const next = formConfig();
    await api('/api/config', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(next) });
    config = next;
    await refreshConnection();
    selectTab('chat');
    status('配置已保存');
  } catch (error) { $('settings-status').textContent = error.message; }
});
$('load-models').addEventListener('click', async () => {
  $('settings-status').textContent = '读取模型列表…';
  $('load-models').disabled = true;
  try {
    if (!configLoaded) await loadConnectionForm();
    config = formConfig();
    await api('/api/config', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(config) });
    const result = await api('/api/models');
    $('model-names').replaceChildren(...result.models.map(name => { const option = document.createElement('option'); option.value = name; return option; }));
    if (!$('model-name').value && result.models.length) $('model-name').value = result.models[0];
    $('settings-status').textContent = result.models.length ? '已读取 ' + result.models.length + ' 个模型' : '模型列表为空';
  } catch (error) { $('settings-status').textContent = error.message; }
  finally { $('load-models').disabled = false; }
});

try {
  const palettes = await api('/config/palettes.json');
  const themes = {
    ...palettes,
    frost: { ...palettes.sapphire, faceColor0: '#4d6c86', faceColor1: '#d5edf8', faceColorSpeech: '#c2f1f4' },
  };
  face = await new FaceStage($('face-stage'), themes.frost).init();
  renderReady = true;
  const setTheme = key => {
    face.setTheme(themes[key]);
    $('theme').value = key;
    document.querySelectorAll('[data-theme]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.theme === key)));
  };
  $('theme').addEventListener('change', () => setTheme($('theme').value));
  document.querySelectorAll('[data-theme]').forEach(button => button.addEventListener('click', () => setTheme(button.dataset.theme)));
  status('就绪');
  await refreshConnection();
} catch (error) {
  status(error.message);
  $('control-panel').showPopover();
}
window.addEventListener('pagehide', () => { voice.cancel(); face?.dispose(); });
