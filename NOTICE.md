# 来源与提取边界

来源网站：[Prepare to Pioneer](https://preparetopioneer.com/)。记录日期：2026-10-09。

本项目通过读取网站正常公开返回的 HTML、JavaScript 与静态资源，定位发布版 `entry.3e07ed2f.js` 的人脸类 `Tz` 和 Shader 模板 `FE`，提取其运行依赖。没有访问非公开后台或绕过权限。

## 已提取的第三方内容

- `src/ParticleFace.js`：原站 `Tz` 的可读格式化版本，替换 Shader 装载入口。
- `src/shaders/face.vert.glsl`、`face.frag.glsl`：原站人脸 Shader。
- `src/vendor/renderer-runtime.js`：人脸依赖的原站渲染、数学、GSAP 动画、事件辅助代码。保留发布文件中的现有版权注释。
- `assets/face/`：原站的人脸颜色与深度 JPEG。
- `assets/audio/c_hello.mp3`：原站短语音，供预览。
- `assets/fonts/`、`config/palettes.json`：原站字体与配色。
- `reference/`：原站发布版脚本及 HTML，仅用于追溯，不由本地 Web 服务器公开提供。

新编写部分是独立渲染宿主、中文控制页面、Node 本地代理、模型/语音适配、测试与交接脚本。仓库没有冒充原作者开发源码。

未发现可核实的原作者公开 GitHub 源码仓库。相关 source map 请求返回 403，故没有恢复原始 `.vue`/TypeScript 源文件。原站 `/api/chat` 的服务端实现和凭据不在提取范围。

公开可读取不等于已获得开源或商业使用许可；本仓库不为第三方内容授予新的许可，保留各自权利归属。当前仓库设为私有，后续公开发布或对外使用前应确认相应素材与代码授权。

精确来源路径与 SHA-256 校验见 `reference/asset-provenance.json`；提取结构见 `reference/extraction.json`。
