import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    retro_computer_setup_retro_computer_setup_Mat_0: THREE.Mesh;
  };
  materials: {
    retro_computer_setup_Mat: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "/animations/computer-transformed.glb"
  ) as unknown as GLTFResult;
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry
              }
              material={materials.retro_computer_setup_Mat}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/computer-transformed.glb");
