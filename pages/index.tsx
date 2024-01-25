import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Who from "@/components/Who";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import DataServices from "@/services/dataService";
import classes from "@/styles/Home.module.css";
import Background from "@/components/Background/Background";

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
  who: {
    title: string;
    subtitle: string;
    description: string[];
    button: string;
  };
}

export default function Home() {
  const [data, setData] = useState<Data>({
    navbar: {
      links: {},
      button: "",
    },
    hero: {
      title: "",
      subtitle: "",
      description: [],
      button: "",
    },
    who: {
      title: "",
      subtitle: "",
      description: [],
      button: "",
    },
  });

  useEffect(() => {
    const { ok, data } = DataServices.getData();
    if (ok) setData(data);
  }, []);

  return (
    <div className={classes.body}>
      <Background>
        <div className="z-10 relative">
          <Hero
            data={{
              navbar: data.navbar,
              hero: data.hero,
            }}
          />
          <Who data={{ who: data.who }} />
          <Contact />
          {/* 
      <Work />
     */}
        </div>
      </Background>
    </div>
  );
}
