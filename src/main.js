import { FaceStage } from './FaceStage.js';
import { VoiceController } from './VoiceController.js';
import { chooseVoice, isChineseVoice, normalizeVoiceOptions } from './voice-options.js';
import { ReplyAudio } from './ReplyAudio.js';
import { LiveVoice } from './LiveVoice.js';
import { streamReply } from './chat-client.js';

const $ = id => document.getElementById(id);
const messages = [];
const tabPanels = { chat: 'panel-chat', model: 'settings', voice: 'panel-voice', appearance: 'panel-appearance' };
const tabs = [...document.querySelectorAll('[data-tab]')];
let face, config, requestController, busy = false, requestGeneration = 0, renderReady = false, configLoaded = false;
let replyAudio, live, activeTurn, systemSpeaking = false, lastAudioError = '', liveStatus = '';
let checkedSpeechText = '';
let auditioning = false, availableVoices = [];
const voicePreferenceKey = 'pioneer-face-voice-v1';
let voicePreferences = normalizeVoiceOptions();
try { voicePreferences = normalizeVoiceOptions(JSON.parse(localStorage.getItem(voicePreferenceKey) || '{}')); } catch {}
$('voice-rate').value = voicePreferences.rate;
$('voice-pitch').value = voicePreferences.pitch;
const speechPreferenceKey = 'pioneer-face-speech-v1';
const livePreferenceKey = 'pioneer-face-live-v1';
try {
  const saved = JSON.parse(localStorage.getItem(livePreferenceKey) || '{}') || {};
  if (typeof saved.enabled === 'boolean') $('live-mode').checked = saved.enabled;
  if (typeof saved.bargeIn === 'boolean') $('barge-in').checked = saved.bargeIn;
  if ([650, 850, 1200].includes(saved.silenceMs)) $('silence-duration').value = saved.silenceMs;
  if ([0.006, 0.012, 0.022].includes(saved.threshold)) $('mic-sensitivity').value = saved.threshold;
} catch {}
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
  return { ...voicePreferences, rate: Number($('voice-rate').value), pitch: Number($('voice-pitch').value), provider: config?.speech?.provider || 'system' };
}
function liveOptions() { return { ...speechOptions(), silenceMs: Number($('silence-duration').value), threshold: Number($('mic-sensitivity').value) }; }
function persistLivePreferences() {
  try { localStorage.setItem(livePreferenceKey, JSON.stringify({ enabled: $('live-mode').checked, bargeIn: $('barge-in').checked, ...liveOptions() })); } catch {}
}
function updateLiveNote() {
  $('live-note').textContent = $('live-mode').checked ? '开始后持续聆听，说完停顿即可发送；再次点击结束聊天。' : '手动录音：说完点击“结束录音”发送。';
  updateRecognitionNote();
}
function updateSpeechProvider() {
  const provider = $('speech-provider').value, system = provider === 'system';
  $('system-voice-fields').hidden = !system;
  $('tts-fields').hidden = system;
  $('tts-language-label').hidden = provider !== 'qwen';
  $('compare-reference').hidden = provider !== 'qwen';
  $('voice-pitch').disabled = !system;
  $('pitch-note').hidden = system;
  $('tts-note').textContent = provider === 'qwen' ? '使用随项目提供的 Windows 语音服务，以原站开场音频为参考生成相似声音。需先启动服务，实际相似度请试听。' : '连接提供 /v1/audio/speech 的服务，音色 ID 由该服务提供。';
  $('voice-save-note').textContent = system ? '音色和语速自动保存。切换声音来源后，点击保存用于后续回应。' : '服务配置需要保存；试听或检查时也会保存。后续回应使用已保存的声音来源。';
  updateControls();
}
function speechFormConfig() {
  return { provider: $('speech-provider').value, baseUrl: $('tts-url').value.trim(), model: $('tts-model').value.trim(), voice: $('tts-voice').value.trim(), apiKeyEnv: $('tts-key-env').value.trim(), language: $('tts-language').value };
}
async function saveSpeechConfig() {
  const current = await api('/api/config');
  await api('/api/config', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...current, speech: speechFormConfig() }) });
  config = await api('/api/config');
  $('tts-status').textContent = '声音配置已保存';
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
  const selectedVoice = chooseVoice(availableVoices, voicePreferences.voiceURI);
  $('voice-list-note').textContent = !window.speechSynthesis ? '此浏览器不支持发声，请用 Chrome 或 Edge 打开。'
    : !availableVoices.length ? '暂未读到音色。声音就绪后会自动显示；也可检查系统语音包或更换浏览器。'
    : voicePreferences.voiceURI && !seen.has(voicePreferences.voiceURI) ? '之前选择的音色在此设备不可用，暂用自动声音。可以重新选择。'
    : chineseCount && selectedVoice && !isChineseVoice(selectedVoice) ? `当前选择 ${selectedVoice.name} · ${selectedVoice.lang}。中文聊天建议选择中文音色，可先试听。`
    : chineseCount ? `发现 ${chineseCount} 个中文音色。选一个后点击试听；标为“本机”的声音由系统提供。`
    : '此设备没有中文音色，可选择其他声音，或安装系统中文语音包后刷新。';
  updateControls();
}
function updateRecognitionNote() {
  const mode = $('recognition-mode').value;
  $('bundled-speech-options').hidden = mode !== 'bundled';
  $('recognition-note').textContent = {
    bundled: '自带模型在本机识别，不需要额外 Key。每句最长 30 秒；连续对话会在停顿后自动发送。',
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
    if (!voice.playing && !replyAudio?.active) auditioning = false;
  }
  updateControls();
}
function updateControls() {
  const liveActive = live?.active || live?.starting;
  const playing = voice.playing || replyAudio?.active;
  $('mic-label').textContent = liveActive ? '结束聊天' : voice.active ? '结束录音' : $('live-mode').checked ? '开始聊天' : '开始说话';
  $('mic-button').disabled = !renderReady || !liveActive && voice.processing;
  $('stop-button').disabled = !busy && !voice.active && !playing && !voice.processing;
  $('send-button').disabled = !renderReady;
  const inputBusy = busy || liveActive || voice.active || voice.processing || !renderReady;
  $('preview-button').disabled = inputBusy;
  $('compare-reference').disabled = inputBusy;
  $('test-speech').disabled = inputBusy;
  $('try-speech-chat').disabled = inputBusy;
  $('audition-voice').disabled = inputBusy || $('speech-provider').value === 'system' && !availableVoices.length;
  $('stop-audition').disabled = !playing;
  document.body.dataset.activity = busy || playing ? 'responding' : voice.active || liveActive ? 'listening' : 'idle';
}
const voice = new VoiceController({
  onTranscript: text => { $('message').value = text; sendMessage(text); },
  onStatus: status,
  onSpeaking: speaking => { systemSpeaking = speaking; face?.setSpeaking(speaking || replyAudio?.speaking); updateControls(); },
});
replyAudio = new ReplyAudio({
  onStatus: status,
  onSpeaking: speaking => { face?.setSpeaking(speaking || systemSpeaking); updateControls(); },
  onError: error => { lastAudioError = error; status(error + ' 文字回复会继续显示。'); },
  onIdle: () => { if (!busy) status(lastAudioError || (live?.active ? liveStatus : '就绪')); },
});
live = new LiveVoice({
  onTranscript: text => { $('message').value = text; sendMessage(text, 'live'); },
  onStatus: text => { liveStatus = text; if (!busy && !replyAudio.active) status(text); else updateControls(); },
  onSpeechStart: () => { if ($('barge-in').checked && (busy || replyAudio.active || voice.playing)) interruptReply(); },
  onError: error => status(error),
  canListen: () => $('barge-in').checked || !busy && !replyAudio.active && !voice.playing,
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
    $('speech-provider').value = config.speech.provider;
    $('tts-url').value = config.speech.baseUrl;
    $('tts-model').value = config.speech.model;
    $('tts-voice').value = config.speech.voice;
    $('tts-key-env').value = config.speech.apiKeyEnv;
    $('tts-language').value = config.speech.language;
    updateSpeechProvider();
    $('settings-status').textContent = '';
    configLoaded = true;
  } catch (error) { $('settings-status').textContent = error.message; }
}

