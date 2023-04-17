import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a as three } from "@react-spring/three";

type Props = {
  [propName: string]: any; // permitir cualquier prop adicional
};

const Mac: React.FC<Props> = ({ ...props }) => {
  const group = useRef<THREE.Group>(null); // especificar el tipo de referencia
  const { nodes, materials } = useGLTF("animations/mac-draco.glb") as any; // especificar el tipo de retorno de useGLTF
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          material={materials.aluminium}
          geometry={(nodes as any)["Cube008"].geometry} // especificar el tipo de nodes
        />
        <mesh
          material={materials["matte.001"]}
          geometry={(nodes as any)["Cube008_1"].geometry}
        />
        <mesh
          material={materials["screen.001"]}
          geometry={(nodes as any)["Cube008_2"].geometry}
        />
      </group>
    </group>
  );
};

export default Mac;
