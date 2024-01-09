import React from "react";

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
          {projects.map(
            (
              { title, skills, about, learning, visitLink, sourceLink },
              index
            ) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10"
              >
                <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                  <h3 className="text-[23px] font-archivo font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-[13px] text-grape mb-2">{skills}</p>
                  <div className="flex flex-col justify-between">
                    <p className="text-base mb-4 font-medium">{about}</p>
                    <p className="text-base mb-4 font-medium">
                      <span className="font-bold">Learnings</span>: {learning}
                    </p>
                  </div>
                  <div className="flex gap-4 text-grape">
                    <a
                      href={visitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-60"
                    >
                      Visit
                    </a>
                    <a
                      href={sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-60"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
