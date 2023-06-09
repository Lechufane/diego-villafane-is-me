import React, { useState } from "react";
import classes from "./Work.module.css";
import List from "../List/List";
import Integrations from "../Integrations/Integrations";
import Backend from "../Backend/Backend";
import FrontEnd from "../Frontend/FrontEnd";
import Translation from "../Translation/Translation";
import WebDevelopment from "../WebDevelopment/WebDevelopment";

const DATA: Array<string> = [
  "Web Development",
  "Integrations",
  "Backend",
  "Frontend",
  "Translation",
];

const Work: React.FC = () => {
  const [work, setWork] = useState<string>(DATA[0]);

  // console.log("TRABAJO", work);

  return (
    <section id="#Work" className={classes.workSection}>
      <article className={classes.workContainer}>
        <div className={classes.left}>
          <List setWork={setWork} list={DATA}></List>
        </div>
        <div className={classes.right}>
          {work == "Web Development" ? (
            <WebDevelopment />
          ) : work == "Integrations" ? (
            <Integrations />
          ) : work == "Backend" ? (
            <Backend />
          ) : work == "Frontend" ? (
            <FrontEnd />
          ) : work == "Translation" ? (
            <Translation />
          ) : null}
        </div>
      </article>
    </section>
  );
};

export default Work;
