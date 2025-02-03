import React, { useState } from "react";
import { Link } from "react-scroll";
import HamburgerComponent from "./HamburgerComponent";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const logo = "{AT}";

  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <div className="flex pl-4 pr-4 justify-between bg-transparent backdrop-blur-md dark:bg-transparent dark:backdrop-blur-md  laptop:cursor-pointer  h-14 z-40 items-center laptop:pl-32 laptop:pr-32 fixed w-full top-0 left-0 right-0 bottom-0  box-border shadow-md shadow-gray-300 bg-white dark:bg-black dark:text-white  dark:shadow-gray-600">
      <div className="text-lg font-extrabold text-right tablet:cursor-pointer laptop:cursor-pointer laptop:font-extrabold laptop:pt-6 laptop:text-3xl laptop:font-mono laptop:hover:duration-75  laptop:hover:text-orange-400 animate-bounce laptop:hover:transition laptop:hover:ease-linear ">
        <div>
          {logo}
          <span className="text-sm laptop:text-xl tablet:text-xl">Abhay</span>
        </div>
      </div>
      <div className=" hidden laptop:block laptop: w-6/12 laptop:justify-evenly laptop:items-center tablet:hidden">
        <ul className="flex flex-row gap-6 font-bold font-mono text-lg">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100">
              Home
            </li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100">
              About
            </li>
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100">
              Skill
            </li>
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100">
              Education
            </li>
          </Link>

          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100">
              Project
            </li>
          </Link>
        </ul>
      </div>
      <div className="w-7 tablet:w-10 laptop:hidden tablet:block box-border ">
        <div>
          <button
            className="w-8 h-8"
            onClick={() =>
              !navToggle ? setNavToggle(true) : setNavToggle(false)
            }
          >
            {
              <svg
                className="dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  stroke="none"
                  d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0 -16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0 -16-16zM58.6 224h394.7c34.6 0 54.6-43.9 34.8-75.9C448 83.2 359.6 32.1 256 32c-103.5 .1-192 51.2-232.2 116.1C4 180.1 24.1 224 58.6 224zM384 112a16 16 0 1 1 -16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1 -16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1 -16 16 16 16 0 0 1 16-16z"
                />
              </svg>
            }
          </button>
        </div>

        {navToggle ? <HamburgerComponent /> : <></>}
      </div>
    </div>
  );
};

export default Header;
