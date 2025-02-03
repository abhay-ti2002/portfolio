import React from "react";
import ProjectCard from "./ProjectCard";
import projectInfo from "../utils/detailsforProject/projectDetails";
import { Fade } from "react-awesome-reveal";
import { useDarkMode } from "../utils/useDarkMode";

const Project = () => {
  const { theme } = useDarkMode();
  return (
    <div id="project" className="pb-20 pl-6 dark:bg-black">
      <div className="flex justify-center items-center pt-8 mb-14">
        {theme === "light" ? (
          <img className="w-20" src="/images/projectIcon.png" alt="logo" />
        ) : (
          <img className="w-20" src="/images/darkProjectIcon.png" alt="logo" />
        )}
        <h1 className="font-bold font-sans text-4xl dark:text-white">
          MY <span className="text-orange-400">Project</span>
        </h1>
      </div>
      <div>
        {projectInfo.map((info) => (
          <div key={Math.random()}>
            <Fade direction="down">
              <ProjectCard
                key={Math.random()}
                id={info.id}
                name={info.name}
                image={info.image}
                stack={info.stack}
                description={info.description}
                KeyFeaturesImplemented={info.KeyFeaturesImplemented}
              />
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
