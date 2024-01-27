import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "react-icons/fa6";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialMediaLinks = [
  { href: "https://twitter.com/_Shreyajha", icon: faTwitter },
  { href: "https://medium.com/@0shreyajha0", icon: faMedium },
  {
    href: "https://www.linkedin.com/in/shreya-jha-b166a1212/",
    icon: faLinkedin,
  },
  {
    href: "https://www.linkedin.com/in/shreya-jha-b166a1212/",
    icon: faLinkedin,
  },
  { href: "https://github.com/0shreyajha0", icon: faGithub },
  { href: "mailto:email@0shreyajha0@gmail.com", icon: faEnvelope },
];

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="max-w-2xl mx-auto text-center bg-opacity-70">
        <p className="font-bold text-grape text-4xl">Hello, I'm</p>
        <h1 className="text-7xl font-extrabold leading-tight my-5 text-black font-dancing-script">
          Shreya
        </h1>
        <p className="text-lg text-grape font-medium mb-7">
          A FRONTEND WEB DEVELOPER
        </p>
        <div className="flex space-x-4 justify-center">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grape hover:text-black"
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
