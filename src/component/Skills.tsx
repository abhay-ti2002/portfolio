import React from "react";
import SkillsIcon from "./SkillsIcon";
import { Fade } from "react-awesome-reveal";
const Skills = () => {
  return (
    <div
      id="skill"
      className="flex flex-col items-center h-full laptop:pb-20 dark:bg-black bg-[#F2F9FF]"
    >
      <div className="flex  justify-center w-52 pt-5 laptop:pt-14 ">
        <div className="">
          <img
            className="w-15 laptop:w-14 relative laptop:bottom-4 "
            src="/images/computer.png"
            alt=""
          />
        </div>
        <div className="w-80">
          <h1 className="flex  text-2xl laptop:text-4xl font-sans font-extrabold dark:text-white">
            Skills <span>&</span>
            <span className="text-orange-400">Abilities</span>
          </h1>
        </div>
      </div>
      <Fade direction="down">
        <div className=" flex justify-center mt-10">
          <SkillsIcon />
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