function commitTurn(turn, interrupted = false) {
  if (!turn || turn.committed || !turn.reply.trim()) return;
  messages.push(turn.message, { role: 'assistant', content: turn.reply.trim() + (interrupted ? '\n（回应未完成。）' : '') });
  if (messages.length > 16) messages.splice(0, messages.length - 16);
  turn.committed = true;
}
function interruptReply() {
  ++requestGeneration;
  requestController?.abort();
  requestController = null;
  commitTurn(activeTurn, true);
  activeTurn = null;
  auditioning = false;
  replyAudio.cancel();
  voice.cancel();
  busy = false;
  updateControls();
}
async function sendMessage(text, source = 'typed') {
  text = text.trim();
  if (!text) return;
  interruptReply();
  if (source !== 'live' && live.active) live.discardUtterance();
  const generation = ++requestGeneration;
  const message = { role: 'user', content: text };
  const turn = { message, reply: '', committed: false };
  activeTurn = turn;
  $('last-user').textContent = text;
  $('reply').textContent = '';
  $('message').value = '';
  lastAudioError = '';
  busy = true;
  status('等待回应');
  replyAudio.begin(voiceOutputOptions(), $('voice-output').checked);
  const controller = new AbortController();
  requestController = controller;
  try {
    for await (const text of streamReply([...messages, message], { signal: controller.signal, onMeta: data => {
      if (generation === requestGeneration && !data.streaming) status('服务返回整段回复，等待语音播放。');
    } })) {
      if (generation !== requestGeneration) return;
      turn.reply += text;
      $('reply').textContent = turn.reply;
      replyAudio.append(text);
    }
    if (generation !== requestGeneration) return;
    commitTurn(turn);
    replyAudio.end();
  } catch (error) {
    if (generation === requestGeneration && error.name !== 'AbortError') {
      turn.error = true;
      replyAudio.cancel();
      commitTurn(turn, true);
      status(error.message);
    }
  } finally {
    if (generation === requestGeneration) {
      busy = false;
      requestController = null;
      activeTurn = null;
      if (!turn.error && !replyAudio.active && turn.committed) status(lastAudioError || (live.active ? liveStatus : '就绪'));
      updateControls();
    }
  }
}
$('message-form').addEventListener('submit', event => { event.preventDefault(); sendMessage($('message').value); });
$('mic-button').addEventListener('click', async () => {
  if (live.active || live.starting) { live.stop(); interruptReply(); status('聊天已结束，麦克风已关闭。'); return; }
  if (voice.active) { voice.finishRecording(); updateControls(); return; }
  interruptReply();
  try {
    if ($('live-mode').checked) await live.start($('recognition-mode').value, liveOptions());
    else await voice.start($('recognition-mode').value, speechOptions());
    updateControls();
  }
  catch (error) { status(error.name === 'NotAllowedError' ? '请在浏览器中允许此页面使用麦克风。' : error.message); }
});
$('stop-button').addEventListener('click', () => {
  interruptReply();
  status(live.active ? '回应已停止，正在继续聆听。' : '已停止');
});
$('voice-output').addEventListener('change', () => {
  if (!$('voice-output').checked) { replyAudio.cancel(); voice.stopPlayback(); }
  if (!busy && !replyAudio.active) status(live.active ? liveStatus : '就绪');
});
$('preview-button').addEventListener('click', async () => {
  replyAudio.cancel();
  $('reply').textContent = 'Hello, human.';
  $('last-user').textContent = '';
  try { await voice.previewSourceAudio(); }
  catch { status('音频未能播放，请再点一次预览。'); }
});
function stopVoicePreview() {
  auditioning = false;
  replyAudio.cancel();
  voice.stopPlayback();
  $('voice-audition-status').textContent = '';
  if (!busy && !voice.active && !voice.processing) status(live.active ? liveStatus : '就绪');
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
$('audition-voice').addEventListener('click', async () => {
  voice.stopPlayback();
  replyAudio.cancel();
  lastAudioError = '';
  try {
    if ($('speech-provider').value !== 'system') await saveSpeechConfig();
    else if (config?.speech?.provider !== 'system') await saveSpeechConfig();
    auditioning = true;
    const chosen = chooseVoice(availableVoices, voicePreferences.voiceURI);
    const text = $('speech-provider').value === 'system' && chosen && !isChineseVoice(chosen) ? 'Hello. I am here. How was your day?' : '你好，我在这里。我们可以慢慢聊，你今天过得怎么样？';
    replyAudio.begin(voiceOutputOptions());
    replyAudio.append(text);
    replyAudio.end();
  } catch (error) { $('voice-audition-status').textContent = error.message; }
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
$('speech-provider').addEventListener('change', () => {
  stopVoicePreview();
  if ($('speech-provider').value === 'qwen' && config?.speech?.provider !== 'qwen') {
    $('tts-url').value = 'http://127.0.0.1:8090/v1';
    $('tts-model').value = 'Qwen/Qwen3-TTS-12Hz-0.6B-Base';
    $('tts-voice').value = 'pioneer';
    $('tts-key-env').value = '';
    $('tts-language').value = 'Chinese';
  }
  updateSpeechProvider();
});
$('save-speech').addEventListener('click', async () => {
  try { stopVoicePreview(); await saveSpeechConfig(); }
  catch (error) { $('tts-status').textContent = error.message; }
});
$('check-tts').addEventListener('click', async () => {
  $('check-tts').disabled = true;
  $('speech-provider').disabled = $('save-speech').disabled = true;
  $('tts-status').textContent = '正在检查语音服务…';
  try {
    await saveSpeechConfig();
    const result = await api('/api/speech/models');
    $('tts-model-names').replaceChildren(...result.models.map(name => { const option = document.createElement('option'); option.value = name; return option; }));
    if (result.models.length === 1) { $('tts-model').value = result.models[0]; await saveSpeechConfig(); }
    $('tts-status').textContent = result.models.length ? `语音服务可访问 · ${result.models.length} 个模型；请试听验证实际发声。` : '语音服务没有返回模型，请核对服务配置。';
  } catch (error) { $('tts-status').textContent = error.message; }
  finally { $('check-tts').disabled = false; $('speech-provider').disabled = $('save-speech').disabled = false; }
});
$('compare-reference').addEventListener('click', async () => {
  stopVoicePreview();
  auditioning = true;
  try { await voice.previewSourceAudio('/assets/audio/c_journey.mp3'); }
  catch { status('参考音频未能播放，请重试。'); }
});
for (const id of ['live-mode', 'silence-duration', 'mic-sensitivity']) $(id).addEventListener('change', () => {
  if (live.active || live.starting) { live.stop(); interruptReply(); status('对话设置已更新，请重新开始聊天。'); }
  persistLivePreferences();
  updateLiveNote();
  updateControls();
});
$('barge-in').addEventListener('change', persistLivePreferences);
$('recognition-mode').addEventListener('change', () => {
  live.stop();
  interruptReply();
  voice.cancel();
  persistSpeechPreferences();
  updateRecognitionNote();
  status('就绪');
});
for (const id of ['speech-model', 'speech-language']) $(id).addEventListener('change', () => {
  live.stop();
  interruptReply();
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
    ...config,
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
updateLiveNote();
updateSpeechProvider();
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
  replyAudio.cancel();
  live.dispose().catch(() => {});
  face?.dispose();
});
