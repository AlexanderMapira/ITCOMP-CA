"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Center, Instance, Instances } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// JSX types are provided by r3f-jsx.d.ts

gsap.registerPlugin(useGSAP);

function FallbackMaterial() {
  return (
    <meshStandardMaterial
      color="#BCC2CC"
      roughness={0.2}
      metalness={0.7}
      envMapIntensity={1}
    />
  );
}

type Item5Props = {
  blockSize?: number;
  gap?: number;
  scaleAll?: number;
  speed?: number;
  layerStagger?: number;
  castShadow?: boolean;
  receiveShadow?: boolean;
};

export function Item5({
  blockSize = 1,
  gap = 0.12,
  scaleAll = 1.15,
  speed = 1,
  layerStagger = 0.15,
  castShadow = false,
  receiveShadow = false,
}: Item5Props) {
  const groupRef = useRef<THREE.Group>(null);
  const firstLayerRef = useRef<THREE.Group>(null);
  const secondLayerRef = useRef<THREE.Group>(null);
  const thirdLayerRef = useRef<THREE.Group>(null);

  const distance = blockSize + gap;

  const layers = useMemo<
    [THREE.Vector3[], THREE.Vector3[], THREE.Vector3[]]
  >(() => {
    const l1: THREE.Vector3[] = [];
    const l2: THREE.Vector3[] = [];
    const l3: THREE.Vector3[] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const v = new THREE.Vector3(x * distance, y * distance, z * distance);
          if (z === -1) l1.push(v);
          else if (z === 0) l2.push(v);
          else l3.push(v);
        }
      }
    }
    return [l1, l2, l3];
  }, [distance]);

  useGSAP(() => {
    if (
      !groupRef.current ||
      !firstLayerRef.current ||
      !secondLayerRef.current ||
      !thirdLayerRef.current
    )
      return;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    tl.to(firstLayerRef.current.rotation, {
      z: Math.PI,
      duration: 1.5 / speed,
    })
      .to(
        secondLayerRef.current.rotation,
        {
          z: Math.PI,
          duration: 1.5 / speed,
          delay: layerStagger / speed,
        },
        "<"
      )
      .to(
        thirdLayerRef.current.rotation,
        {
          z: Math.PI,
          duration: 1.5 / speed,
          delay: (layerStagger + 0.1) / speed,
        },
        "<"
      )
      .to(
        groupRef.current.rotation,
        {
          y: Math.PI * 2,
          duration: 1.75 / speed,
        },
        0
      );

    return () => tl.kill();
  }, [speed, layerStagger]);

  return (
    <Center>
      <group rotation={[0, 0, Math.PI / 8]} scale={scaleAll}>
        <group rotation={[0, Math.PI / 2, 0]} scale={0.6} ref={groupRef}>
          <Instances castShadow={castShadow} receiveShadow={receiveShadow}>
            <boxGeometry args={[blockSize, blockSize, blockSize]} />
            <FallbackMaterial />
            <group ref={firstLayerRef}>
              {layers[0].map((p, i) => (
                <Instance
                  key={`l1-${i}`}
                  position={p}
                  castShadow={castShadow}
                  receiveShadow={receiveShadow}
                />
              ))}
            </group>
            <group ref={secondLayerRef}>
              {layers[1].map((p, i) => (
                <Instance
                  key={`l2-${i}`}
                  position={p}
                  castShadow={castShadow}
                  receiveShadow={receiveShadow}
                />
              ))}
            </group>
            <group ref={thirdLayerRef}>
              {layers[2].map((p, i) => (
                <Instance
                  key={`l3-${i}`}
                  position={p}
                  castShadow={castShadow}
                  receiveShadow={receiveShadow}
                />
              ))}
            </group>
          </Instances>
        </group>
      </group>
    </Center>
  );
}

/** A small ready-to-use Canvas wrapper */
export function Item5Canvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [7, 7, 7], fov: 40 }}
      gl={{ antialias: true }}
      dpr={[1, 2]} // save GPU on low-DPR devices
    >
      <hemisphereLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
      <Item5 castShadow receiveShadow />
    </Canvas>
  );
}
