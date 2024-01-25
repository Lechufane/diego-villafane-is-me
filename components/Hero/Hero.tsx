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
  data: Data
}

interface Data {
  navbar: {
    links: {
      [key: string]: string
    },
    button: string,
  }
  hero: {
    title: string,
    subtitle: string,
    description: string[],
    button: string,
  }
}

const Hero: React.FC<Props> = ({data}: Props) => {

  return (
    <section id='Hero' className={cn("w-full h-screen, snap-center flex items-center flex-col justify-between",classes.heroSection)}>
      <Navbar data={data?.navbar} />
      <div className={cn("h-screen snap-center flex justify-between",classes.heroContainer)}>
        <article className={cn("flex flex-[2] flex-col gap-5 p-5 m-5",classes.left)}>
          <h1>{data?.hero.title}</h1> 
          <div className={cn("flex items-center gap-5",classes.whatDoWeDo)}>
            <Image
              className={classes.line}
              src='/icons/line.svg'
              alt='line'
              width={40}
              height={20}
            />
            <h2>{data.hero.subtitle}</h2>
          </div>
            {data.hero.description.map((item: string, index: number) => (
              <p key={index} className={cn("text-2xl",classes.description)}>{item}</p>
            ))}
          <div className="w-[100px]">
            <ScrollButton link='#Who'>{data.hero.button}</ScrollButton>
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