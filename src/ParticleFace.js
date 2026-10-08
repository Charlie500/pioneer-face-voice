/** Particle face implementation recovered from the released frontend (class Tz). Readable formatting does not restore the original .vue/TS source. */
import {
  T1,
  xa,
  tt,
  xt,
  vi,
  xi,
  Ji,
  er,
  xe,
  Pe,
  Ie,
  je,
  Mu,
  ke,
} from "./vendor/renderer-runtime.js";
import { faceVertexShader, faceFragmentShader } from "./shaders/face-shader.js";
export class ParticleFace {
  constructor(
    e,
    {
      parent: n = null,
      scale: r = 1,
      blendFunc: i = { src: e.gl.ONE, dst: e.gl.ONE_MINUS_SRC_ALPHA },
      transparent: s = !0,
      depthTest: o = !1,
      depthWrite: a = !1,
      renderOrder: l = 1,
      alpha: c = 1,
      hasShadow: u = !1,
      name: h = "ParticlesFace",
    } = {},
  ) {
    ((this.gl = e.gl),
      (this.scene = e),
      (this.parent = n || e.root),
      (this.scale = r),
      (this.transparent = s),
      (this.blendFunc = i),
      (this.depthTest = o),
      (this.depthWrite = a),
      (this.renderOrder = l),
      (this.hasShadow = u),
      (this.name = h),
      (this.noise = new T1()),
      (this.timeScale = 0.25),
      (this.time = 0),
      (this.timeWaves = 0),
      (this.speechFactor = 0),
      (this.depthInfluence = 1),
      (this.opacity = 1),
      (this.animZ = 0),
      (this.animNoiseMultiplier = 1),
      (this.mousePanOffsets = [0.3, 0.25]),
      (this.textureOffsets = xa()),
      (this.pan = { current: tt(), target: tt(), ease: 0.02 }),
      (this.defines = {}),
      (this.shader = {
        vert: "#define HAS_VIDEO_TEXTURE 0\n" + faceVertexShader,
        frag: "#define HAS_VIDEO_TEXTURE 0\n" + faceFragmentShader,
      }),
      (this.texture = new xt(this.gl)),
      (this.textureDepth = new xt(this.gl)),
      (this.videoTexture = new xt(this.gl, {
        generateMipmaps: !1,
        width: 1024,
        height: 1024,
      })),
      (this.video = null),
      (this.alpha = c),
      (this.config = {
        Color1: { value: this.scene.colors.faceColor0, params: {} },
        Color2: { value: this.scene.colors.faceColor1, params: {} },
        ColorSpeech: { value: this.scene.colors.faceColorSpeech, params: {} },
        Opacity: { value: 0.45, params: { min: 0, max: 1, step: 0.01 } },
        NoiseIntensity: {
          value: 3.25,
          params: { min: 0, max: 10, step: 0.01 },
        },
        NoiseFrequency: {
          value: 6.75,
          params: { min: 0, max: 10, step: 0.01 },
        },
        ParticlesSize: { value: 20, params: { min: 0, max: 30, step: 1 } },
        DepthIntensity: { value: 2.5, params: { min: -6, max: 6, step: 0.01 } },
        SpeechFactor: { value: 0, params: { min: 0, max: 1, step: 0.01 } },
        SpeechDepthIntensity: {
          value: 0.12,
          params: { min: 0, max: 2, step: 0.01 },
        },
        WavesOrigin: {
          value: { x: 0.5, y: 0.43 },
          params: {
            x: { min: 0, max: 1, step: 0.01 },
            y: { min: 0, max: 1, step: 0.01 },
          },
        },
        WavesFrequency: {
          value: 10,
          params: { min: 0.1, max: 30, step: 0.01 },
        },
        WavesSpeed: { value: 5, params: { min: 0.1, max: 30, step: 0.01 } },
        WaveShineIntensity: {
          value: 1,
          params: { min: 0, max: 1, step: 0.01 },
        },
        Bokeh: { value: 0, params: { min: 0, max: 100, step: 1 } },
        Focus: { value: 7, params: { min: 0, max: 25, step: 0.01 } },
        FocusRange: { value: 20, params: { min: 0, max: 20, step: 0.1 } },
      }),
      this.init(),
      this.addEvents());
  }
  init() {
    this.defines.HAS_VIDEO_TEXTURE = xe.queryDebug("face-video") ? 1 : 0;
    let e = 6.25,
      n = 160;
    if (((this.particlesSizeMultiplier = 1), vi))
      switch (((this.particlesSizeMultiplier = 1.25), window.tier.tier)) {
        case 1:
          n = 150;
          break;
        case 2:
          n = 150;
          break;
        case 3:
          ((n = 160),
            window.innerWidth > 2e3 &&
              ((n = 200), (this.particlesSizeMultiplier = 1.75)));
          break;
      }
    else ((e = 5), (n = 140));
    const r = 0.5;
    ((this.particlesSizeMultiplier *= 1 - (2 - this.scene.dpr) * r),
      (this.geometry = new xi(this.gl, {
        width: e,
        height: e,
        widthSegments: n,
        heightSegments: n,
      })),
      (this.uniforms = {
        uTime: { value: this.scene.time },
        uTimeWaves: { value: this.scene.time },
        uColor: { value: this.color },
        uRez: { value: [this.scene.width, this.scene.height] },
        uTexture: { value: this.texture },
        uTextureDepth: { value: this.texture },
        uTextureOffsets: { value: this.textureOffsets },
        uColor1: { value: [0, 0, 0] },
        uColor2: { value: [0, 0, 0] },
        uColorSpeech: { value: [0, 0, 0] },
        uAlpha: { value: this.config.Opacity.value * this.opacity },
        uNoiseIntensity: { value: this.config.NoiseIntensity },
        uNoiseFrequency: this.config.NoiseFrequency,
        uParticlesSize: {
          value: this.config.ParticlesSize.value * this.particlesSizeMultiplier,
        },
        uParticlesDensity: { value: n },
        uDepthIntensity: { value: this.config.DepthIntensity },
        uBokeh: this.config.Bokeh,
        uFocus: this.config.Focus,
        uFocusRange: this.config.FocusRange,
        uSpeechFactor: { value: this.speechFactor },
        uSpeechDepthIntensity: this.config.SpeechDepthIntensity,
        uWavesOrigin: {
          value: [
            this.config.WavesOrigin.value.x,
            this.config.WavesOrigin.value.y,
          ],
        },
        uWavesFrequency: this.config.WavesFrequency,
        uWavesSpeed: this.config.WavesSpeed,
        uWaveShineIntensity: this.config.WaveShineIntensity,
      }),
      (this.program = new Ji(this.gl, {
        vertex: this.shader.vert,
        fragment: this.shader.frag,
        debugShader: xe.active,
        depthTest: this.depthTest,
        depthWrite: this.depthWrite,
        transparent: this.transparent,
        uniforms: this.uniforms,
      })),
      this.program.setBlendFunc(this.blendFunc.src, this.blendFunc.dst),
      (this.mesh = new er(this.gl, {
        geometry: this.geometry,
        program: this.program,
        renderOrder: this.renderOrder,
        forceRenderOrder: !0,
        mode: this.gl.POINTS,
      })),
      this.mesh.scale.set(this.scale, this.scale, this.scale),
      (this.mesh.name = this.name),
      this.mesh.setParent(this.parent));
  }
  initGui() {
    xe.addBlade(this.config, `${this.scene.name} - ${this.name}`, 1);
  }
  addEvents() {
    ((this.bindedHandleShow = this.handleShow.bind(this)),
      (this.bindedHandleHide = this.handleHide.bind(this)),
      (this.bindedHandleSpeechEnable = this.handleSpeechEnable.bind(this)),
      (this.bindedHandleSpeechDisable = this.handleSpeechDisable.bind(this)),
      (this.bindedHandleFadeEnable = this.handleFadeEnable.bind(this)),
      (this.bindedHandleFadeDisable = this.handleFadeDisable.bind(this)),
      Pe.on("webgl_experience_face_show", this.bindedHandleShow),
      Pe.on("webgl_experience_face_hide", this.bindedHandleHide),
      Pe.on(
        "webgl_experience_face_speech_enable",
        this.bindedHandleSpeechEnable,
      ),
      Pe.on(
        "webgl_experience_face_speech_disable",
        this.bindedHandleSpeechDisable,
      ),
      Pe.on("webgl_experience_face_fade_enable", this.bindedHandleFadeEnable),
      Pe.on(
        "webgl_experience_face_fade_disable",
        this.bindedHandleFadeDisable,
      ));
  }
  removeEvents() {
    (Pe.off("webgl_experience_face_show", this.bindedHandleShow),
      Pe.off("webgl_experience_face_hide", this.bindedHandleHide),
      Pe.off(
        "webgl_experience_face_speech_enable",
        this.bindedHandleSpeechEnable,
      ),
      Pe.off(
        "webgl_experience_face_speech_disable",
        this.bindedHandleSpeechDisable,
      ),
      Pe.off("webgl_experience_face_fade_enable", this.bindedHandleFadeEnable),
      Pe.off(
        "webgl_experience_face_fade_disable",
        this.bindedHandleFadeDisable,
      ));
  }
  onLoaded() {
    (this.texture &&
      ((this.texture = this.scene.textureLoader.getTexture("chat_face")),
      (this.texture.needsUpdate = !0),
      (this.program.uniforms.uTexture.value = this.texture)),
      this.textureDepth &&
        ((this.textureDepth =
          this.scene.textureLoader.getTexture("chat_face_depth")),
        (this.texture.needsUpdate = !0),
        (this.program.uniforms.uTextureDepth.value = this.textureDepth)),
      this.defines.HAS_VIDEO_TEXTURE &&
        ((this.video = document.createElement("video")),
        (this.video.src = "/glxp/videos/face-idle-depth.mp4"),
        (this.video.loop = !0),
        (this.video.muted = !0),
        this.video.load(),
        this.video.play(),
        this.videoTexture.image || (this.videoTexture.image = this.video),
        (this.videoTexture.needsUpdate = !0)),
      this.initGui());
  }
  handleShow(e = !0) {
    if ((this.tlVisibility && this.tlVisibility.kill(), !e)) {
      ((this.opacity = 1),
        (this.depthInfluence = 1),
        (this.animZ = 0),
        (this.animNoiseMultiplier = 1),
        this.scene.spirits.default &&
          (this.scene.spirits.default.faceOpacity = 0.2));
      return;
    }
    ((this.tlVisibility = Ie.timeline()),
      this.tlVisibility.to(
        this,
        { opacity: 1, duration: 0.75, ease: "power3.in" },
        0,
      ),
      this.tlVisibility.to(
        this,
        { depthInfluence: 1, duration: 1.25, ease: "power3.out" },
        0.25,
      ),
      this.tlVisibility.fromTo(
        this,
        { animZ: -0.5 },
        { animZ: 0, duration: 1, ease: "power3.out" },
        0.25,
      ),
      this.tlVisibility.to(
        this,
        { animNoiseMultiplier: 0.75, duration: 1.5, ease: "power3.out" },
        0.25,
      ),
      this.scene.spirits.default &&
        this.tlVisibility.to(
          this.scene.spirits.default,
          { faceOpacity: 0.9, duration: 1, ease: "power2.inOut" },
          0,
        ));
  }
  handleHide(e = !0) {
    if ((this.tlVisibility && this.tlVisibility.kill(), !e)) {
      ((this.opacity = 0),
        (this.depthInfluence = 0),
        (this.animZ = -0.5),
        (this.animNoiseMultiplier = 10),
        this.scene.spirits.default &&
          (this.scene.spirits.default.faceOpacity = 1));
      return;
    }
    ((this.tlVisibility = Ie.timeline()),
      this.tlVisibility.to(
        this,
        { opacity: 0, duration: 1.2, ease: "power2.inOut" },
        0,
      ),
      this.tlVisibility.to(
        this,
        { depthInfluence: 0, duration: 1.2, ease: "power2.inOut" },
        0,
      ),
      this.tlVisibility.to(
        this,
        { animZ: 1, duration: 2, ease: "power2.in" },
        0,
      ),
      this.tlVisibility.to(
        this,
        { animNoiseMultiplier: 5, duration: 1, ease: "power2.in" },
        0.2,
      ),
      this.scene.spirits.default &&
        this.tlVisibility.to(
          this.scene.spirits.default,
          { faceOpacity: 1, duration: 1, ease: "power2.inOut" },
          0,
        ));
  }
  handleSpeechEnable() {
    (this.tlSpeech && this.tlSpeech.kill(),
      (this.tlSpeech = Ie.timeline()),
      this.tlSpeech.to(
        this.config.SpeechFactor,
        { value: 1, duration: 0.25, ease: "power2.out" },
        0,
      ));
  }
  handleSpeechDisable() {
    (this.tlSpeech && this.tlSpeech.kill(),
      (this.tlSpeech = Ie.timeline()),
      this.tlSpeech.to(
        this.config.SpeechFactor,
        { value: 0, duration: 1, ease: "power2.in" },
        0,
      ));
  }
  handleFadeEnable() {
    (this.tlVisibility && this.tlVisibility.kill(),
      (this.tlVisibility = Ie.timeline()),
      this.tlVisibility.to(
        this,
        { opacity: 0.35, duration: 0.75, ease: "power2.inOut" },
        0,
      ));
  }
  handleFadeDisable() {
    (this.tlVisibility && this.tlVisibility.kill(),
      (this.tlVisibility = Ie.timeline()),
      this.tlVisibility.to(
        this,
        { opacity: 1, duration: 0.75, ease: "power2.inOut" },
        0,
      ));
  }
  dispose() {
    (this.mesh.setParent(null),
      this.geometry.remove(),
      this.program.remove(),
      this.removeEvents(),
      this.tlVisibility && this.tlVisibility.kill(),
      this.tlSpeech && this.tlSpeech.kill());
  }
  preRender() {
    ((this.time += (this.scene.dt / 1e3) * this.timeScale),
      this.defines.HAS_VIDEO_TEXTURE &&
        this.video &&
        this.video.currentTime > 0 &&
        this.video.readyState >= this.video.HAVE_ENOUGH_DATA &&
        (this.videoTexture.image || (this.videoTexture.image = this.video),
        (this.videoTexture.needsUpdate = !0),
        (this.program.uniforms.uTexture.value = this.videoTexture),
        (this.program.uniforms.uTextureDepth.value = this.videoTexture)),
      (this.mesh.position.z = this.animZ),
      vi &&
        ((this.pan.target[0] = je.cursor[0] * this.mousePanOffsets[0]),
        (this.pan.target[1] = je.cursor[1] * this.mousePanOffsets[1]),
        Mu(this.pan.current, this.pan.current, this.pan.target, this.pan.ease),
        (this.textureOffsets[0] = this.pan.current[0] * -0.2),
        (this.textureOffsets[1] = this.pan.current[1] * 0.2),
        this.mesh.rotation.set(this.pan.current[1], this.pan.current[0], 0)),
      (this.speechFactor =
        this.config.SpeechFactor.value *
        (0.3 + this.noise.getVal(this.time * 50) * 0.7)),
      (this.timeWaves +=
        (this.scene.dt / 1e3) * (this.timeScale + this.speechFactor * 1.5)),
      (this.program.uniforms.uTime.value = this.time),
      (this.program.uniforms.uTimeWaves.value = this.timeWaves),
      (this.program.uniforms.uAlpha.value =
        this.config.Opacity.value * this.opacity),
      (this.program.uniforms.uRez.value = [
        this.scene.width,
        this.scene.height,
      ]),
      (this.program.uniforms.uSpeechFactor.value = this.speechFactor),
      (this.program.uniforms.uDepthIntensity.value =
        this.config.DepthIntensity.value * this.depthInfluence),
      (this.program.uniforms.uNoiseIntensity.value =
        this.config.NoiseIntensity.value * this.animNoiseMultiplier),
      (this.program.uniforms.uParticlesSize.value =
        this.config.ParticlesSize.value * this.particlesSizeMultiplier),
      (this.program.uniforms.uColor1.value = new ke(this.config.Color1.value)),
      (this.program.uniforms.uColor2.value = new ke(this.config.Color2.value)),
      (this.program.uniforms.uColorSpeech.value = new ke(
        this.config.ColorSpeech.value,
      )),
      (this.program.uniforms.uWavesOrigin.value = [
        this.config.WavesOrigin.value.x,
        this.config.WavesOrigin.value.y,
      ]));
  }
}
