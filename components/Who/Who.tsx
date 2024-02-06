import Image from "next/image";
import { ScrollButton } from "../ui";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Cube";
import classes from "./Who.module.css";
import cn from "@/utils/className";
import SectionDescription from "@/components/sectionDescription/SectionDescription";

interface Props {
  who: Who;
}

interface Who {
  title: string;
  subtitle: string;
  description: string[];
  button: string;
}

const Who: React.FC<Props> = ({ who }: Props): JSX.Element => {
  return (
    <section
      id="Who"
      className={cn(
        "w-full h-screen flex flex-nowrap justify-evenly",
        classes.whoSection
      )}
    >
      <article
        className={cn(
          "flex flex-col justify-center items-center gap-5 w-[50vh] p-5 relative overflow-visible rounded-full"
        )}
      >
        <div
          className={cn(
            "absolute  w-full h-full overflow-visible my-auto rounded-full",
            classes.canvas
          )}
        >
          <Canvas
            camera={{ fov: 25, position: [5, 5, 5] }}
            style={{
              zIndex: 10,
              overflow: "visible",
              margin: "0 auto",
              borderRadius: "50%",
            }}
          >
            <OrbitControls enablePan={false} autoRotate enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
      </article>

      <article
        className={cn(
          "flex flex-col justify-center items-center max-w-[50vw] max-h-screen p-5 my-auto gap-1",
          classes.textContainer
        )}
      >
        <SectionDescription section={who} buttonLink="Work" />
      </article>
    </section>
  );
};

export default Who;
