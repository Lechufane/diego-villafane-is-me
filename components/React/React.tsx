import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactLogo } from "../animations";
import classes from "./React.module.css";
import cn from "@/utils/className";

interface Props {
  className?: string;
  selected: boolean;
}

const React: React.FC<Props> = ({ className, selected }: Props) => {
  return (
    <div className={cn(classes.workContainer, className)}>
      <Canvas
        style={{
          width: "100vw",
          height: "40vh",
          display: selected ? "block" : "none",
        }}
        camera={{ position: [3, 3, 3] }}
      >
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
    </div>
  );
};

export default React;
