import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Hero.module.css";
import Image from "next/image";
import Button from "../ui/Button";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Hero: React.FC = () => {
  return (
    <section className={classes.heroSection}>
      <Navbar />
      <div className={classes.heroContainer}>
        <article className={classes.left}>
          <h1>Create, Resolve, Make.</h1>
          <div className={classes.whatDoWeDo}>
            <Image
              className={classes.line}
              src='/icons/line.svg'
              alt='line'
              width={40}
              height={20}
            />
            <h2>What do I do.</h2>
          </div>
          <p className={classes.description}>
            {
              "I work with front-end technologies like React, or NextJS but I've also worked with backend technologies like Express, nodeJS, postgress, SQL, as well as Typescript in both cases."
            }
          </p>
          <p className={classes.description}>
            {
              "This entire portfolio was made with NextJS, Typescript, ThreeJS, and also plain CSS (well, CSS modules...) because I don't like using CSS frameworks while working on my own projects, it's easy to get too much comfortable with those."
            }
          </p>

          <div style={{ width: "100px" }}>
            <Button>Learn More</Button>
          </div>
        </article>
        <article className={classes.right}>
          <Canvas>
            <OrbitControls enablePan={false} enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 0, 1]} />
            <Sphere args={[2.1, 300, 300]} scale={1}>
              <MeshDistortMaterial
                color={"#220736"}
                attach='material'
                distort={0.6}
                speed={2}
              />
            </Sphere>
          </Canvas>

          <Image
            className={classes.img}
            src='/images/moon.png'
            alt='moonrider'
            width={600}
            height={600}
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
