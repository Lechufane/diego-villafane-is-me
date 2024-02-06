import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Mac } from "../animations";
import styles from "./Frontend.module.css";

interface Props {
  selected: boolean;
}

const Frontend: React.FC<Props> = ({ selected }: Props) => {
  return (
    <div className={styles.workContainer}>
      <Canvas
        shadows={false}
        camera={{ position: [0, 0, 8] }}
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
          <Mac position={[0, -3, 0]} />
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

export default Frontend;
