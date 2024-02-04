import Integrations from "@/components/Integrations";
import Backend from "@/components/Backend";
import Frontend from "@/components/Frontend";
import Translation from "@/components/Translation";
import React from "@/components/React";

export const data = {
  EN: {
    navbar: {
      links: {
        home: "Home",
        who: "Who",
        work: "Work",
        contact: "Contact",
      },
      button: "Hire now!",
    },
    hero: {
      title: "Create, Resolve, Make",
      subtitle: "what do I do?",
      description: [
        "I work with front-end technologies like React, or NextJS but I've also worked with backend technologies like Express, NodeJS, Postgress, MySQL, and GoLang(Go) as well as Typescript in both cases.",
        "My dream is to learn all I can to be able to succeed in any project I'm involved in, and to be able to help others to achieve their goals. I'd really like to work with videogames and cybersecurity, but I'm open to any project that I can learn from.",
        "This entire portfolio was made with NextJS, Typescript, ThreeJS, used to be made on CSS Modules, but It was refactored to Tailwind. All this technologies have been adopted as I learn them, and I'm always looking for new technologies to learn and implement.",
      ],
      button: "Learn more",
    },
    who: {
      title: "Think outside the box!",
      subtitle: "Who am I?",
      description: [
        "I'm a full-stack developer based in Argentina, with working experience both on front-end development and backend development, professional english proficiency, and a passion for learning new technologies and languages, lately I've been learning GoLang(Go) and Typescript, as well as Tailwind for CSS and NextJS, framework.",
        "My dream is to work while I travel, to be able to know the world and learn from it, I wan't to help any place I work for to create engaging and interesting projects, while I get to achieve my own goals and dreams.",
        "As of now I'm working on a sofwtare studio helping people who want to create their own business, or improve their current one, I'm also studying to get my degree on cybersecurity, and experimenting with Docker and Jenkins.",
      ],
      button: "Check my work",
    },
    work: [
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
    ],
    contact: {
      title: "Contact me!",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      button: "Send",
      mapMessage: "You can find me here!",
    },
  },
};
