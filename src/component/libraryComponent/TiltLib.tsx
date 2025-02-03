import React from "react";
import Tilt from "react-parallax-tilt";
import { useDarkMode } from "../../utils/useDarkMode";

const TiltLib = () => {
  const { theme } = useDarkMode();
  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <Tilt className="rounded-full laptop:hover:shadow-white  laptop:hover:shadow-inner dark:shadow-white shadow-sm dark:backdrop-blur-sm ">
          <div className="w-48 h-48 laptop:w-80 laptop:h-80 laptop:rounded-full flex justify-center items-center laptop:box-border laptop:p-20 ">
            <img
              src="/images/avatar.png"
              alt=""
              className="w-24  laptop:w-60 transition-transform duration-300 active:scale-150 laptop:hover:scale-110 hover:ease-linear hover:drop-shadow-2xl "
            />
          </div>
        </Tilt>
      ) : (
        <Tilt className="rounded-full bg-slate-200 shadow-md hover:shadow-lg">
          <div className="w-48 h-48 laptop:w-80 laptop:h-80 laptop:rounded-full flex justify-center items-center laptop:box-border laptop:p-20 ">
            <img
              src="/images/avatar.png"
              alt="ProfileImage"
              loading="lazy" 
              className="w-24  laptop:w-60 transition-transform duration-300 active:scale-150 laptop:hover:scale-110 hover:ease-linear hover:drop-shadow-2xl "
            />
          </div>
        </Tilt>
      )}
    </div>
  );
};

export default TiltLib;
