import React, { useState } from "react";
import classes from "./Work.module.css";
import List from "../List/List";
import WebDevelopment from "../animations/WebDevelopment";
import Integrations from "../animations/Integrations";
import SocialMedia from "../animations/SocialMedia";
import Translation from "../animations/Translation";
import Backend from "../animations/Backend";

const DATA: Array<string> = [
  "Web Development",
  "Integrations",
  "Social Media",
  "Translation",
  "Backend",
];

const Work: React.FC = () => {
  const [work, setWork] = useState<string | null>(null);

  return (
    <section className={classes.workSection}>
      <article className={classes.workContainer}>
        <div className={classes.left}>
          <List setWork={setWork} list={DATA}></List>
        </div>
        <div className={classes.right}>
          {work == "Web Development" ? (
            <WebDevelopment />
          ) : work == "Integrations" ? (
            <Integrations />
          ) : work == "Social Media" ? (
            <SocialMedia />
          ) : work == "Translation" ? (
            <Translation />
          ) : work == "Backend" ? (
            <Backend />
          ) : null}
        </div>
      </article>
    </section>
  );
};

export default Work;
