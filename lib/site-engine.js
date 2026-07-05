"use strict";
/* ============================================================
   Tiberius — site engine
   Ported from the single-file build. Boots the WebGL stage,
   smooth scroll, and all scroll/interaction choreography.
   Call initSite() after mount; it returns a destroy() function.
   ============================================================ */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

let booted = false;

export function initSite(){
if (booted || typeof window === "undefined") return () => {};
booted = true;
const clamp = (v, a, b)=>Math.max(a, Math.min(b, v));
/* frame-rate independent exponential smoothing — `rate` is the amount of
   catch-up per frame at a reference 60fps; dt is the real elapsed seconds
   since last frame, so motion stays equally smooth at 60/90/120/144Hz
   instead of speeding up or lagging based on the display's refresh rate. */
const damp = (current, target, rate, dt)=> current + (target - current) * (1 - Math.pow(1 - rate, dt * 60));

/* ============================================================
   Environment
   ============================================================ */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none)").matches;
const SMOOTH  = !reduced && !isTouch;
const isMobile = window.innerWidth < 768;

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power3.out" });

const content = document.getElementById("smooth-content");

/* ============================================================
   Lenis-style smooth scroll (lerped transform) + ScrollTrigger proxy
   ============================================================ */
const smooth = { current: 0, target: 0, ease: 0.082, velocity: 0 };

function setBodyHeight(){
  if (!SMOOTH) return;
  document.body.style.height = content.scrollHeight + "px";
}

if (SMOOTH){
  setBodyHeight();
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value){
      if (arguments.length){ smooth.target = value; smooth.current = value; window.scrollTo(0, value); }
      return smooth.current;
    },
    getBoundingClientRect(){
      return { top:0, left:0, width:window.innerWidth, height:window.innerHeight };
    },
    pinType: "transform"
  });
  ScrollTrigger.defaults({ scroller: document.body });
  ScrollTrigger.addEventListener("refreshInit", setBodyHeight);
}

/* ============================================================
   Cursor
   ============================================================ */
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursor-dot");
const mouse = { x: innerWidth/2, y: innerHeight/2 };       // raw
const cur   = { x: mouse.x, y: mouse.y };                  // lerped ring
const mNorm = { x: 0, y: 0, lx: 0, ly: 0 };                // normalized for 3D

window.addEventListener("mousemove", (e)=>{
  mouse.x = e.clientX; mouse.y = e.clientY;
  mNorm.x = (e.clientX / innerWidth)  * 2 - 1;
  mNorm.y = (e.clientY / innerHeight) * 2 - 1;
  if (cursorDot) cursorDot.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
});

function bindCursorStates(){
  document.querySelectorAll("a, button, .faq-q").forEach(el=>{
    el.addEventListener("mouseenter", ()=>cursor.classList.add("is-hover"));
    el.addEventListener("mouseleave", ()=>cursor.classList.remove("is-hover"));
  });
  document.querySelectorAll("[data-view]").forEach(el=>{
    el.addEventListener("mouseenter", ()=>cursor.classList.add("is-view"));
    el.addEventListener("mouseleave", ()=>cursor.classList.remove("is-view"));
  });
}
if (!isTouch) bindCursorStates();

/* ============================================================
   THREE — cinematic stage
   ============================================================ */
let updateGL = null;   // assigned only if the 3D stage boots successfully
let _renderer = null;
if (typeof THREE !== "undefined") try{

const canvas   = document.getElementById("gl");
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:false, powerPreference:"high-performance" });
renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x04070f, 1);

_renderer = renderer;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x04070f, 0.052);

const camera = new THREE.PerspectiveCamera(42, innerWidth/innerHeight, 0.1, 200);
camera.position.set(0, 0.72, 7.2);

