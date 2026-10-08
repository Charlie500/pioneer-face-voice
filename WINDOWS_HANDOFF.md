# Windows 交接：人脸语音对话

## 交接目标与范围

用户需要 Prepare to Pioneer 的粒子人脸，改造为“语音聊天，人脸配合回应”，支持外部 API 和指定本地模型。本仓库已完成独立人脸提取、内置识别、连续聊天、流式文字和逐句播报；提供可选的本地参考音色 TTS 服务。界面采用全屏冰白人脸，所有操作集中在右上角按钮展开的毛玻璃控制中心，分为“对话 / 模型 / 声音 / 外观”。TTS 真模型、真人连续对话与设备验收在 Windows 上进行。

仓库：<https://github.com/Charlie500/pioneer-face-voice>，设为私有。这里包含原站已发布的前端部分及新写的独立宿主，不包含原作者的完整后台工程。

## 1. 获取并运行

准备 Node.js 22+、Git、Chrome 或 Edge。Windows 电脑应使用拥有该私有仓库访问权的 GitHub 账号。

```powershell
git clone https://github.com/Charlie500/pioneer-face-voice.git
cd pioneer-face-voice
node --version
node server.mjs
```

打开 <http://127.0.0.1:4173/>。保持终端运行，`Ctrl+C` 停止服务器。无需 `npm install` 就能预览和运行测试。

替代启动：双击 `scripts/start.cmd`，或执行 `./scripts/start.ps1 -OpenBrowser`。端口冲突时可执行 `node server.mjs --port 4174`，同时改用对应页面地址。若 PowerShell 禁止运行脚本，直接使用 CMD 或 Node 命令即可。

### 本次已选的局域网模型

Mac 当前项目和仓库默认配置 `config/models.json` 已保存这组设置；Windows 新克隆即可使用：

| 设置 | 已选值 |
| --- | --- |
| 对话接口 | 兼容 API |
| 服务地址 | `http://192.168.10.102:8080/v1` |
| 模型名称 | `qwen3.6-35b-iq2_m` |
| 对话授权环境变量名 | `MODEL_API_KEY` |

该服务的 `/v1/models` 返回 HTTP 200，模型确实出现在列表中；无密钥的对话请求返回 HTTP 401。2026-10-09 已在 Mac 客户端使用用户提供的授权，通过项目代理收到真实回复“连接成功。”（约 1.7 秒），网页两轮对话也正确保留了“小林”的上下文。密钥只保存在 Mac 本地 `.env`，不会随仓库或交接包转移；Windows 仍需配置该服务的 API Key。

在 Windows PowerShell 的仓库根目录运行。若服务器已启动，先在其终端按 Ctrl+C。下面的输入会遮蔽密钥，仅为当前终端进程设置授权：

```powershell
$modelServiceSecret = Read-Host '输入这个模型服务的 API Key' -AsSecureString
$env:MODEL_API_KEY = [System.Net.NetworkCredential]::new('', $modelServiceSecret).Password
Remove-Variable modelServiceSecret
node server.mjs
```

如果希望双击启动时也能获得授权，可在项目根目录新建本地 `.env` 文本文件（文件名不要变成 `.env.txt`），填写一行，将示例内容替换为你的密钥：

```dotenv
MODEL_API_KEY=你的模型服务APIKey
```

`node server.mjs`、`scripts/start.cmd` 和 `scripts/start.ps1` 均会通过服务器启动流程读取该文件；改动密钥后须重启服务器。该文件已被 Git 忽略，请不要加入交接包或强制提交。

若已经存在 `config/models.local.json`，它会优先于仓库默认配置；请在控制中心“模型”中核对或修改为表格中的值。使用上面的 PowerShell 临时授权方式时，必须由设置了 `MODEL_API_KEY` 的同一个终端启动 Node，已经运行的进程不会自动获得后来设置的变量。Windows 本机成功返回真实回复后，再填写对应验收结果。

**先验收人脸：** 打开页面应看到随窗口调整大小的完整粒子头部，画布覆盖整个视口，默认只有右上角一个控制按钮。展开按钮，在“对话”中点击“原站语音预览”应播放短音频、出现“播放原站语音”并触发波纹/颜色变化。收起面板应继续播放；重新展开后点击“停止回应”应立即停声，人脸回到待机。在“外观”中切换“蓝宝石”“翡翠”等配色应即时生效。

右上角按钮、面板外部点击、Esc 均可收起控制中心；分栏支持方向键切换。窄屏下，较长的模型设置可以在面板内部滚动。

## 2. 连接本机对话模型

二选一，使用 Windows 上实际已有的服务与模型，不假定显卡或模型型号。

### Ollama

