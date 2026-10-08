import { FaceStage } from './FaceStage.js';
import { VoiceController } from './VoiceController.js';
import { chooseVoice, isChineseVoice, normalizeVoiceOptions } from './voice-options.js';

const $ = id => document.getElementById(id);
const messages = [];
const tabPanels = { chat: 'panel-chat', model: 'settings', voice: 'panel-voice', appearance: 'panel-appearance' };
const tabs = [...document.querySelectorAll('[data-tab]')];
let face, config, requestController, busy = false, requestGeneration = 0, renderReady = false, configLoaded = false;
let checkedSpeechText = '';
let auditioning = false, availableVoices = [];
const voicePreferenceKey = 'pioneer-face-voice-v1';
let voicePreferences = normalizeVoiceOptions();
try { voicePreferences = normalizeVoiceOptions(JSON.parse(localStorage.getItem(voicePreferenceKey) || '{}')); } catch {}
$('voice-rate').value = voicePreferences.rate;
$('voice-pitch').value = voicePreferences.pitch;
const speechPreferenceKey = 'pioneer-face-speech-v1';
let speechPreferences = {};
try { speechPreferences = JSON.parse(localStorage.getItem(speechPreferenceKey) || '{}') || {}; } catch {}
if (['bundled', 'local', 'browser'].includes(speechPreferences.mode)) $('recognition-mode').value = speechPreferences.mode;
if (['base', 'tiny'].includes(speechPreferences.model)) $('speech-model').value = speechPreferences.model;
if (['chinese', 'english', 'auto'].includes(speechPreferences.language)) $('speech-language').value = speechPreferences.language;

function speechOptions() { return { model: $('speech-model').value, language: $('speech-language').value }; }
function persistSpeechPreferences() {
  speechPreferences = { mode: $('recognition-mode').value, ...speechOptions() };
  try { localStorage.setItem(speechPreferenceKey, JSON.stringify(speechPreferences)); } catch {}
}
function voiceOutputOptions() {
  return { ...voicePreferences, rate: Number($('voice-rate').value), pitch: Number($('voice-pitch').value) };
}
function updateVoiceValues() {
  $('voice-rate-value').textContent = `${Number($('voice-rate').value).toFixed(2)}×`;
  $('voice-pitch-value').textContent = Number($('voice-pitch').value).toFixed(2);
}
function persistVoicePreferences() {
  voicePreferences = normalizeVoiceOptions(voiceOutputOptions());
  try { localStorage.setItem(voicePreferenceKey, JSON.stringify(voicePreferences)); } catch {}
}
function loadVoiceChoices() {
  availableVoices = window.speechSynthesis?.getVoices() || [];
  const defaultVoice = chooseVoice(availableVoices);
  const automatic = document.createElement('option');
  automatic.value = '';
  automatic.textContent = defaultVoice ? `自动选择 · ${defaultVoice.name}` : '自动选择中文声音';
  const groups = [document.createElement('optgroup'), document.createElement('optgroup')];
  groups[0].label = '中文音色';
  groups[1].label = '其他语言';
  const seen = new Set();
  for (const item of [...availableVoices].sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))) {
    if (!item.voiceURI || seen.has(item.voiceURI)) continue;
    seen.add(item.voiceURI);
    const option = document.createElement('option');
    option.value = item.voiceURI;
    option.textContent = `${item.name} · ${item.lang} · ${item.localService ? '本机' : '在线'}`;
    groups[isChineseVoice(item) ? 0 : 1].append(option);
  }
  $('voice-select').replaceChildren(automatic, ...groups.filter(group => group.children.length));
  $('voice-select').value = seen.has(voicePreferences.voiceURI) ? voicePreferences.voiceURI : '';
  $('voice-select').disabled = !availableVoices.length;
  const chineseCount = availableVoices.filter(isChineseVoice).length;
  $('voice-list-note').textContent = !window.speechSynthesis ? '此浏览器不支持发声，请用 Chrome 或 Edge 打开。'
    : !availableVoices.length ? '暂未读到音色。声音就绪后会自动显示；也可检查系统语音包或更换浏览器。'
    : voicePreferences.voiceURI && !seen.has(voicePreferences.voiceURI) ? '之前选择的音色在此设备不可用，暂用自动声音。可以重新选择。'
    : chineseCount ? `发现 ${chineseCount} 个中文音色。选一个后点击试听；标为“本机”的声音由系统提供。`
    : '此设备没有中文音色，可选择其他声音，或安装系统中文语音包后刷新。';
  updateControls();
}
function updateRecognitionNote() {
  const mode = $('recognition-mode').value;
  $('bundled-speech-options').hidden = mode !== 'bundled';
  $('recognition-note').textContent = {
    bundled: '自带模型在本机识别，不需要额外 Key。录音最长 30 秒，说完点“结束录音”发送。',
    local: '录音会发送到你配置的外部识别服务。对话 API 和识别 API 分别配置。',
    browser: '浏览器识别可能使用在线服务；连接失败时可切回内置离线识别。',
  }[mode];
}
async function checkHardware() {
  try {
    const hardware = await api('/api/hardware');
    const platform = { darwin: 'macOS', win32: 'Windows', linux: 'Linux' }[hardware.platform] || hardware.platform;
    const recommended = hardware.recommendedSpeechModel === 'base' ? 'Base' : 'Tiny';
    $('hardware-note').textContent = `${platform} · ${hardware.arch.toUpperCase()} · ${hardware.memoryGB} GB 内存 · ${hardware.logicalCores} 个处理器线程。建议初选 Whisper ${recommended}，可按实际体验切换。`;
    if (!['base', 'tiny'].includes(speechPreferences.model)) $('speech-model').value = hardware.recommendedSpeechModel;
  } catch { $('hardware-note').textContent = '未能读取本机配置，可手动选择。资源较少时建议 Tiny。'; }
}

