import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import NeonSign from "../animations/NeonSign";
import WorkDescription from "../WorkDescription/WorkDescription";
import classes from "./Translation.module.css";

const Translation: React.FC = () => {
  return (
    <div className={classes.workContainer}>
      <Canvas camera={{ position: [0, 0, 180] }} shadows={false}>
        <Suspense fallback={null}>
          <Environment
            background={false} // can be true, false or "only" (which only sets the background) (default: false)
            blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
            files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
            path='/'
            preset='city'
            scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
            encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
          />
          <NeonSign position={[0, 1, 0]} />
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
      <WorkDescription
        style={{
          padding: "20px",
          margin: "20px",
          borderRadius: "10px",
          border: "none",
          background: "#FFF",
          color: "var(--third-color)",
          fontSize: "18px",
          zIndex: "1",
        }}>
        {
          "Now one last thing about me as a professional, I'm an audiovisual translator, with experience doing translation for short films form Buenos Aires, I like to mention this as English levels are very important for this line of work, and because I love working with movies, It's something I'd do for the love of it."
        }
      </WorkDescription>
    </div>
  );
};

export default Translation;
