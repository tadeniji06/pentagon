'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

function GeometricForm({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const shouldReduce = useReducedMotion();

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.6, 1), []);
  const edgesGeometry = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#1a4580'),
        roughness: 0.3,
        metalness: 0.6,
        transparent: true,
        opacity: 0.55,
        side: THREE.FrontSide,
      }),
    []
  );

  const edgesMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color('#98A2B3'),
        transparent: true,
        opacity: 0.18,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (meshRef.current && edgesRef.current) {
      const t = clock.getElapsedTime();

      if (!shouldReduce) {
        meshRef.current.rotation.y = t * 0.003 * 60 * (1 / 60);
        meshRef.current.rotation.x = t * 0.001 * 60 * (1 / 60);

        // Cursor influence
        meshRef.current.rotation.y += (mouseX * 0.08 - meshRef.current.rotation.y) * 0.02;
        meshRef.current.rotation.x += (mouseY * 0.04 - meshRef.current.rotation.x) * 0.02;
      }

      // Sync edges with mesh
      edgesRef.current.rotation.copy(meshRef.current.rotation);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry} material={material} />
      <lineSegments ref={edgesRef} geometry={edgesGeometry} material={edgesMaterial} />
    </group>
  );
}

function Scene({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const { camera } = useThree();

  useFrame(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.01;
      camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.01;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#98A2B3" />
      <pointLight position={[0, 4, 2]} intensity={0.8} color="#C9A84C" distance={12} />
      <GeometricForm mouseX={mouseX} mouseY={mouseY} />
    </>
  );
}

interface HeroSceneProps {
  mouseX: number;
  mouseY: number;
}

export default function HeroScene({ mouseX, mouseY }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <Scene mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
}
