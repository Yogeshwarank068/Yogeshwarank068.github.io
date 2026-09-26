import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Environment, Lightformer } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type * as THREE from "three";

function Cluster() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const { x, y } = state.pointer;
    g.rotation.y += delta * 0.15;
    g.rotation.x += (y * 0.35 - g.rotation.x) * 0.05;
    g.rotation.z += (-x * 0.2 - g.rotation.z) * 0.05;
  });

  return (
    <group ref={group}>
      <Icosahedron args={[1.55, 1]}>
        <meshStandardMaterial
          color="#5ef1ff"
          wireframe
          emissive="#2bd8ff"
          emissiveIntensity={0.5}
        />
      </Icosahedron>
      <Float speed={1.3} rotationIntensity={1.2} floatIntensity={1.4}>
        <TorusKnot args={[0.42, 0.14, 90, 14]} position={[2.1, 0.7, -0.6]}>
          <meshStandardMaterial color="#b07bff" roughness={0.25} metalness={0.7} />
        </TorusKnot>
      </Float>
      <Float speed={1.7} rotationIntensity={1} floatIntensity={1.6}>
        <Icosahedron args={[0.36, 0]} position={[-2.2, -0.6, 0.4]}>
          <meshStandardMaterial color="#5ef1ff" roughness={0.2} metalness={0.8} />
        </Icosahedron>
      </Float>
      <Float speed={1.1} rotationIntensity={0.8} floatIntensity={1.2}>
        <Icosahedron args={[0.24, 0]} position={[1.4, -1.3, 0.8]}>
          <meshStandardMaterial color="#b07bff" roughness={0.2} metalness={0.8} />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      className="!absolute inset-0"
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 5]} intensity={40} color="#5ef1ff" />
      <pointLight position={[-5, -3, 2]} intensity={30} color="#b07bff" />
      <Suspense fallback={null}>
        <Cluster />
        <Environment>
          <Lightformer intensity={2} position={[0, 4, 2]} scale={[8, 8, 1]} />
          <Lightformer intensity={1} color="#8bb" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[16, 1, 1]} />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
