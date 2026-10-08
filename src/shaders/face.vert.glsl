precision highp float; 

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;

    #define M_PI 3.1415926535897932384626433832795

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;

    uniform float uTime;
    uniform float uTimeWaves;
    uniform sampler2D uTextureDepth;
    uniform vec2 uTextureOffsets;
    uniform float uNoiseFrequency;
    uniform float uNoiseIntensity;
    uniform float uParticlesSize;
    uniform float uParticlesDensity;
    uniform float uDepthIntensity;
    uniform float uBokeh;
    uniform float uFocus;
    uniform float uFocusRange;
    uniform float uSpeechFactor;
    uniform float uSpeechDepthIntensity;
    uniform vec2 uWavesOrigin;
    uniform float uWavesFrequency;
    uniform float uWavesSpeed;

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    varying float vDepth;
    varying float vNoise;
    varying float vWave;

    vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r){
        return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    
    float pnoise(vec3 P, vec3 rep) {
        vec3 Pi0 = mod(floor(P), rep); 
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); 
        vec3 Pf1 = Pf0 - vec3(1.0); 
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
    }

    void main(){
        vUv = uv;

        
        
        
        
        
        

        
        
        float gridOffsetFactor = cos(uv.y * uParticlesDensity);
        vec3 gridDisplacement = vec3(gridOffsetFactor * (1.0 / uParticlesDensity) * 4.0, 0. ,0.);

        
        float distanceCenter = distance(vUv, uWavesOrigin);
        float distanceCenterX = distance(vUv.x, 0.5);

        float distanceCenterFactor = 1.0 - distanceCenter * 2.0;
        float distanceCenterXFactor = 1.0 - distanceCenterX * 2.0;
        float distanceMixedFactor = mix(distanceCenterFactor, distanceCenterXFactor, 0.25);

        float waveFactor = abs(tan(sin(distanceMixedFactor * uWavesFrequency + uTimeWaves * uWavesSpeed)));
        vWave = mix(1., waveFactor, uSpeechFactor);
        
        waveFactor = 0.5 + waveFactor * 0.5;
        waveFactor *= 0.5 + uSpeechFactor * 0.5;

        
        float noiseFactor = pnoise(uNoiseFrequency * position - vec3(uTime, uTime * 0.1, uTime * 0.1), vec3(202.0));
        
        vec3 displacement = vec3(0.0, 0.0, (noiseFactor * 0.5 + 0.25) * uNoiseIntensity);
        
        displacement *= -1.0;
        displacement *= waveFactor;

        
        float distanceFromCenter = distance(vUv, vec2(0.5)) * 2.0;
        displacement *= 0.1 + smoothstep(0.45, 0.8, distanceFromCenter) * 0.9;
        
        
        vec4 colorDepth = texture2D(uTextureDepth, vUv + uTextureOffsets);
        float depthFactor = colorDepth.r;
        displacement.z += depthFactor * uDepthIntensity;
        displacement.z += uSpeechFactor * (0.5 + depthFactor * 0.5) * uSpeechDepthIntensity;

        
        vec3 displacedPos = position + gridDisplacement + displacement;
        vec4 displacedPos4 = vec4(displacedPos, 1.0);

        vNoise = pnoise(uNoiseFrequency * (position * 10.) - vec3(uTime * 4., uTime * .1, 0.), vec3(303.0)) * uNoiseIntensity;
        vNoise = (vNoise + 1.) * .5;

        vPos = modelMatrix * displacedPos4;

        vWorldPosition = (modelViewMatrix * displacedPos4).xyz;

        gl_Position = projectionMatrix * modelViewMatrix * displacedPos4;

        float fogDistance =  -(modelViewMatrix * displacedPos4).z;
        float fogAmount = 1. - (smoothstep(uFocus - uFocusRange, uFocus, fogDistance) - smoothstep(uFocus, uFocus + uFocusRange, fogDistance));
        fogAmount = pow(fogAmount, 1.);
        vDepth = fogAmount;

        gl_PointSize = uParticlesSize + (uBokeh * fogAmount);

    }
