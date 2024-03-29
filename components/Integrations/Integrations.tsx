import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Gears from "../animations/Gears";
import classes from "./Integrations.module.css";

interface Props {
  selected: boolean;
}

const Integrations: React.FC<Props> = ({ selected }: Props) => {
  return (
    <div className={classes.workContainer}>
      <Canvas
        shadows={false}
        camera={{ fov: 10, position: [3, 3, 3] }}
        style={{
          width: "100vw",
          height: "40vh",
          display: selected ? "block" : "none",
        }}
      >
        <Suspense fallback={null}>
          <Environment
            background={false} // can be true, false or "only" (which only sets the background) (default: false)
            blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
            files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
            path="/"
            preset="city"
            scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
            encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
          />
          <Gears />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Integrations;
