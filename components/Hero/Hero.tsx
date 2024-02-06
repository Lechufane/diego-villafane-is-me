import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";
import { ScrollButton } from "../ui";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { OrbitControls, Sphere } from "@react-three/drei";
import cn from "@/utils/className";
import Img from "../Img/Img";
import SectionDescription from "@/components/sectionDescription/SectionDescription";

interface Props {
  data: Data;
}

interface Data {
  hero: {
    title: string;
    subtitle: string;
    description: string[];
    button: string;
  };
}

const Hero: React.FC<Props> = ({ data }: Props) => {
  const { hero } = data;

  return (
    <section
      id="Home"
      className={cn(
        "w-full h-screen flex flex-nowrap justify-evenly mx-auto",
        classes.heroSection
      )}
    >
      <article
        className={cn(
          "flex flex-col justify-center items-center max-w-[50vw] max-h-screen p-5 my-auto gap-1",
          classes.textContainer
        )}
      >
        <SectionDescription section={hero} buttonLink="Who" />
      </article>

      <article
        className={cn(
          "flex flex-col justify-center items-center gap- w-[60vh] p-5 relative overflow-visible rounded-full"
        )}
      >
        <div
          className={cn(
            "absolute  w-full h-full overflow-visible my-auto rounded-full",
            classes.canvas
          )}
        >
          <Canvas
            style={{
              zIndex: 10,
              overflow: "visible",
              margin: "0 auto",
              borderRadius: "50%",
            }}
            camera={{ position: [0, 0, 5] }}
          >
            <OrbitControls enablePan={false} enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 0, 1]} />
            <Sphere args={[2.1, 300, 300]} scale={0.9}>
              <MeshDistortMaterial
                color={"#220736"}
                attach="material"
                distort={0.6}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
        <Img
          className={cn(
            "absolute w-[90%] my-auto rounded-full z-10",
            classes.img
          )}
          src="/images/moon.png"
          alt="moonrider"
          width={600}
          height={600}
        />
      </article>
    </section>
  );
};

export default Hero;