/* --- procedural chrome + brass matcaps --- */
function makeMatcap(stops){
  const s = 256, c = document.createElement("canvas"); c.width = c.height = s;
  const x = c.getContext("2d");
  const g = x.createRadialGradient(s*0.34, s*0.3, s*0.05, s*0.5, s*0.5, s*0.72);
  stops.forEach(([o,col])=>g.addColorStop(o,col));
  x.fillStyle = g; x.fillRect(0,0,s,s);
  // hard specular streak for a machined-metal read
  const g2 = x.createLinearGradient(0,0,s,s);
  g2.addColorStop(0.42,"rgba(255,255,255,0)");
  g2.addColorStop(0.5,"rgba(255,255,255,0.22)");
  g2.addColorStop(0.58,"rgba(255,255,255,0)");
  x.fillStyle = g2; x.fillRect(0,0,s,s);
  const t = new THREE.CanvasTexture(c); return t;
}
const matChrome = makeMatcap([[0,"#ffffff"],[0.25,"#cfd3dc"],[0.5,"#6d727f"],[0.78,"#22242b"],[1,"#08090c"]]);
const matBrass  = makeMatcap([[0,"#fff2d2"],[0.28,"#e3bf6e"],[0.55,"#8a6d2e"],[0.8,"#2a2110"],[1,"#0b0803"]]);

/* --- shared GLSL --- */
const NOISE = `
vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0,0.5,1.0,2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0,i1.z,i2.z,1.0)) + i.y + vec4(0.0,i1.y,i2.y,1.0)) + i.x + vec4(0.0,i1.x,i2.x,1.0));
  float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0*floor(p*ns.z*ns.z);
  vec4 x_ = floor(j*ns.z); vec4 y_ = floor(j - 7.0*x_);
  vec4 x = x_*ns.x + ns.yyyy; vec4 y = y_*ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
  m = m*m;
  return 42.0*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

/* --- metallic glass sculpture material (matcap + fresnel + breathing noise) --- */
function sculptMaterial(matcap, opts){
  return new THREE.ShaderMaterial({
    uniforms:{
      uMatcap:{ value: matcap },
      uTime:{ value: 0 },
      uAmp:{ value: opts.amp },
      uFreq:{ value: opts.freq },
      uFresnelColor:{ value: new THREE.Color(opts.rim) },
      uFresnelPow:{ value: opts.rimPow || 2.6 },
      uOpacity:{ value: opts.opacity !== undefined ? opts.opacity : 1.0 }
    },
    transparent: opts.opacity !== undefined,
    vertexShader: NOISE + `
      uniform float uTime, uAmp, uFreq;
      varying vec3 vN; varying vec3 vE; varying float vDist;
      void main(){
        vec3 p = position;
        float n = snoise(normal*uFreq + uTime*0.25);
        p += normal * n * uAmp;
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        vN = normalize(normalMatrix * normal);
        vE = normalize(mv.xyz);
        vDist = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader:`
      uniform sampler2D uMatcap;
      uniform vec3 uFresnelColor; uniform float uFresnelPow, uOpacity;
      varying vec3 vN; varying vec3 vE; varying float vDist;
      void main(){
        vec3 n = normalize(vN);
        vec2 muv = n.xy * 0.495 + 0.5;
        vec3 base = texture2D(uMatcap, muv).rgb;
        float fr = pow(1.0 - abs(dot(n, -normalize(vE))), uFresnelPow);
        vec3 col = base + uFresnelColor * fr * 1.35;
        float fogAmt = 1.0 - exp(- (vDist*0.052) * (vDist*0.052) );
        col = mix(col, vec3(0.0196), fogAmt);
        gl_FragColor = vec4(col, uOpacity);
      }`
  });
}

const sculptures = [];
function addSculpture(geo, mat, pos, spin){
  const m = new THREE.Mesh(geo, mat);
  m.position.copy(pos);
  m.userData.spin = spin;
  scene.add(m); sculptures.push(m);
  return m;
}

