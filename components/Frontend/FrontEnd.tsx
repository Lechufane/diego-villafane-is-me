import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Mac from "../animations/Mac";
import WorkDescription from "../WorkDescription/WorkDescription";
import classes from "./FrontEnd.module.css";

const FrontEnd: React.FC = () => {
  return (
    <div className={classes.workContainer}>
      <Canvas shadows={false} camera={{ position: [0, 0, 8] }}>
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
      <WorkDescription
        style={{
          width: "300px",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px",
          border: "none",
          background: "#FFF",
          color: "var(--third-color)",
          fontSize: "18px",
          zIndex: "1",
        }}>
        My experience with front-end development is short but being one of the
        things I like the most, I have keep myself posted with the news on this
        end of the job. This entire webpage was made with NextJs, ThreeJS, React
        Simple Maps, and of course CSS Styling and HTML. With responsive layout,
        :root variables for colors and fonts, and modularized to be reusable.
      </WorkDescription>
    </div>
  );
};

export default FrontEnd;
