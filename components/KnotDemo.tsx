"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import type { Mesh } from "three";

function MetalKnot() {
  const ref = useRef<Mesh>(null!);
  useFrame((state, dt) => {
    ref.current.rotation.x += dt * 0.12;
    ref.current.rotation.y += dt * 0.16;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1, 0.32, 220, 36]} />
        <meshStandardMaterial
          color="#52C4AA"
          metalness={1}
          roughness={0.16}
          envMapIntensity={1.7}
        />
      </mesh>
    </Float>
  );
}

export default function KnotDemo() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Environment preset="studio" />
      <MetalKnot />
    </Canvas>
  );
}
