precision highp float; 

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    varying float vDepth;
    varying float vNoise;
    varying float vWave;

    uniform float uTime;
    uniform float uAlpha;
    uniform sampler2D uTexture;
    uniform sampler2D uTextureDepth;
    uniform vec2 uTextureOffsets;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColorSpeech;
    uniform float uSpeechFactor;
    uniform float uParticlesDensity;
    uniform float uWaveShineIntensity;

    const float border_size = 0.01;
    const float disc_radius = 0.05;
    const float border_size1 = 0.05;
    const float disc_radius1 = 0.15;

    float random (in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() { 
        
        vec2 uv = gl_PointCoord.xy;
        uv -= vec2(0.5);

        float dist = sqrt(dot(uv, uv));

        
        float noiseSizeReduction = 0.25 + 0.25 * (1.0 - vWave);
        float dr = disc_radius * ((1.0 - noiseSizeReduction) + vNoise * noiseSizeReduction);
        float dr1 = disc_radius1 * ((1.0 - noiseSizeReduction) + vNoise * noiseSizeReduction);
        float t = smoothstep(dr+border_size, dr-border_size, dist);
        float t1 = smoothstep(dr1+border_size1, dr1-border_size1, dist);
        float dotMask = t + t1 * 0.1;
       
        
        vec4 colorDepth = texture2D(uTextureDepth, vUv );
        vec4 colorTex = texture2D(uTexture, vUv + uTextureOffsets * colorDepth.r);

        #ifdef HAS_VIDEO_TEXTURE
        
        float texDepthFactor = (length(colorTex.rgb) * length(colorTex.rgb)) * (0.35 + length(colorDepth.rgb) * length(colorDepth.rgb) * 0.65);
        #else
        
        float texDepthFactor = (0.15 + length(colorTex.rgb) * 0.85) * (0.75 + length(colorDepth.rgb) * 0.25);
        #endif

        vec4 color = vec4(mix(uColor1, uColor2, texDepthFactor), 1.0);

        
        float speechSparkles = vNoise;
        color = mix(color, vec4(uColorSpeech, 1.0), uSpeechFactor * texDepthFactor * vWave * speechSparkles);

        
        color.a = dotMask;
        color.a *= length(colorTex.rgb);

        float distanceFromCenter = distance(vUv, vec2(0.5)) * 2.0;
        color.a *= 1.0 - smoothstep(0.4, 0.8, distanceFromCenter);

        
        
        

        
        color.a *= 0.8 + vWave * 0.2;
        color.a *= uAlpha;

        
        float waveShine = 1.0 + vWave * uWaveShineIntensity;
        color.rgb *= color.a * waveShine;

        
        
        
        
        gl_FragColor = color;
    }
