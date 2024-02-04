import Image from "next/image";
import { ScrollButton } from "../ui";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Cube";
import classes from "./Who.module.css";
import cn from "@/utils/className";

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
    <section id="Who" className={cn(classes.whoSection)}>
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
          <h1>{who.title}</h1>
          <div className={classes.whoWeAre}>
            <Image
              className={classes.line}
              src="/icons/line.svg"
              alt="line"
              width={40}
              height={20}
            />
            <h2>{who.subtitle}</h2>
          </div>
          {who.description.map((item: string, index: number) => (
            <p key={index} className={classes.description}>
              {item}
            </p>
          ))}
          <div style={{ width: "100px" }}>
            <ScrollButton link="#Work">
              <span>{who.button}</span>
            </ScrollButton>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Who;
