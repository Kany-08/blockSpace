import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthdayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import DigitalMap from "../assets/textures/digitalworld.jpg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, digitalMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthdayMap, EarthNormalMap, EarthSpecularMap, DigitalMap, EarthCloudsMap]
  );
  const digitalRef = useRef();
  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    digitalRef.current.rotation.y = elapsedTime / 8;
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={0.8} />
      <Stars
        radius={250}
        depth={10}
        count={1000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={digitalRef} position={[0, 0, 3]}>
        <sphereGeometry args={[5.005, 32, 16]} />
        <meshPhongMaterial
          map={digitalMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[0.705, 32, 16]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
          <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}

export default Earth;