/* Scene 2 — services: faceted icosahedron */
addSculpture(
  new THREE.IcosahedronGeometry(1.9, 1),
  sculptMaterial(matChrome, { amp:0.16, freq:0.9, rim:"#8d93a1", rimPow:2.2 }),
  new THREE.Vector3(-2.6, -0.4, -14),
  new THREE.Vector3(0.07, -0.05, 0.03)
);
/* Scene 3 — work: gyroscopic rings */
const ringGroup = new THREE.Group();
[[2.3,0.045,0],[1.75,0.04,Math.PI/2.4],[1.2,0.035,Math.PI/1.3]].forEach(([r,t,rx],i)=>{
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(r, t, 16, 140),
    sculptMaterial(i===1?matBrass:matChrome, { amp:0.0, freq:1.0, rim: i===1?"#d8c096":"#9aa0ae", rimPow:2.4 })
  );
  ring.rotation.x = rx; ring.rotation.y = i*0.7;
  ring.userData.spin = new THREE.Vector3(0.12+i*0.05, 0.1-i*0.03, 0);
  ringGroup.add(ring);
});
ringGroup.position.set(2.7, 0.1, -28);
scene.add(ringGroup);
/* small chrome core in the rings */
addSculpture(
  new THREE.OctahedronGeometry(0.55, 0),
  sculptMaterial(matChrome, { amp:0.0, freq:1.0, rim:"#ffffff", rimPow:2.0 }),
  ringGroup.position.clone(),
  new THREE.Vector3(0.2, 0.25, 0.1)
);
/* Scene 4 — liquid metal sphere */
addSculpture(
  new THREE.SphereGeometry(2.2, isMobile ? 72 : 128, isMobile ? 72 : 128),
  sculptMaterial(matBrass, { amp:0.34, freq:1.15, rim:"#b7a276", rimPow:2.8 }),
  new THREE.Vector3(-0.4, 0, -44),
  new THREE.Vector3(0.03, 0.06, 0.01)
);
/* Scene 5 — the gate: a distant glowing gold slab */
const slab = addSculpture(
  new THREE.BoxGeometry(1.6, 4.2, 0.35),
  sculptMaterial(matChrome, { amp:0.0, freq:1.0, rim:"#b7a276", rimPow:3.4 }),
  new THREE.Vector3(0, 0.2, -58),
  new THREE.Vector3(0, 0.05, 0)
);

/* --- glow sprites (fake bloom, additive) --- */
function glowTexture(color){
  const s=128, c=document.createElement("canvas"); c.width=c.height=s;
  const x=c.getContext("2d");
  const g=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);
  g.addColorStop(0, color); g.addColorStop(0.35,"rgba(120,120,140,0.28)"); g.addColorStop(1,"rgba(0,0,0,0)");
  x.fillStyle=g; x.fillRect(0,0,s,s);
  return new THREE.CanvasTexture(c);
}
const glowWhite = glowTexture("rgba(235,238,246,0.85)");
const glowBrass = glowTexture("rgba(216,192,150,0.9)");
function addGlow(pos, scale, tex, opacity){
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map:tex, blending:THREE.AdditiveBlending, depthWrite:false, transparent:true, opacity }));
  sp.position.copy(pos); sp.scale.setScalar(scale); scene.add(sp);
  return sp;
}
addGlow(new THREE.Vector3(-2.6,-0.4,-15.5), 8, glowWhite, 0.4);
addGlow(new THREE.Vector3(2.7, 0.1, -29.5), 8, glowBrass, 0.45);
addGlow(new THREE.Vector3(-0.4, 0, -46), 10, glowBrass, 0.5);
const gateGlow = addGlow(new THREE.Vector3(0, 0.2, -58.6), 12, glowBrass, 0.7);

