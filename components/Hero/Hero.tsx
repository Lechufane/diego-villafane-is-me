import React from "react";
import Navbar from "../Navbar";
import classes from "./Hero.module.css";
import Image from "next/image";
import { ScrollButton } from "../ui";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { OrbitControls, Sphere } from "@react-three/drei";
import cn from "@/utils/className";

interface Props {
  data: Data;
}

interface Data {
  navbar: {
    links: {
      [key: string]: string;
    };
    button: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string[];
    button: string;
  };
}

const Hero: React.FC<Props> = ({ data }: Props) => {
  const { navbar, hero } = data;

  return (
    <section id="Home" className={cn("bg-transparent", classes.heroSection)}>
      <div
        className={cn(
          "h-screen snap-center flex justify-between flex-nowrap",
          classes.heroContainer
        )}
      >
        <article
          className={cn(
            "overflow-visible w-[50vw] flex flex-col justify-center items-center z-20 bg-transparent flex-nowrap p-4",
            classes.left
          )}
        >
          <h1>{hero.title}</h1>
          <div className={cn("flex items-center gap-5", classes.whatDoWeDo)}>
            <Image
              className={cn(classes.line)}
              src="/icons/line.svg"
              alt="line"
              width={40}
              height={20}
            />
            <h2>{hero.subtitle}</h2>
          </div>
          {hero.description.map((item: string, index: number) => (
            <p
              key={index}
              className={cn("text-2xl overflow-visible", classes.description)}
            >
              {item}
            </p>
          ))}
          <div className="w-[100px] z-30">
            <ScrollButton
              link="#Who"
              className="flex justify-center items-center"
            >
              {hero.button}
            </ScrollButton>
          </div>
        </article>
        <article
          className={cn(
            "w-[40vw] flex flex-col justify-center items-center z-10 bg-transparent flex-nowrap",
            classes.right
          )}
        >
          <Canvas
            style={{
              width: "65vw",
              height: "100%",
              overflow: "visible",
              zIndex: 0,
            }}
            className={classes.canvas}
            camera={{ position: [0, 0, 5] }}
          >
            <OrbitControls enablePan={false} enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 0, 1]} />
            <Sphere args={[2.1, 300, 300]} scale={1}>
              <MeshDistortMaterial
                color={"#220736"}
                attach="material"
                distort={0.6}
                speed={2}
              />
            </Sphere>
          </Canvas>

          <Image
            className={classes.img}
            src="/images/moon.png"
            alt="moonrider"
            width={600}
            height={600}
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
