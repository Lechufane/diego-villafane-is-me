import { useState } from "react";
import Integrations from "../Integrations";
import Backend from "../Backend";
import Frontend from "../Frontend";
import Translation from "../Translation";
import React from "../React";
import WorkDescription from "../WorkDescription";
import WorkTitle from "../List";
import Img from "../Img/Img";
import arrowBack from "@/public/icons/arrow-back.svg";
import arrowForward from "@/public/icons/arrow-forward.svg";
import { ScrollButton } from "../ui";
import classes from "./Work.module.css";
import cn from "@/utils/className";

const DATA: Array<DataObject> = [
  {
    Component: React,
    name: "React",
    description: `My first experience with front-end web development was with React, I have used plain React, React Native, and NextJs, 
    I have experience with Redux, and Context to manage global state, fetch and axios to make requests, and react-router to manage routes (even though I prefer NextJs routing system). 
    And for styling I use CSS Modules, Tailwind, and Styled Components, MUI is an option too. This portfolio was created combining the power of custom hooks, NextJs, Tailwind, Typescript and the ThreeJs`,
  },
  {
    Component: Frontend,
    name: "Frontend",
    description: `For frontend development I have a clear vision for scafolding, I like to use NextJs for the power of server-side rendering, and the 
    simplicity of the routing system, I have coded PWA's using service workers, and created scalable forms using only react and javascript logic, 
    I have experience in FDD, TDD, and BDD, and creating smooth user interfaces with Figma's new developers mode. I know how to use developer tools and 
    how to optimize a website for performance, experience with Lighthouse, and overall SEO optimization. Besides I know how to use browsers API's like
    Storages, Geolocation, Notificatios, WebWorkers, and IndexedDB.`,
  },
  {
    Component: Backend,
    name: "Backend",
    description: `
    In the backend technologies I have experience with NodeJs, Nest, Express, and GOlang, having the ability to create RESTful API's, and microservice architectures,
    I also have experience with SQL queries, having used Postgres and MySql in previous projects. I know how to work with ORM's like TypeORM, Sequelize, and GORM.
    Besides languages and databases, I have experience with Docker, having the ability to dockerize a frontend application and to run a database in a container,
    so I can create a scalable and maintainable infrastructure. I have experience with CI/CD, and I have used Jenkins, and Github Actions to deploy applications 
    for me and for my team.`,
  },
  {
    Component: Integrations,
    name: "Integrations",
    description: `I have experience working with git as my version control system, having used bitbucket also. I have worked with Kanban and Scrum methodologies,
    having used the scrum poker system to measure user stories. I have a clear understanding of how to use Postman in order to test endpoints and standarize requests,
    I also am aware of the importance of documentation, and clean code, to make the codebase maintainable and scalable. Other tools I have used from a long time are
    Slack, Notion, Trello, and Jira. I really like to tackle use cases from a user perspective so I make sure to cover all the border cases, to make the user experience
    as smooth as possible.`,
  },
  {
    Component: Translation,
    name: "Translation",
    description: `Now one last thing about me as a professional, I'm an audiovisual translator, with experience doing translation for short films form 
    Buenos Aires, I like to mention this as English levels are very important for this line of work, and because I love working with movies, It's something
     I'd do for the love of it, I'm also a musician who likes every form of art as a way of expression, and I think that's something that makes me a better
      professional, because I have a clear understanding of the importance of the user experience, and the importance of the message we want to communicate.`,
  },
];

interface DataObject {
  Component: React.FC<Props>;
  name: string;
  description?: string;
}

interface Props {
  selected: boolean;
}

const Work: React.FC = () => {
  // create new state that is an ARRAY of React Components
  const [work, setWork] = useState<Array<DataObject>>(DATA);
  const [selectedWork, setSelectedWork] = useState<DataObject>(DATA[0]);

  const handleCarousel = (direction: string) => {
    const currentIndex = work.indexOf(selectedWork);
    switch (direction) {
      case "left":
        if (currentIndex === 0) {
          setSelectedWork(work[work.length - 1]);
        } else {
          setSelectedWork(work[currentIndex - 1]);
        }
        break;
      case "right":
        if (currentIndex === work.length - 1) {
          setSelectedWork(work[0]);
        } else {
          setSelectedWork(work[currentIndex + 1]);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section id="#Work" className={cn(classes.workSection, "p-12 h-screen")}>
        {work.map((Component, i) => {
          switch (selectedWork.name) {
            case Component.name:
              return (
                <div
                  key={i}
                  className={cn(
                    classes.workContainer,
                    "flex flex-col items-center justify-evenly w-full h-screen"
                  )}
                >
                  <div className="grid grid-cols-3 w-full h-[200px] justify-items-center items-center">
                    <Img
                      className="cursor-pointer hover:size-16"
                      src={arrowBack}
                      fallback={arrowBack}
                      alt="arrow-back"
                      width={50}
                      height={50}
                      onClick={() => handleCarousel("left")}
                    />

                    <WorkTitle text={Component.name} />
                    <Img
                      className="cursor-pointer hover:size-16"
                      src={arrowForward}
                      fallback={arrowForward}
                      alt="arrow-back"
                      width={50}
                      height={50}
                      onClick={() => handleCarousel("right")}
                    />
                  </div>
                  <Component.Component
                    key={i}
                    selected={selectedWork.name === Component.name}
                  />
                  <WorkDescription className="w-[90vw] h-full mb-40 p-8 m-8 rounded-md border-none bg-[#FFF] text-[--third-color] font-semibold text-[1.2rem] z-10">
                    <p className="text-[--third-color] font-semibold text-[1.2rem] z-15">
                      {selectedWork.description}
                    </p>
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                      <ScrollButton
                        link="#Contact"
                        className={classes.scrllBtn}
                      >
                        {"Let's work together!"}
                      </ScrollButton>
                    </div>
                  </WorkDescription>
                </div>
              );
            default:
              return null;
          }
        })}
      </section>
    </>
  );
};

export default Work;