确认 Ollama 服务已运行。在控制中心“模型”中选择 Ollama，填写 `http://127.0.0.1:11434`，点击“读取已安装模型”，选择返回的实际模型名并保存。

如需从终端核对本机安装列表，可运行 `ollama list`。本项目不会自动安装 Ollama，也不会自动下载大模型。

### LM Studio 或其他兼容 API

在 LM Studio 中加载实际模型并开启本地服务器；按服务显示的地址配置。常见地址是 `http://127.0.0.1:1234/v1`，对话接口选择“兼容 API”。读取模型列表、确认 identifier，然后保存。

其他 API 同样填写其根地址或 `/v1` 根地址。不要填写完整的 `/chat/completions` 路径，适配器会追加接口路径。需要授权时填写启动 Node 进程中已有的环境变量名；不要提交密钥值。

控制中心右上方显示接口类型和模型名时，仅表示配置完整，**不代表已验证模型可用**。在“对话”的文字输入框发送“请用一句中文介绍自己”，确认出现真实回复后才能记为模型连接通过。

如使用独立终端验证，先保持网页服务器运行，再执行：

```powershell
./scripts/smoke-test.ps1
./scripts/smoke-test.ps1 -Chat
```

第一条只检查本地服务器与资源；第二条会调用配置的真实模型。若外部 API 按量收费，第二条是一次实际请求。

## 3. 接通语音

### 默认方式：内置离线识别 + 浏览器发声

完整仓库/ZIP 已包含 Whisper Tiny、Base 和浏览器 WASM 运行资源，运行时不必下载模型或连接识别服务。控制中心“模型”中查看本机内存与处理器检查结果，选择内置模型与识别语言。初选建议依据内存和线程数，实际速度用“用中文示例检查识别”检查；成功后可点“用识别结果试聊”。

保持“内置离线识别”，回到“对话”，默认“连续对话”开启。点击“开始聊天”，首次加载模型后允许**此 localhost 页面**使用麦克风，安静片刻完成约 0.8 秒环境声校准。说一句中文，停顿默认 0.85 秒自动提交；每句最长 30 秒。模型文字边生成边显示，声音逐句播放，随后继续聆听。点“结束聊天”才关闭麦克风；收起面板不会停止聊天。识别在本机 Worker 运行，只把识别文字发送给对话 API。

“停止回应”停止当前模型/发声请求和音频队列，连续麦克风保持开启。默认不启用“语音打断”，避免扬声器回声误触发；戴耳机时可打开并验证回应中说话能中止旧轮。输入文字发送也能中止旧轮。对话节奏可选 0.65/0.85/1.2 秒停顿与三档灵敏度，环境噪声误触发时先降低灵敏度。关闭“连续对话”后可手动点“开始说话 / 结束录音”。识别方式、模型、语言和对话节奏在当前浏览器保留。

在“声音”页选择“系统音色”，再选择回应音色并点击“试听这个声音”，可调语速、音高和停止试听；选项自动保存在当前浏览器。中文音色优先列出，“本机/在线”标记来自浏览器。再回到“对话”勾选“语音回应”，聊天使用同一音色和参数。声音由 Windows/浏览器的 `speechSynthesis` 提供，实际列表可能和 Mac 不同，需听声验收；某些音色依赖联网。切换声音来源后需保存，试听也会保存来源。

### 可选：原站参考音色或其他 TTS API

原站语音预览是固定 MP3，没有可直接调用的原站 voice ID。本仓库取到了约 5 秒开场录音，转换为 `assets/audio/pioneer-reference.wav` 并附对应英文文字；Qwen3-TTS Base 用它生成相似音色。实际相似度、中文跨语言表现和速度未实听验证，不能保证和原站一致。

先准备 Python 3.12（包含 Python launcher），在仓库根目录打开另一个 PowerShell 终端：

```powershell
./tts/setup.ps1
./tts/start.ps1 -ModelSize 0.6B
```

安装脚本会显示 NVIDIA GPU/显存信息，自动选择 CUDA 或 CPU，之后检查 Torch 是否真的可用。CUDA 默认使用官方 cu128 / Torch 2.7.0 轮子；可用 `./tts/setup.ps1 -Device cuda -CudaVariant cu124` 改为 cu124 / Torch 2.6.0，或 `-Device cpu` 使用 CPU。显卡驱动、真实 GPU 兼容性与安装成功仍需 Windows 检查；启动 `-Device auto` 会依据 Torch 的实际 CUDA 可用状态选设备。

首次启动会下载 `Qwen/Qwen3-TTS-12Hz-0.6B-Base` 及其运行所需模型资源，保持联网和终端运行，等待“Reference voice ready”和服务监听提示。ASR 已随包，TTS 权重没有随包；CPU 合成可能很慢，不承诺实时速度。资源允许时可以停止 TTS 终端，运行 `./tts/start.ps1 -ModelSize 1.7B` 比较；这是可选项，不是按显存保证能够运行的推荐。已有完整本地模型可用 `-ModelPath 'D:\Models\Qwen3-TTS-Base'`，不会改变对话 API 配置。

