import React, { useEffect, useState } from "react";
import Particle from "./libraryComponent/Particle";
import TypeTextLib from "./libraryComponent/TypeTextLib";
import TiltLib from "./libraryComponent/TiltLib";
import { useDarkMode } from "../utils/useDarkMode";
import Dark from "./Dark";
import DarkModeParticle from "./libraryComponent/DarkModeParticle";

const Home = () => {
  const { theme } = useDarkMode();

  return (
    <div
      id="home"
      className="laptop:mt-12 h-screen w-full overflow-hidden flex laptop:justify-center  items-center dark:bg-black"
    >
      <div>
        <Dark />
      </div>
      <div className="flex-col flex laptop:flex-row mb-20 laptop:justify-between absolute w-full h-1/4 box-border laptop:w-9/12 laptop:h-3/4">
        <div className="tablet:block laptop:hidden flex justify-center">
          <TiltLib />
        </div>
        <div className="flex flex-col laptop:justify-center  w-full mx-0 my-auto p-11">
          <div>
            <h1 className="laptop:text-6xl laptop:mb-4  font-bold text-blue-900 text-md leading-7">
              Hi There,
            </h1>
            <h1 className="text-2xl laptop:text-5xl laptop:mb-4  font-bold text-blue-900 dark:">
              I'm Abhay <span className="text-orange-500">Tiwari</span>
            </h1>
          </div>
          <div className="c font-bold text-xl laptop:text-3xl flex gap-3  justify-start mt-1">
            <span className="hidden laptop:block dark:text-white">
              I Am Into{" "}
            </span>
            <TypeTextLib />
          </div>
        </div>
        <div className="hidden laptop:block laptop:pt-20">
          <TiltLib />
        </div>
      </div>
      <div className="h-full laptop:block laptop:w-full">
        {theme === "dark" ? <DarkModeParticle /> : <Particle />}
      </div>
      <div className="h-full laptop:hidden  block laptop:w-full">
        {theme === "dark" ? <DarkModeParticle /> : <Particle />}
      </div>
    </div>
  );
};

export default Home;
