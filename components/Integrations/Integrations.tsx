import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Gears from "../animations/Gears";
import WorkDescription from "../WorkDescription/WorkDescription";
import classes from "./Integrations.module.css";

const Integrations: React.FC = () => {
  return (
    <div className={classes.workContainer}>
      <Canvas shadows={false} camera={{ fov: 10, position: [3, 3, 3] }}>
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
        After becoming a Full-Stack javscript developer, I got my first job in a
        multinational company called QuePlan, which was an insurance comparison
        webpage, working here I had to integrate different services, like
        Twilio, Redis, and our own backend service, to provide precise metrics
        and dashboards for our bussiness
      </WorkDescription>
    </div>
  );
};

export default Integrations;
