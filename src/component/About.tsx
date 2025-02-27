import React from "react";
import TiltAbout from "./libraryComponent/TiltAbout";
import { useDarkMode } from "../utils/useDarkMode";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const { theme } = useDarkMode();
  return (
    <div
      id="about"
      className="h-full overflow-hidden bg-stone-100 dark:bg-stone-900 text-center laptop:text-left"
    >
      <div className="flex flex-col justify-center items-center pt-10">
        <Fade direction="down" damping={2000}>
          {/* <div>
            <Dark />
          </div> */}
          <div className="flex">
            {theme === "dark" ? (
              <span>
                <img src="/images/boy.png" alt="" className="w-12" />
              </span>
            ) : (
              <span>
                <img src="/images/user.png" alt="" className="w-12" />
              </span>
            )}

            <span className=" font-bold text-2xl laptop:text-4xl pt-2 dark:text-orange-400">
              About <span className="text-orange-400 dark:text-white">Me</span>
            </span>
          </div>
          <div className=" flex flex-col min-h-full items-center justify-center p-5 laptop:p-10 laptop:flex-row">
            <div className=" p-10">
              <TiltAbout />
            </div>
            <div className="mb-20">
              <div className="pb-6">
                <h1 className="font-sans font-extrabold text-2xl dark:text-orange-400">
                  I'm Abhay
                </h1>
                <h2 className=" text-1xl font-semibold dark:text-orange-400">
                  Frontend Developer
                </h2>
              </div>
              <p className="text-justify font-serif dark:text-white text-sm laptop:text-base ">
                Welcome to my portfolio! I am a frontend developer dedicated to
                crafting seamless and engaging user experiences. Currently, I am
                pursuing my undergraduate degree in{" "}
                <b>Computer Science from Chandigarh University</b>.I am very
                passionate about improving my coding skills & developing
                applications & websites and have a strong focus on improving my
                skills through hands-on projects and learning. I enjoy solving
                problems, designing intuitive user interfaces, and exploring the
                latest technologies in web development. In my free time, you’ll
                find me working on frontend-developer clones, improving my
                coding proficiency, or brainstorming ideas for new projects.
                Let’s connect and create something amazing.
              </p>
              <h2 className="text-blue-400 font-bold mt-8 ">
                Email:{" "}
                <span className="text-black font-serif font-semibold dark:text-white">
                  abhi.tiwari2027@gmail.com
                </span>
              </h2>
              <h2 className="text-blue-400 font-bold mt-2 ">
                Place:{" "}
                <span className="text-black font-sans font-semibold dark:text-white">
                  Chandigarh, India-140301
                </span>
              </h2>
              <div>
                <a
                  href="https://drive.google.com/file/d/19laaEKq-KKeOAsYbiq08qPejobCTFREg/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex bg-blue-500 p-3 w-32 justify-center gap-1 rounded-md box-border shadow-md shadow-slate-800 mt-10 font-sans font-semibold dark:shadow-md dark:shadow-green-300 ">
                    RESUME{" "}
                    <span>
                      <img
                        className="w-5"
                        src="/images/resumeicon.png"
                        alt=""
                      />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
