import React from "react";
import ReactGA from "react-ga";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "To-DO App",
      skills: "React| JavaScript | HTML | SCSS | Figma",
      about: "web application to manage your to do list.",
      learning:
        "Learned how to use local storage of browser,Gained proficiency in crafting precise code from Figma designs, ensuring consistency across layouts and components.",
      visitLink: "https://to-do-app-three-orcin.vercel.app/",
      sourceLink: "https://github.com/0shreyajha0/ToDoApp",
    },
    {
      title: "KanBan-Board",
      skills: "HTML | CSS | Javascript | React | API ",
      about:
        "An e-platform to manage the ticktes asiigned in an organistaion, with functions like priority, status, assigned to whom etc.",
      learning:
        "Acquired React skills, learnt components organization, effectively utilized multiple hooks, and refined API call orchestration.",
      visitLink: "https://kanban-board-omega-beige.vercel.app",
      sourceLink: "https://github.com/0shreyajha0/KanBan-board",
    },
    {
      title: "NotePad",
      skills: "TypeScript| JavaScript | HTML | SCSS | API",
      about:
        "Web application to work as a notepad uses local storage of browser to save data.",
      learning:
        "Gained proficiency in developing precise code with Angular, ensuring consistency across components.",
      visitLink: "working on it ",
      sourceLink: "https://github.com/0shreyajha0/Notepad-angular",
    },
    {
      title: "HealthCheck",
      skills: "HTML | CSS | Javascript | React",
      about:
        "Web application to manager user's health uses local storage of browser to save data.",
      learning:
        "Gained proficiency in developing precise code with JavaScript, ensuring consistency across components.",
      visitLink: "working on it ",
      sourceLink: "https://github.com/0shreyajha0/HealthCheck",
    },
    {
      title: "Currency-Converter",
      skills: "Angular| JavaScript | BootStrap | HTML | SCSS | API",
      about: "A Web-Application to change the currency from one unit to other",
      learning: "To implement API into web application",
      visitLink: "https://currency-convertor-chi-opal.vercel.app/",
      sourceLink: "https://github.com/0shreyajha0/currency-convertor",
    },
    {
      title: "TackleTeam",
      skills: "HTML | CSS | Javascript",
      about:
        "Created BuzzShare, a dynamic social media web-app with login/signup and personalized profiles and posts.",
      learning:
        "Developed proficiency in writing optimized code and implementing aesthetically pleasing color schemes.",
      visitLink: "https://buzz-share.vercel.app",
      sourceLink: "https://github.com/0shreyajha0/TackleTeam",
    },
    {
      title: "Portfolio",
      skills: "HTML | CSS | Figma",
      about:
        "A simple website showing my portfolio as a Environmental Engineer, meticulously designed with Figma styles.",
      learning:
        "Acquired the skill of writing pixel-perfect code based on Figma design files.",
      visitLink: "https://shreyaportfoliohtml.vercel.app/",
      sourceLink: "https://github.com/0shreyajha0/portfolio",
    },
    {
      title: "College Event Management",
      skills: "HTML | CSS | Javascript | PHP ",
      about:
        "Database Management project to organise and manage details of event happening in college",
      learning:
        "Developed proficiency in utilizing Tailwind CSS, refining skills in creating responsive web designs.",
      visitLink: "college-event-managment.vercel.app",
      sourceLink: "https://github.com/0shreyajha0/CollegeEventManagment",
    },
  ];

  const trackLinkClick = (label) => {
    ReactGA.event({
      category: "Project Link Click",
      action: `User clicked the project link: ${label}`,
    });
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-blue-purple to-queen-pink p-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">
          PROJECTS
        </h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              skills={project.skills}
              about={project.about}
              learning={project.learning}
              visitLink={project.visitLink}
              sourceLink={project.sourceLink}
              trackLinkClick={trackLinkClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
