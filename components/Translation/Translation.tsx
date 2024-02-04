import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NeonSign } from "../animations";
import classes from "./Translation.module.css";

interface Props {
  selected: boolean;
}

const Translation: React.FC<Props> = ({ selected }: Props) => {
  return (
    <div className={classes.workContainer}>
      <Canvas
        camera={{ position: [0, 0, 0] }}
        shadows={false}
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
          <NeonSign position={[3, 4, 3]} />
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

export default Translation;
