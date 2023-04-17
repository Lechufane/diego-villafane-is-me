import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { lazy } from "react";
import ReactLogo from "../animations/ReactLogo";

const WebDevelopment: React.FC = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <ReactLogo />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
    </Canvas>
  );
};

export default WebDevelopment;
