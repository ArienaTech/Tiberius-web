"use client";

import { Component, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

/* A failed HDR/texture fetch inside the Canvas (flaky network, ad-blocker,
   CDN hiccup) throws past Suspense — without this boundary it takes down
   the entire page, not just this decorative knot. */
class KnotErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

/* procedural Greek-key (meander) band, tiled around the knot's tube via
   the geometry's own UVs — built-in map + bumpMap, no custom shader needed */
function useGreekKeyTexture() {
  return useMemo(() => {
    const period = 96,
      h = 160,
      cols = 8,
      w = period * cols;
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const x = c.getContext("2d")!;
    x.fillStyle = "#2a2a2a";
    x.fillRect(0, 0, w, h);
    x.strokeStyle = "#ffffff";
    x.lineJoin = "miter";
    x.lineCap = "square";
    x.lineWidth = h * 0.05;
    x.beginPath();
    x.moveTo(0, h * 0.1);
    x.lineTo(w, h * 0.1);
    x.moveTo(0, h * 0.9);
    x.lineTo(w, h * 0.9);
    x.stroke();
    x.lineWidth = h * 0.11;
    const top = h * 0.24,
      bot = h * 0.76,
      mid1 = h * 0.4,
      mid2 = h * 0.6;
    x.beginPath();
    for (let i = 0; i < cols; i++) {
      const bx = i * period;
      x.moveTo(bx, bot);
      x.lineTo(bx, top);
      x.lineTo(bx + period * 0.62, top);
      x.lineTo(bx + period * 0.62, mid1);
      x.lineTo(bx + period * 0.3, mid1);
      x.lineTo(bx + period * 0.3, mid2);
      x.lineTo(bx + period * 0.86, mid2);
      x.lineTo(bx + period * 0.86, top);
      x.lineTo(bx + period, top);
      x.lineTo(bx + period, bot);
    }
    x.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(5, 1);
    tex.needsUpdate = true;
    return tex;
  }, []);
}

function RotatingKnot() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const scrollY = useRef(0);
  const lastScrollY = useRef(0);
  const pattern = useGreekKeyTexture();

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current || !groupRef.current) return;
    const vh = window.innerHeight || 900;
    const progress = Math.min(scrollY.current / vh, 1.4);
    const scrollDelta = scrollY.current - lastScrollY.current;
    lastScrollY.current = scrollY.current;

    // continuous spin, same idea as the site's other scroll-driven 3D shapes:
    // a steady base rotation plus extra spin proportional to scroll velocity
    meshRef.current.rotation.x += delta * 0.35;
    meshRef.current.rotation.y += delta * 0.5 + scrollDelta * 0.004;

    // recede into the distance as the visitor scrolls past the hero
    groupRef.current.position.z = -progress * 2.2;
    groupRef.current.position.y = progress * 0.6;
    const s = Math.max(1 - progress * 0.4, 0.55);
    groupRef.current.scale.setScalar(s);

    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    mat.opacity = Math.max(1 - progress * 0.8, 0.2);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.1}>
      <group ref={groupRef}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.32, 220, 36]} />
          <meshStandardMaterial
            metalness={0.85}
            roughness={0.22}
            color="#D4AF37"
            bumpMap={pattern}
            bumpScale={0.035}
            emissive="#5c3d0f"
            emissiveIntensity={0.55}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
}

/**
 * Self-contained rotating metallic torus knot — drop `<HeroKnot />` into any
 * page. Renders its own <Canvas>, so no external scene/camera setup needed.
 */
export default function HeroKnot() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <KnotErrorBoundary>
      <Canvas camera={{ position: [0, 0, 4.4], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 2]} intensity={2.4} color="#fff6df" />
        <directionalLight position={[-3, -2, 2]} intensity={0.8} color="#ffd88a" />
        <pointLight position={[-2.5, 1.5, 3]} intensity={30} color="#fff3d6" distance={14} decay={2} />
        <pointLight position={[2, -1.2, 2.5]} intensity={18} color="#ffd88a" distance={12} decay={2} />
        <RotatingKnot />
        {/* isolated so a failed HDR fetch only drops the env reflections,
            not the knot that's already rendering fine with the lights above */}
        <KnotErrorBoundary>
          <Suspense fallback={null}>
            <Environment preset="studio" />
          </Suspense>
        </KnotErrorBoundary>
      </Canvas>
    </KnotErrorBoundary>
  );
}
