"use client";

import { Component, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import type { Mesh } from "three";

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

function RotatingKnot() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.35;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.32, 220, 36]} />
        <meshStandardMaterial metalness={1} roughness={0.16} color="#D6B15E" />
      </mesh>
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
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 4, 2]} intensity={1.8} />
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
