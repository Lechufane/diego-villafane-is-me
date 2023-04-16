import React from "react";
import classes from "./Who.module.css";
import Image from "next/image";
import Button from "../ui/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Cube/Cube";

const Who: React.FC = () => {
  return (
    <section className={classes.whoSection}>
      <div className={classes.whoContainer}>
        <article className={classes.left}>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enablePan={false} autoRotate enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </article>
        <article className={classes.right}>
          <h1>Think outside the box!</h1>
          <div className={classes.whoWeAre}>
            <Image
              className={classes.line}
              src='/icons/line.svg'
              alt='line'
              width={40}
              height={20}
            />
            <h2>Who am I</h2>
          </div>
          <p className={classes.description}>
            I'm a mid-level full-stack developer based in Argentina, with
            working experience, professional english proficiency, and
            continuously growing as a true full-stack developer in order to
            perform in any area.
          </p>
          <p className={classes.description}>
            My dream is to work in videogames someday, and I'm already doing my
            first steps with C# programming.
          </p>
          <div style={{ width: "100px" }}>
            <Button>Check my work.</Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Who;
