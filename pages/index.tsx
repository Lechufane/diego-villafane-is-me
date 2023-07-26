import Hero from "@/components/Hero";
import Who from "@/components/Who";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import classes from "@/styles/Home.module.css";

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
