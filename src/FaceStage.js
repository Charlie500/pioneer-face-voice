import { ParticleFace } from './ParticleFace.js';
import { Renderer, Transform, Camera, xt as Texture, je as cursor } from './vendor/renderer-runtime.js';

/** A small standalone host for the original particle face; no Nuxt app is needed. */
export class FaceStage {
  constructor(container, palette) {
    this.container = container;
    this.palette = palette;
    this.renderer = new Renderer({ webgl: 2, alpha: true, antialias: false, powerPreference: 'high-performance' });
    if (!this.renderer.isWebgl2) throw new Error('当前浏览器没有提供 WebGL 2，请使用 Windows 上的 Chrome 或 Edge。');
    this.gl = this.renderer.gl;
    this.container.append(this.gl.canvas);
    this.root = new Transform();
    this.camera = new Camera(this.gl, { fov: 40, near: 0.01, far: 100 });
    this.camera.position.set(0, 0, 8.5);
    this.camera.lookAt([0, 0, 0]);
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.scene = { gl: this.gl, root: this.root, camera: this.camera, dpr: this.dpr, width: 1, height: 1, time: 0, dt: 16, colors: palette, spirits: {} };
    this.onPointerMove = event => {
      const rect = this.container.getBoundingClientRect();
      cursor.cursor[0] = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      cursor.cursor[1] = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    this.container.addEventListener('pointermove', this.onPointerMove);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
    this.resize();
  }

  async init() {
    // These exact JPEG variants are published by the source texture loader.
    const [color, depth] = await Promise.all([
      this.loadTexture('/assets/face/color.jpg'),
      this.loadTexture('/assets/face/depth.jpg'),
    ]);
    this.scene.textureLoader = { getTexture: key => key === 'chat_face' ? color : depth };
    window.tier = { tier: 2, type: 'FALLBACK' };
    this.face = new ParticleFace(this.scene);
    if (!this.gl.getProgramParameter(this.face.program.program, this.gl.LINK_STATUS)) throw new Error(`人脸 Shader 编译失败：${this.gl.getProgramInfoLog(this.face.program.program)}`);
    this.face.onLoaded();
    this.face.handleShow(false);
    this.resize();
    this.lastFrame = performance.now();
    this.frame = requestAnimationFrame(time => this.render(time));
    return this;
  }

  loadTexture(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const texture = new Texture(this.gl, { flipY: true, generateMipmaps: true });
        texture.image = image;
        resolve(texture);
      };
      image.onerror = () => reject(new Error(`人脸贴图加载失败：${url}`));
      image.src = url;
    });
  }

  resize() {
    const width = Math.max(1, this.container.clientWidth);
    const height = Math.max(1, this.container.clientHeight);
    this.renderer.setSize(Math.round(width * this.dpr), Math.round(height * this.dpr));
    Object.assign(this.gl.canvas.style, { width: `${width}px`, height: `${height}px` });
    Object.assign(this.scene, { width: width * this.dpr, height: height * this.dpr });
    this.camera.perspective({ aspect: width / height });
    // Fit the visible portrait to the viewport while preserving facial proportions.
    const planeSize = this.face ? Math.abs(this.face.geometry.attributes.position.data[0]) * 2 : 6.25;
    const halfFov = Math.tan(20 * Math.PI / 180);
    const distanceForHeight = planeSize * 0.30 / (halfFov * 0.98);
    const distanceForWidth = planeSize * 0.21 / (halfFov * (width / height) * 0.94);
    this.camera.position.z = 1.25 + Math.max(distanceForHeight, distanceForWidth);
  }

  render(time) {
    // A RAF timestamp can precede performance.now() from shader initialization.
    // Negative time makes the source noise lookup NaN and poisons later waves.
    this.scene.dt = Math.max(0, Math.min(time - this.lastFrame, 50));
    this.scene.time += this.scene.dt / 1000;
    this.lastFrame = time;
    this.face.preRender();
    this.gl.clearColor(0, 0, 0, 0);
    this.renderer.render({ scene: this.root, camera: this.camera });
    this.frame = requestAnimationFrame(next => this.render(next));
  }

  setSpeaking(speaking) {
    if (!this.face) return;
    speaking ? this.face.handleSpeechEnable() : this.face.handleSpeechDisable();
  }

  setTheme(palette) {
    this.palette = palette;
    if (!this.face) return;
    this.face.config.Color1.value = palette.faceColor0;
    this.face.config.Color2.value = palette.faceColor1;
    this.face.config.ColorSpeech.value = palette.faceColorSpeech;
  }

  dispose() {
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.container.removeEventListener('pointermove', this.onPointerMove);
    this.face?.dispose();
    this.gl.canvas.remove();
  }
}
