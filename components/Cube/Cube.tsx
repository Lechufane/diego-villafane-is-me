import React, { useRef } from "react";
import { RenderTexture } from "@react-three/drei";
import { Text, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube: React.FC = () => {
  const textRef = useRef<any>(null);

  useFrame(
    (state) =>
      (textRef.current!.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture sourceFile={null} attach={"map"}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach={"background"} args={["#e1e1e1"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
