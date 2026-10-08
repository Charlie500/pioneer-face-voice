# 如何追溯与重新提取

原始人脸来自 `reference/entry.3e07ed2f.js`，模块内部标识为 `Tz`；Shader 标识为 `FE`。

提取脚本解析发布版 AST 与模块作用域，保留人脸所需的声明、赋值初始化及副作用语句。独立宿主替换原站调试 GUI、页面游标管理和设备判断三个入口，移除 Nuxt 引导和页面依赖。格式化后的变量仍有原站压缩名称，这不是原作者的原始命名恢复。

运行项目无需提取工具。仅在需要重新生成源文件时安装锁定的开发依赖：

```powershell
npm ci --ignore-scripts
npm run extract
```

**重新提取会覆盖** `src/ParticleFace.js`、`src/vendor/renderer-runtime.js`、两份 GLSL、生成 Shader 模块、配色与 `reference/extraction.json`。先提交自己的修改；不要在已手动改造这些文件后直接重跑。

日常修改 GLSL 只需：

```powershell
npm run shaders
```

原始 JPEG/音频/字体已经本地化，不需要运行时访问原站、外部 CDN 或 CMS。`reference/asset-provenance.json` 可用来核对原始文件。
