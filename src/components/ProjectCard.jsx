import React from "react";

const ProjectCard = ({
  title,
  skills,
  about,
  learning,
  visitLink,
  sourceLink,
  trackLinkClick,
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10">
      <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
        <h3 className="text-[23px] font-archivo font-bold mb-2">{title}</h3>
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
            onClick={() => trackLinkClick(`${title} - Visit`)}
          >
            Visit
          </a>
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:opacity-60"
            onClick={() => trackLinkClick(`${title} - View Source`)}
          >
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
