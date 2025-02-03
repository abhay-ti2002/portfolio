import React from "react";
import projectInfo from "../utils/detailsforProject/projectDetails";

interface Props {
  id: number;
  name: string;
  image: string;
  stack: string[];
  description: string;
  KeyFeaturesImplemented: string[];
}

const ProjectCard = (props: Props) => {
  const { name, description, image, stack, KeyFeaturesImplemented, id } = props;
  // console.log(image);

  return (
    <div className="p-5 laptop:flex laptop:justify-center laptop:items-center">
      <div className="h-96 w-11/12  rounded-lg laptop:w-8/12 laptop:h-60 laptop:flex shadow-md shadow-white text-white bg-gradient-to-bl from-black box-border mb-3 dark:bg-gradient-to-bl dark:from-slate-400">
        <div className="laptop:w-4/12 p-2 flex justify-center items-center laptop:pl-4 laptop:pr-4 box-border transition delay-150 duration-200 ease-linear hover:translate-2 hover:scale-105">
          <img
            className=" w-96 rounded-md hover:shadow-xl hover:shadow-white shadow-md shadow-white"
            src={image}
            alt=""
          />
        </div>
        <div className="w-8/12 pr-4 pt-2 pl-4">
          <h1 className="font-sans font-bold text-2xl laptop:text-4xl mb-2">
            {name}
          </h1>
          <div className="laptop:block hidden">
            {stack.map((tech) => (
              <span
                key={Math.random()}
                className="bg-gradient-to-tr from-stone-900 mr-2 p-2 shadow-sm shadow-white text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="hidden text-sm mt-4 text-justify laptop:block">
            {description}
          </p>
          <div className="laptop:block hidden">
            {KeyFeaturesImplemented.map((feature) => (
              <span className="" key={Math.random()}>
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
