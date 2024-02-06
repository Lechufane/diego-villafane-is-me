import cn from "@/utils/className";
import Img from "../Img/Img";
import { ScrollButton } from "../ui";

interface Props {
  section: Section;
  buttonLink: string;
}

interface Section {
  title: string;
  subtitle: string;
  description: string[];
  button: string;
}

const SectionDescription = ({ section, buttonLink }: Props) => {
  return (
    <>
      <h1 className="font-semibold font-fontOne text-7xl">{section.title}</h1>
      <div className={cn("self-center flex items-center justify-center gap-2")}>
        <Img
          className={cn("w-5 h-fit")}
          src="/icons/line.svg"
          alt="line"
          width={40}
          height={20}
        />
        <h2 className="text-[--secondary-color]">{section.subtitle}</h2>
      </div>
      {section.description.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
      <div className="relative self-center flex items-center justify-between gap-2">
        <ScrollButton
          link={`#${buttonLink}`}
          className="flex justify-center items-center z-30"
        >
          {section.button}
        </ScrollButton>
      </div>
    </>
  );
};

export default SectionDescription;