网页“声音来源”选“本地 Qwen3-TTS · 参考音色”，服务地址 `http://127.0.0.1:8090/v1`，音色 ID `pioneer`，发声语言选中文。点击“检查语音服务”会同步唯一已加载的模型名，再点“试听这个声音”；成功发声后再开启聊天。服务只监听本机 localhost，不需要浏览器 CORS，Node 代为请求。TTS 保持原音高，页面语速仍可调。

更换自己的参考 WAV（3–30 秒干净单人音频）与准确转录文字：

```powershell
./tts/start.ps1 -Reference 'D:\Audio\reference.wav' -ReferenceText '参考音频中准确说出的文字'
```

没有转录时可加 `-XVectorOnly`，效果需另测。参考音频只由本地 Python 读取。需要 TTS 授权时，由 Python 和 Node 的各自启动环境提供相同 `TTS_API_KEY`，页面仅填写环境变量名称；Node 会读取其本地 `.env`，Python 桥接不自动读取该文件。

已有其他语音 API 时选择“TTS API／其他本地服务”，填写独立地址、模型和音色 ID。服务须支持 `POST /v1/audio/speech`，请求含 `model/input/voice/response_format=wav`，响应是音频字节，不能用 `/audio/transcriptions` 或对话接口代替。`language` 额外字段只发送给本地 Qwen 桥接，不强加给通用 API。

