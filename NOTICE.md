# 来源与提取边界

来源网站：[Prepare to Pioneer](https://preparetopioneer.com/)。记录日期：2026-10-09。

本项目通过读取网站正常公开返回的 HTML、JavaScript 与静态资源，定位发布版 `entry.3e07ed2f.js` 的人脸类 `Tz` 和 Shader 模板 `FE`，提取其运行依赖。没有访问非公开后台或绕过权限。

## 已提取的第三方内容

- `src/ParticleFace.js`：原站 `Tz` 的可读格式化版本，替换 Shader 装载入口。
- `src/shaders/face.vert.glsl`、`face.frag.glsl`：原站人脸 Shader。
- `src/vendor/renderer-runtime.js`：人脸依赖的原站渲染、数学、GSAP 动画、事件辅助代码。保留发布文件中的现有版权注释。
- `assets/face/`：原站的人脸颜色与深度 JPEG。
- `assets/audio/c_hello.mp3`：原站短语音，供预览。
- `assets/audio/c_journey.mp3`：从原站发布脚本指向的公开地址取得的约 5 秒开场语音，供参考音色与对比试听；`pioneer-reference.wav` 是它的单声道 24 kHz PCM 转换，不是新生成的声音。
- `assets/fonts/`、`config/palettes.json`：原站字体与配色。
- `reference/`：原站发布版脚本及 HTML，仅用于追溯，不由本地 Web 服务器公开提供。

新编写部分是独立渲染宿主、中文控制页面、Node 本地代理、模型/语音适配、测试与交接脚本。仓库没有冒充原作者开发源码。

未发现可核实的原作者公开 GitHub 源码仓库。相关 source map 请求返回 403，故没有恢复原始 `.vue`/TypeScript 源文件。原站 `/api/chat` 的服务端实现和凭据不在提取范围。

公开可读取不等于已获得开源或商业使用许可；本仓库不为第三方内容授予新的许可，保留各自权利归属。当前仓库设为私有，后续公开发布或对外使用前应确认相应素材与代码授权。

精确来源路径与 SHA-256 校验见 `reference/asset-provenance.json`；提取结构见 `reference/extraction.json`。

## 内置语音识别的独立来源

`assets/speech/` 包含 [Xenova/whisper-tiny](https://huggingface.co/Xenova/whisper-tiny) 与 [Xenova/whisper-base](https://huggingface.co/Xenova/whisper-base) 的 q8 ONNX 转换、配置与 tokenizer。发布方模型卡标注 Apache-2.0，原始模型来自 OpenAI Whisper；随包保留模型卡，固定 revision、源 URL、文件大小和 SHA-256 见 `assets/speech/manifest.json`。

浏览器运行时来自官方 npm 包 `@huggingface/transformers@3.8.1`（Apache-2.0），其中还打包了 `@huggingface/jinja@0.5.3`（MIT）；ONNX Runtime Web 版本为 `1.22.0-dev.20250409-89f8206ba4`（MIT）。完整许可文本位于 `assets/speech/runtime/`。它们与原站人脸资源分别保留来源和许可，不改变原站素材的权利归属。

`assets/audio/speech-test-zh.wav` 为本次生成的中文功能检查音频，测试句为“你好，我想和你聊天。请用中文介绍自己。”，使用本机系统中文 voice 合成，不包含个人录音。

## 可选参考音色模型

`tts/` 是新编写的本地服务适配，调用 [Qwen3-TTS 官方模型 API](https://github.com/QwenLM/Qwen3-TTS)。默认 [Qwen3-TTS-12Hz-0.6B-Base](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-Base)，可切换 1.7B Base 或本地模型目录。模型卡标注 Apache-2.0；权重未打包，用户在 Windows 首次启动时自行下载并保留相应模型许可。该模型许可不赋予原站录音新的使用权。尚未验证原站相似音色的实际效果，也没有获得原站使用的 TTS 模型或 voice ID。
