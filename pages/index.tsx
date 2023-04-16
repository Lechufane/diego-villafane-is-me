import { Inter } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Who from "@/components/Who/Who";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import classes from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={classes.container}>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </div>
  );
}