实现基于 [Qwen3-TTS 官方 Python API](https://github.com/QwenLM/Qwen3-TTS)，运行依赖在 `tts/requirements.txt`。可选协议测试（模拟合成，不运行真模型）：

```powershell
./.venv-tts/Scripts/python.exe -m pip install httpx==0.28.1
./.venv-tts/Scripts/python.exe -m unittest discover -s tts -p 'test_*.py' -v
```

页面逐句请求并最多预取两句，按顺序播放。打断会立即停声并取消 HTTP；本地已开始的 Torch 推理可能继续完成，串行锁会保留到它结束，排队的旧句子被跳过。当前不是原生音频 token 流，也没有全双工回声分离保证。

### 可选：外部识别 API

服务必须接受 `POST /v1/audio/transcriptions` 的 multipart 上传：`file`、`model`、`language=zh`，返回 JSON `text`。Chrome/Edge 通常上传 WebM/Opus，服务须支持此格式，或在 Windows 服务侧转换音频。

在“模型 → 授权与识别服务”里填识别服务根地址和实际 STT 模型名称。Ollama/LM Studio 的**对话接口配置本身**不会给本项目提供 STT。

选择“外部识别服务”模式，连续对话会上传单声道 PCM WAV，手动录音模式通常上传 WebM/Opus。服务须接受所用格式。识别文字进入模型、回复逐句播放并触发人脸回应。每句最长 30 秒；外部上传另受服务器 15 MB 限额约束。

本次 Qwen 对话服务的音频识别接口实测 HTTP 501：`The current model does not support audio input.`。不要将它填成识别服务；默认内置模型已提供识别。

### 可选：浏览器识别

浏览器识别可能依赖浏览器厂商的在线服务。当前 Mac 内嵌浏览器实测出现 `network` 错误，因此不作为默认方式。失败时使用内置离线识别，不要把切换模式记为识别成功。

浏览器识别仅用于手动录音；连续聊天使用内置识别或外部识别服务。

## 4. Windows 验收清单

将设备、服务与结果填写到 `docs/WINDOWS_TEST_RECORD.md`：

- [ ] 人脸稳定显示、随窗口适配、鼠标转动、至少两种配色正常。
- [ ] 默认只显示全屏人脸和右上角按钮；四个分栏、面板开合与窄屏滚动正常。
- [ ] 原站音频播放时动画回应；中止播放有效。
- [ ] 已安装模型列表正确，文字输入得到真实中文回复。
- [ ] 至少两轮对话，第二轮能理解上一轮上下文。
- [ ] 麦克风仅在主动开始时使用，“结束聊天”后指示灯熄灭；“停止回应”保留连续聆听。
- [ ] 中文录音识别成功，识别结果进入真实模型。
- [ ] 内置 Tiny / Base 可切换，中文示例识别正常，刷新后保留识别方式、模型和语言。
- [ ] 音色列表反映 Windows 实际声音；切换/试听/语速/音高/停止正常，刷新后保留选择。
- [ ] 回复使用所选音色，能听到中文发声；播放期间人脸回应，结束后恢复待机。
- [ ] 生成等待中/语音播放中停止，旧回复不会覆盖下一轮。
- [ ] 连续说两轮、停顿自动提交；回应后恢复聆听，没有环境声/扬声器回声误触发。
- [ ] 回复文字陆续到达，第一句在整个回复完成前开始播放，音频队列保持句子顺序。
- [ ] 戴耳机开启语音打断，旧音频/请求停止，新轮正常；关闭时播放音频不进入识别。
- [ ] 可选 TTS：Windows 安装/启动、0.6B 与可选 1.7B、真实 WAV、参考音色相似度、中文自然度与首次/热启动延迟。
- [ ] 服务停机或模型名错误时显示明确错误，可修改配置后重试。
- [ ] `npm test` 在 Windows 通过。可选 CI 模板仅做模拟协议/状态测试，目前未启用。
- [ ] 若目标为全离线，断网后重复识别→模型→发声流程并记录结果。

本版本自带离线识别，并支持连续聊天、流式文字和逐句播报。参考音色 TTS 提供代码/参考音频/安装脚本，权重首次启动下载。逐音素口型与原生双向音频流尚未实现。首段回复仍可能等待较久：Mac 单次真实 Qwen 流式请求首段约 8.6 秒，完整文本约 8.8 秒，不是端到端语音延迟保证。

## 5. 常见问题

| 现象 | 检查 |
| --- | --- |
| 模型列表读取失败 | 本机服务是否启动、地址/端口是否正确、接口类型是否匹配 |
| 配置已保存但没有回复 | 模型是否加载、授权是否正确；流式请求超时 90 秒，普通列表/识别请求 60 秒 |
| 连续聊天误提交或误打断 | 降低麦克风灵敏度、开始校准时保持安静、使用耳机；扬声器播放时关闭“语音打断” |
| 参考音色没有声音 | 独立 TTS 终端是否启动、实际模型名和 pioneer 是否一致；先试听，再检查 Python 终端错误 |
| TTS 很慢 / 显存不足 | 检查 Torch 的实际 device 与显存占用；改用 0.6B、系统音色或更快的 TTS API；不要把 CPU 启动当成实时验收 |
| STT 返回 404 | 根地址是否正确、服务是否提供 `/v1/audio/transcriptions` |
| STT 不接受录音 | WebM/Opus 解码支持、模型名称、语言字段 |
| 能收到文字但没有中文声音 | Windows/浏览器是否提供中文 voice，系统音量、浏览器音频限制 |
| 浏览器识别失败 | 网络、厂商语音服务、麦克风权限；可改接本地 STT |
| 内置识别启动失败 | 确认取得完整项目；运行 `npm run verify:speech`，尝试 Tiny 或刷新页面 |
| 人脸 Shader/WebGL 错误 | Chrome/Edge GPU 加速与驱动；记录控制台错误及显卡型号 |
| 环境变量缺失 | 检查项目根目录 `.env` 的变量名/文件名，或启动 Node 的终端环境；修改后重启，界面只填变量名称 |

## 6. 给 Windows 上的 Codex 的继续任务

将下面这段作为后续任务，打开克隆的仓库再执行：

> 继续完成本仓库的 Windows 真实连续语音聊天和原站参考音色验收。先阅读 README.md、WINDOWS_HANDOFF.md、NOTICE.md 和 docs/VERIFICATION.md，保留人脸、来源与全屏毛玻璃界面。确认 Node.js 22+，运行 npm test、npm run verify:speech，启动页面。检查硬件、内置 Tiny/Base 中文示例与持久化，保留离线识别默认。核对 LAN Qwen API 和 Windows 本地授权，验证真实流式文字/两轮上下文，再用真人麦克风验证停顿自动提交、逐句播报、持续聆听、结束释放、按钮/文字/耳机语音打断和回声误触发。按本文脚本检查 Windows GPU、安装 Python 3.12 TTS 依赖，启动 Qwen3-TTS 0.6B Base（用户已选择此接入方向），首启下载其权重，参考项目已有开场 WAV 和转录；验证实际合成、原站相似度、中文自然度和端到端延迟，资源允许再比较 1.7B。保留系统声音和通用 TTS API 选项。不要下载对话大模型、提交密钥、把启动/模拟测试当成真模型通过。将设备、实际版本、测得延迟、证据和剩余问题更新到 docs/WINDOWS_TEST_RECORD.md，完成后提交并推送。

可修改人脸参数的入口在 `src/ParticleFace.js`，GLSL 修改后运行 `npm run shaders`。对话/TTS 协议从 `src/model-adapter.mjs` 开始；连续录音在 `src/LiveVoice.js`，停顿检测在 `src/SpeechDetector.js`，音频队列在 `src/ReplyAudio.js`，本地参考音色在 `tts/server.py`。
