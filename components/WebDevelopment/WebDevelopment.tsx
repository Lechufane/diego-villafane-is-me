import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactLogo } from "../animations";
import WorkDescription from "../WorkDescription";
import classes from "./WebDevelopment.module.css";

const WebDevelopment: React.FC = () => {
  return (
    <div className={classes.workContainer}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ReactLogo />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
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
        I first started working with MERN stack (Mysql, Express, Node, React)
        but after my previous experience I now work with NextJS, Nest,
        Typescript, and Postgres.
      </WorkDescription>
    </div>
  );
};

export default WebDevelopment;