/* --- particle field with velocity-reactive shader --- */
const P_COUNT = isMobile ? 900 : 2400;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(P_COUNT*3);
const pSeed = new Float32Array(P_COUNT);
for (let i=0;i<P_COUNT;i++){
  pPos[i*3]   = (Math.random()-0.5) * 30;
  pPos[i*3+1] = (Math.random()-0.5) * 18;
  pPos[i*3+2] = 8 - Math.random() * 78;
  pSeed[i] = Math.random();
}
pGeo.setAttribute("position", new THREE.BufferAttribute(pPos,3));
pGeo.setAttribute("aSeed", new THREE.BufferAttribute(pSeed,1));
const pMat = new THREE.ShaderMaterial({
  transparent:true, depthWrite:false, blending:THREE.AdditiveBlending,
  uniforms:{ uTime:{value:0}, uVel:{value:0}, uSize:{value: isMobile ? 34 : 44} },
  vertexShader:`
    attribute float aSeed;
    uniform float uTime, uVel, uSize;
    varying float vA; varying float vSeed;
    void main(){
      vec3 p = position;
      p.x += sin(uTime*0.22 + aSeed*40.0) * 0.7;
      p.y += cos(uTime*0.18 + aSeed*55.0) * 0.6 + sin(uTime*0.3+aSeed*12.0)*0.2;
      vec4 mv = modelViewMatrix * vec4(p,1.0);
      float dist = -mv.z;
      gl_PointSize = uSize * (0.25 + aSeed*0.9) * (1.0 + uVel*0.6) / dist;
      vA = smoothstep(34.0, 6.0, dist) * (0.25 + aSeed*0.6);
      vSeed = aSeed;
      gl_Position = projectionMatrix * mv;
    }`,
  fragmentShader:`
    varying float vA; varying float vSeed;
    uniform float uVel;
    void main(){
      float d = length(gl_PointCoord - 0.5);
      float a = smoothstep(0.5, 0.05, d) * vA * (0.55 + uVel*0.9);
      vec3 cold = vec3(0.86,0.88,0.95);
      vec3 warm = vec3(0.85,0.76,0.55);
      gl_FragColor = vec4(mix(cold, warm, step(0.82, vSeed)), a);
    }`
});
scene.add(new THREE.Points(pGeo, pMat));

/* subtle ambient dust plane shadow under hero object */
const shadowTex = glowTexture("rgba(0,0,0,0.0)");

/* --- camera rail: scroll = travelling shot through scenes --- */
const V3 = (x,y,z)=>new THREE.Vector3(x,y,z);
const rail = [
  { p:0.00, pos:V3( 0.0, 0.72,  7.2), look:V3( 1.4,-0.55,  0.0) },   // hero — object lower-right, clear of navbar
  { p:0.13, pos:V3(-1.6, 0.5,  4.2), look:V3( 2.3, 0.3,  0.0) },   // manifesto — slow push
  { p:0.30, pos:V3(-0.4,-0.3, -8.5), look:V3(-2.6,-0.4,-14.0) },   // services — approach icosahedron
  { p:0.46, pos:V3( 0.8, 0.7,-21.0), look:V3( 2.7, 0.1,-28.0) },   // work — rings enter frame
  { p:0.62, pos:V3(-0.6,-0.4,-33.5), look:V3(-0.4, 0.0,-44.0) },   // process/stack — toward liquid metal
  { p:0.80, pos:V3( 1.0, 0.4,-40.5), look:V3(-0.4, 0.0,-44.0) },   // voices/faq — orbit the sphere
  { p:1.00, pos:V3( 0.0, 0.1,-50.5), look:V3( 0.0, 0.2,-58.0) }    // contact — fly at the gate
];
const camLook = new THREE.Vector3();
const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();
function easeSeg(t){ return t*t*(3-2*t); } // smoothstep per cut

function updateCameraRail(progress, dt){
  let i = 0;
  while (i < rail.length-2 && progress > rail[i+1].p) i++;
  const a = rail[i], b = rail[i+1];
  const t = easeSeg(THREE.MathUtils.clamp((progress - a.p) / (b.p - a.p), 0, 1));
  tmpA.lerpVectors(a.pos, b.pos, t);
  tmpB.lerpVectors(a.look, b.look, t);
  // mouse parallax + drift
  mNorm.lx = damp(mNorm.lx, mNorm.x, 0.045, dt);
  mNorm.ly = damp(mNorm.ly, mNorm.y, 0.045, dt);
  camera.position.set(
    tmpA.x + mNorm.lx * 0.55,
    tmpA.y - mNorm.ly * 0.4,
    tmpA.z
  );
  camLook.lerp(tmpB, 1 - Math.pow(1 - 0.12, dt * 60));
  camera.lookAt(camLook);
  camera.rotation.z += THREE.MathUtils.clamp(smooth.velocity * 0.00002, -0.03, 0.03) * dt * 60;
}
camLook.copy(rail[0].look);

