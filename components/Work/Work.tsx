import React, { useState } from "react";
import classes from "./Work.module.css";
import List from "../List/List";
import Integrations from "../Integrations/Integrations";
import Backend from "../Backend/Backend";
import FrontEnd from "../SocialMedia/FrontEnd";
import Translation from "../Translation/Translation";
import WebDevelopment from "../WebDevelopment/WebDevelopment";

const DATA: Array<string> = [
  "Web Development",
  "Integrations",
  "Frontend",
  "Translation",
  "Backend",
];

const Work: React.FC = () => {
  const [work, setWork] = useState<string>(DATA[0]);

  // console.log("TRABAJO", work);

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
          ) : work == "Frontend" ? (
            <FrontEnd />
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
