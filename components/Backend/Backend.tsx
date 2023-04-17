import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Computer from "../animations/Computer";
import WorkDescription from "../WorkDescription/WorkDescription";
import classes from "./Backend.module.css";

const Backend: React.FC = () => {
  return (
    <div className={classes.workContainer}>
      <Canvas
        camera={{ position: [0, 0, 99] }}
        shadows={false}
        style={{ overflow: "visible" }}>
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
          <Computer position={[0, -20, 0]} />
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
        Working as a full-stack developer I had a ton of backend experience,
        like creating new models with Sequelize, Postgres, and Typescript, using
        express to create a basic api for consulting, and bringing forth data to
        use in a webchat service.
      </WorkDescription>
    </div>
  );
};

export default Backend;