/* per-frame 3D update, called from the unified RAF loop */
const clock = new THREE.Clock();
updateGL = function(progress, dt){
  const t = clock.getElapsedTime();
  updateCameraRail(progress, dt);

  sculptures.forEach(m=>{
    m.rotation.x += m.userData.spin.x * dt * (1 + rafVel*1.6);
    m.rotation.y += m.userData.spin.y * dt * (1 + rafVel*1.6);
    m.rotation.z += m.userData.spin.z * dt;
    if (m.material.uniforms && m.material.uniforms.uTime) m.material.uniforms.uTime.value = t;
  });
  ringGroup.children.forEach(r=>{
    r.rotation.x += r.userData.spin.x * dt * (1 + rafVel);
    r.rotation.y += r.userData.spin.y * dt;
    if (r.material.uniforms) r.material.uniforms.uTime.value = t;
  });
  ringGroup.rotation.y = t * 0.08;
  pMat.uniforms.uTime.value = t;
  pMat.uniforms.uVel.value = damp(pMat.uniforms.uVel.value, rafVel, 0.1, dt);
  gateGlow.material.opacity = 0.5 + Math.sin(t*1.4)*0.18 + rafVel*0.3;

  renderer.render(scene, camera);
};

window.addEventListener("resize", ()=>{
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

} catch(err){
  /* WebGL unavailable — hide the stage, keep the site fully usable */
  const c = document.getElementById("gl"); if (c) c.style.display = "none";
}

/* ============================================================
   Unified RAF loop
   ============================================================ */
const glDim = document.getElementById("gl-dim");
/* canvas dim vs scroll progress: full 3D in hero, dimmed through the
   reading sections, mostly back for the contact gate */
const DIM_KEYS = [[0,0],[0.055,0],[0.13,0.6],[0.80,0.6],[0.90,0.18],[1,0.18]];
function dimFor(p){
  for (let i = 0; i < DIM_KEYS.length - 1; i++){
    const a = DIM_KEYS[i], b = DIM_KEYS[i+1];
    if (p <= b[0]) return a[1] + (b[1]-a[1]) * ((p - a[0]) / Math.max(1e-6, b[0]-a[0]));
  }
  return DIM_KEYS[DIM_KEYS.length-1][1];
}
let rafVel = 0, lastCurrent = 0, hidden = false;
document.addEventListener("visibilitychange", ()=>{ hidden = document.hidden; });

let rafId = 0;
let lastFrameTime = performance.now();
function raf(){
  rafId = requestAnimationFrame(raf);
  if (hidden) { lastFrameTime = performance.now(); return; }

  // real elapsed seconds since last frame, clamped so a stalled tab or
  // dropped frames can't cause a big single-frame jump when it resumes
  const now = performance.now();
  const dt = Math.min((now - lastFrameTime) / 1000, 1/30);
  lastFrameTime = now;

  // smooth scroll
  if (SMOOTH){
    smooth.target = window.scrollY || window.pageYOffset;
    smooth.current = damp(smooth.current, smooth.target, smooth.ease, dt);
    if (Math.abs(smooth.target - smooth.current) < 0.05) smooth.current = smooth.target;
    content.style.transform = `translate3d(0,${-smooth.current}px,0)`;
    ScrollTrigger.update();
  } else {
    smooth.current = window.scrollY || window.pageYOffset;
  }
  // velocity normalized to "px per 60fps frame" so downstream constants
  // tuned against the old fixed-frame loop still feel the same
  smooth.velocity = (smooth.current - lastCurrent) * (0.01667 / Math.max(dt, 0.0001));
  lastCurrent = smooth.current;
  rafVel = damp(rafVel, Math.min(Math.abs(smooth.velocity)/60, 1), 0.08, dt);

  // scroll progress → canvas dim + 3D camera rail
  const maxScroll = Math.max(1, (SMOOTH ? content.scrollHeight : document.documentElement.scrollHeight) - innerHeight);
  const progress = clamp(smooth.current / maxScroll, 0, 1);
  if (glDim) glDim.style.opacity = dimFor(progress).toFixed(3);

  // 3D stage (skipped gracefully if WebGL failed to boot)
  if (updateGL) updateGL(progress, dt);

  // cursor ring lerp
  if (!isTouch){
    cur.x = damp(cur.x, mouse.x, 0.16, dt);
    cur.y = damp(cur.y, mouse.y, 0.16, dt);
    cursor.style.transform = `translate3d(${cur.x}px,${cur.y}px,0)`;
  }

}
raf();

window.addEventListener("resize", ()=>{
  setBodyHeight();
  ScrollTrigger.refresh();
});

/* ============================================================
   Text splitting (mask reveals)
   ============================================================ */
function splitWords(el){
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map(w=>`<span class="wm"><span class="wi">${w}</span></span>`).join(" ");
  return el.querySelectorAll(".wi");
}
document.querySelectorAll("[data-split]").forEach(h=>{
  const words = splitWords(h);
  gsap.set(words, { yPercent: 112 });
  ScrollTrigger.create({
    trigger: h, start: "top 85%", once: true,
    onEnter: ()=>gsap.to(words, { yPercent:0, duration:1.25, ease:"power4.out", stagger:0.035 })
  });
});

/* manifesto — word-by-word reveal
   (a scrubbed opacity tied directly to scroll position could leave words
   permanently dim if the visitor didn't scroll through the exact range —
   this triggers once and always finishes, regardless of scroll behaviour) */
(function(){
  const copy = document.querySelector(".manifesto-copy");
  const words = copy.textContent.trim().split(/\s+/);
  copy.innerHTML = words.map(w=>`<span class="word">${w}</span>`).join(" ");
  ScrollTrigger.create({
    trigger: copy, start:"top 85%", once:true,
    onEnter: ()=>gsap.to(copy.querySelectorAll(".word"), {
      opacity:1, duration:0.9, stagger:0.025, ease:"power2.out"
    })
  });
})();

/* generic reveals (skip hero — handled by intro) */
gsap.utils.toArray("[data-reveal]").forEach(el=>{
  if (el.closest(".hero")) return;
  gsap.to(el, {
    opacity:1, y:0, duration:1.1, ease:"power3.out",
    scrollTrigger:{ trigger:el, start:"top 88%", once:true }
  });
});

/* stat counters */
document.querySelectorAll(".stat-num").forEach(el=>{
  const end = +el.dataset.count, suf = el.dataset.suffix || "";
  const obj = { v:0 };
  ScrollTrigger.create({
    trigger:el, start:"top 85%", once:true,
    onEnter:()=>gsap.to(obj,{ v:end, duration:1.8, ease:"power2.out",
      onUpdate:()=>el.innerHTML = Math.round(obj.v) + `<em>${suf}</em>` })
  });
});

/* work media — cinematic clip reveal + parallax */
document.querySelectorAll(".work-media").forEach(media=>{
  const visual = media.querySelector(".work-visual");
  gsap.set(media, { clipPath: "inset(14% 10% 14% 10%)" });
  ScrollTrigger.create({
    trigger: media, start:"top 82%", once:true,
    onEnter: ()=>{
      gsap.to(media, { clipPath:"inset(0% 0% 0% 0%)", duration:1.4, ease:"power4.inOut" });
      gsap.to(visual, { scale:1, duration:1.8, ease:"power3.out" });
    }
  });
  gsap.fromTo(visual, { yPercent:-6 }, {
    yPercent:6, ease:"none",
    scrollTrigger:{ trigger:media, start:"top bottom", end:"bottom top", scrub:0.5 }
  });
});

/* scroll-velocity skew on the work grid */
(function(){
  const grid = document.querySelector(".work-grid");
  if (!grid || reduced) return;
  const toSkew = gsap.quickTo(grid, "skewY", { duration:0.5, ease:"power3.out" });
  ScrollTrigger.create({
    trigger: grid, start:"top bottom", end:"bottom top",
    onUpdate(self){
      const v = self.getVelocity();
      toSkew(Math.abs(v) < 20 ? 0 : clamp(v / -420, -3.2, 3.2));
    },
    onLeave(){ toSkew(0); }, onLeaveBack(){ toSkew(0); }
  });
})();

/* section headers slight parallax drift for depth */
gsap.utils.toArray(".sec-head").forEach(el=>{
  gsap.fromTo(el, { y: 40 }, { y:-30, ease:"none",
    scrollTrigger:{ trigger:el, start:"top bottom", end:"bottom top", scrub:0.8 } });
});

/* ============================================================
   Marquee — infinite, velocity-aware
   ============================================================ */
(function(){
  const track = document.getElementById("marquee-track");
  const unit = "<span>SEO AUCKLAND</span><span>GOOGLE ADS</span><span>WEB DEVELOPMENT</span><span>AI AUTOMATION</span><span>TIBERIUS®</span>";
  track.innerHTML = unit.repeat(6);
  const tween = gsap.to(track, { xPercent:-50, ease:"none", duration:26, repeat:-1 });
  if (!reduced) ScrollTrigger.create({
    trigger: track, start:"top bottom", end:"bottom top",
    onUpdate(self){ tween.timeScale( clamp(1 + Math.abs(self.getVelocity())/900, 1, 4) ); }
  });
})();

/* ============================================================
   Magnetic elements + elastic release
   ============================================================ */
if (!isTouch) document.querySelectorAll("[data-magnetic]").forEach(el=>{
  const xTo = gsap.quickTo(el, "x", { duration:0.4, ease:"power3.out" });
  const yTo = gsap.quickTo(el, "y", { duration:0.4, ease:"power3.out" });
  el.addEventListener("mousemove", e=>{
    const r = el.getBoundingClientRect();
    xTo((e.clientX - (r.left + r.width/2)) * 0.32);
    yTo((e.clientY - (r.top + r.height/2)) * 0.32);
  });
  el.addEventListener("mouseleave", ()=>{
    gsap.to(el, { x:0, y:0, duration:0.9, ease:"elastic.out(1, 0.35)" });
  });
});

/* ============================================================
   Testimonials
   ============================================================ */
(function(){
  const slides = [...document.querySelectorAll(".testi-slide")];
  const counter = document.getElementById("testi-current");
  const bar = document.getElementById("testi-progress");
  let idx = 0, timer;
  const AUTO = 6.5;

  function go(n, dir){
    const prev = slides[idx];
    idx = (n + slides.length) % slides.length;
    const next = slides[idx];
    gsap.to(prev, { opacity:0, y:-26, duration:0.5, ease:"power2.in",
      onComplete:()=>prev.classList.remove("is-active") });
    next.classList.add("is-active");
    gsap.fromTo(next, { opacity:0, y: 34*dir }, { opacity:1, y:0, duration:0.85, ease:"power3.out", delay:0.28 });
    counter.textContent = String(idx+1).padStart(2,"0");
    restartBar();
  }
  function restartBar(){
    gsap.killTweensOf(bar);
    gsap.fromTo(bar, { scaleX:0 }, { scaleX:1, duration:AUTO, ease:"none" });
    clearTimeout(timer);
    if (!reduced) timer = setTimeout(()=>go(idx+1, 1), AUTO*1000);
  }
  document.getElementById("testi-next").addEventListener("click", ()=>go(idx+1, 1));
  document.getElementById("testi-prev").addEventListener("click", ()=>go(idx-1, -1));
  ScrollTrigger.create({
    trigger:"#voices", start:"top 70%", once:true, onEnter: restartBar
  });
})();

/* ============================================================
   FAQ accordion
   ============================================================ */
document.querySelectorAll(".faq-item").forEach(item=>{
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  q.addEventListener("click", ()=>{
    const open = item.classList.contains("is-open");
    document.querySelectorAll(".faq-item.is-open").forEach(o=>{
      if (o !== item){
        o.classList.remove("is-open");
        gsap.to(o.querySelector(".faq-a"), { height:0, duration:0.55, ease:"power3.inOut" });
      }
    });
    item.classList.toggle("is-open", !open);
    gsap.to(a, { height: open ? 0 : "auto", duration:0.65, ease:"power3.inOut",
      onComplete:()=>ScrollTrigger.refresh() });
  });
});

/* ============================================================
   Anchor navigation
   ============================================================ */
document.querySelectorAll("[data-scroll-to]").forEach(link=>{
  link.addEventListener("click", e=>{
    e.preventDefault();
    const target = document.querySelector(link.dataset.scrollTo);
    if (!target) return;
    const top = target.offsetTop;
    if (SMOOTH) window.scrollTo(0, Math.max(0, top - 20));
    else window.scrollTo({ top: Math.max(0, top - 20), behavior:"smooth" });
  });
});

/* local time — Auckland */
(function(){
  const el = document.getElementById("local-time");
  const fmt = new Intl.DateTimeFormat("en-NZ",{ hour:"2-digit", minute:"2-digit", hour12:false, timeZone:"Pacific/Auckland" });
  const tick = ()=>el.textContent = "AKL " + fmt.format(new Date());
  tick(); setInterval(tick, 30000);
})();

/* ============================================================
   Loader → intro sequence
   ============================================================ */
(function(){
  const header = document.querySelector(".site-header");
  const heroChars = document.querySelectorAll(".hero-title .char");
  const heroSup = document.querySelector(".hero-title sup");
  gsap.set(heroChars, { yPercent:112 });
  gsap.set(heroSup, { opacity:0 });

  function intro(){
    document.body.classList.remove("is-locked");
    setBodyHeight();
    ScrollTrigger.refresh();
    const tl = gsap.timeline();
    tl.to(heroChars, { yPercent:0, duration:1.35, ease:"power4.out", stagger:0.05 }, 0.1)
      .to(heroSup, { opacity:1, duration:0.8 }, 0.9)
      .to(".hero [data-reveal]", { opacity:1, y:0, duration:1.1, ease:"power3.out", stagger:0.12 }, 0.55)
      .to(header, { opacity:1, y:0, duration:0.9, ease:"power3.out",
          onComplete:()=>header.classList.add("is-ready") }, 0.7);
  }

  if (reduced){
    document.body.classList.remove("is-locked");
    gsap.set(heroChars, { yPercent:0 });
    gsap.set(heroSup, { opacity:1 });
    gsap.set(header, { opacity:1, y:0 });
    header.classList.add("is-ready");
    return;
  }

  const loader = document.getElementById("loader");
  const letters = loader.querySelectorAll(".loader-name span");
  const countEl = loader.querySelector(".loader-count b");
  const barFill = loader.querySelector(".loader-bar i");
  const n = { v:0 };

  const tl = gsap.timeline();
  tl.fromTo(letters, { yPercent:120 }, { yPercent:0, duration:0.9, ease:"power4.out", stagger:0.06 })
    .to(n, { v:100, duration:1.7, ease:"power2.inOut",
        onUpdate:()=>countEl.textContent = String(Math.round(n.v)).padStart(3,"0") }, 0.3)
    .to(barFill, { scaleX:1, duration:1.7, ease:"power2.inOut" }, 0.3)
    .to(letters, { yPercent:-120, duration:0.7, ease:"power3.in", stagger:0.04 }, "+=0.15")
    .to(loader, { yPercent:-100, duration:1.0, ease:"power4.inOut" }, "-=0.35")
    .add(intro, "-=0.55")
    .set(loader, { display:"none" });

  /* safety net — if anything interrupts the sequence, never trap the visitor */
  setTimeout(()=>{
    if (loader.style.display !== "none"){
      loader.style.display = "none";
      document.body.classList.remove("is-locked");
      intro();
    }
  }, 8000);
})();

/* final refresh once everything is measured (load may already have fired) */
const finalRefresh = ()=>{ setBodyHeight(); ScrollTrigger.refresh(); };
if (document.readyState === "complete") finalRefresh();
else window.addEventListener("load", finalRefresh);
setTimeout(finalRefresh, 600);

return function destroy(){
  cancelAnimationFrame(rafId);
  try{ ScrollTrigger.getAll().forEach(t => t.kill()); }catch(e){}
  try{ gsap.globalTimeline.clear(); }catch(e){}
  if (_renderer){ try{ _renderer.dispose(); }catch(e){} }
  document.body.style.height = "";
  const c = document.getElementById("smooth-content");
  if (c) c.style.transform = "";
  booted = false;
};
}
