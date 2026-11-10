## 工作流

- 本机用 `node server.mjs` 启动。协议或交互变更运行 `npm test`，识别资源运行 `npm run verify:speech`。

## 开发共识

- 延用已有对话代理、连续聆听和逐句播报。兼容 API 保留明确配置的版本路径。
- 识别模型、运行时及其元数据按清单字节保存。自动聆听由本机配置明确开启。

## 重要文档

- 启动与浏览器验收见 `WINDOWS_HANDOFF.md`。模型与音频协议以 `src/model-adapter.mjs` 和 `tests/realtime.test.mjs` 为准。

## 注意点

- 授权值留在服务端进程环境。自动化语音验证用合成输入和静音浏览器，真人麦克风和听感由用户验收。