function status(text) {
  $('activity').textContent = text;
  if (auditioning) {
    $('voice-audition-status').textContent = text === '就绪' ? '试听结束，后续回应会使用此音色。' : text;
    if (!voice.playing) auditioning = false;
  }
  updateControls();
}
function updateControls() {
  $('mic-label').textContent = voice.active ? '结束录音' : '开始说话';
  $('mic-button').disabled = voice.processing || !renderReady;
  $('stop-button').disabled = !busy && !voice.active && !voice.playing && !voice.processing;
  $('send-button').disabled = busy;
  $('preview-button').disabled = busy || voice.active || voice.processing || !renderReady;
  $('test-speech').disabled = busy || voice.active || voice.processing || !renderReady;
  $('try-speech-chat').disabled = busy || voice.active || voice.processing;
  $('audition-voice').disabled = busy || voice.active || voice.processing || !renderReady || !availableVoices.length;
  $('stop-audition').disabled = !voice.playing;
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
    if ($('voice-output').checked) voice.speak(result.reply, voiceOutputOptions());
    else status('就绪');
  } catch (error) { if (generation === requestGeneration && error.name !== 'AbortError') status(error.message); }
  finally { if (generation === requestGeneration) { busy = false; requestController = null; updateControls(); } }
}
$('message-form').addEventListener('submit', event => { event.preventDefault(); sendMessage($('message').value); });
$('mic-button').addEventListener('click', async () => {
  if (voice.active) { voice.finishRecording(); updateControls(); return; }
  if (busy) { status('先停止当前回应，再开始说话。'); return; }
  try { await voice.start($('recognition-mode').value, speechOptions()); updateControls(); }
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
function stopVoicePreview() {
  auditioning = false;
  voice.stopPlayback();
  $('voice-audition-status').textContent = '';
  if (!busy && !voice.active && !voice.processing) status('就绪');
}
$('voice-select').addEventListener('change', () => {
  stopVoicePreview();
  voicePreferences.voiceURI = $('voice-select').value;
  persistVoicePreferences();
  loadVoiceChoices();
});
for (const id of ['voice-rate', 'voice-pitch']) $(id).addEventListener('input', () => {
  stopVoicePreview();
  updateVoiceValues();
  persistVoicePreferences();
});
$('audition-voice').addEventListener('click', () => {
  auditioning = true;
  const chosen = chooseVoice(availableVoices, voicePreferences.voiceURI);
  voice.speak(chosen && !isChineseVoice(chosen) ? 'Hello. I am here. How was your day?' : '你好，我在这里。我们可以慢慢聊，你今天过得怎么样？', voiceOutputOptions());
});
$('stop-audition').addEventListener('click', () => {
  stopVoicePreview();
  $('voice-audition-status').textContent = '试听已停止';
});
$('reset-voice').addEventListener('click', () => {
  stopVoicePreview();
  voicePreferences = normalizeVoiceOptions();
  $('voice-rate').value = voicePreferences.rate;
  $('voice-pitch').value = voicePreferences.pitch;
  persistVoicePreferences();
  updateVoiceValues();
  loadVoiceChoices();
});
$('recognition-mode').addEventListener('change', () => {
  voice.cancel();
  persistSpeechPreferences();
  updateRecognitionNote();
  status('就绪');
});
for (const id of ['speech-model', 'speech-language']) $(id).addEventListener('change', () => {
  voice.cancel();
  persistSpeechPreferences();
  $('speech-check-status').textContent = '';
  checkedSpeechText = '';
  $('try-speech-chat').hidden = true;
  status('就绪');
});
$('check-hardware').addEventListener('click', checkHardware);
$('test-speech').addEventListener('click', async () => {
  checkedSpeechText = '';
  $('try-speech-chat').hidden = true;
  $('speech-check-status').textContent = '正在准备模型并识别中文示例…';
  try {
    const result = await voice.testBundledRecognition(speechOptions());
    checkedSpeechText = result.text;
    $('try-speech-chat').hidden = !result.text;
    $('speech-check-status').textContent = result.text ? `识别成功 · ${result.seconds} 秒：${result.text}` : '示例没有识别出文字，请换一个模型后重试。';
  } catch (error) { $('speech-check-status').textContent = error.name === 'AbortError' ? '检查已停止' : error.message; }
});
$('try-speech-chat').addEventListener('click', () => {
  if (!checkedSpeechText) return;
  selectTab('chat');
  sendMessage(checkedSpeechText);
});
function formConfig() {
  return {
    chat: { ...config.chat, provider: $('provider').value, baseUrl: $('model-url').value.trim(), model: $('model-name').value.trim(), apiKeyEnv: $('model-key-env').value.trim() },
    transcription: { ...config.transcription, baseUrl: $('stt-url').value.trim(), model: $('stt-model').value.trim(), apiKeyEnv: $('stt-key-env').value.trim(), language: { chinese: 'zh', english: 'en', auto: 'auto' }[$('speech-language').value] },
  };
}
$('settings-form').addEventListener('submit', async event => {
  event.preventDefault();
  try {
    if (!configLoaded) await loadConnectionForm();
    const next = formConfig();
    await api('/api/config', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(next) });
    config = next;
    persistSpeechPreferences();
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

updateVoiceValues();
loadVoiceChoices();
window.speechSynthesis?.addEventListener('voiceschanged', loadVoiceChoices);
updateRecognitionNote();
checkHardware();
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
window.addEventListener('pagehide', () => {
  window.speechSynthesis?.removeEventListener('voiceschanged', loadVoiceChoices);
  voice.dispose().catch(() => {});
  face?.dispose();
});
