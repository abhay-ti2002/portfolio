import React from "react";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="h-full bg-[#C9E6F0] dark:bg-slate-800" id="education">
      <div className="flex justify-center min-h-full items-center pt-5">
        <span>
          <img className="w-14 h-14 pr-2" src="/images/graduate.png" alt="" />
        </span>
        <h1 className="text-4xl font-sans font-bold dark:text-white">
          My <span className="text-orange-400">Education</span>
        </h1>
      </div>
      <p className="text-center text-lg font-sans dark:text-white">
        Education is not preparation for life; education is life itself.
      </p>
      <div className="flex flex-col justify-center min-h-full items-center mt-10">
        <Fade
          className="w-8/12 mb-10 flex rounded-md shadow-lg shadow-stone-400 bg-white"
          direction="down"
        >
          <div className="flex flex-col laptop:flex laptop:flex-row laptop:rounded-md">
            <div className="w-full laptop:w-4/12">
              <img
                src="/images/chandigarh.webp"
                alt=""
                className="w-72 h-40 object-cover rounded-md"
              />
            </div>
            <div className="mt-3 mb-3 ml-5 box-border">
              <h1 className="text-base laptop:text-2xl font-bold text-[#03346E]">
                Bachelor of Engineering in Computer Science and Engineering.
              </h1>
              <h2 className="text-lg">Chandigarh University,</h2>
              <h1 className="text-xl font-semibold text-orange-400">
                2022-2026 | Pursuing
              </h1>
            </div>
          </div>
        </Fade>
        <Fade
          className="border-2 border-solid w-8/12 mb-10 flex rounded-md bg-white shadow-lg shadow-stone-400"
          direction="down"
        >
          <div className="flex flex-col laptop:flex laptop:flex-row laptop:rounded-md">
            <div>
              <img
                className="w-[279px] h-40 object-cover rounded-md"
                src="/images/school.jpg"
                alt=""
              />
            </div>
            <div className="mt-6 mb-6 ml-5">
              <h1 className="text-base laptop:text-2xl font-bold text-[#03346E]">
                Physics, Chemistry, Mathematics (PCM)
              </h1>
              <h2 className="text-base laptop:text-lg">
                Government senior secondary school,Rajendra
                Marg,Bhilwara(Rajasthan)
              </h2>
              <h1 className="text-xl font-semibold text-orange-400">
                2020-2021 | Completed
              </h1>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Education;
