import React from "react";
import { Link } from "react-scroll";
const HamburgerComponent = () => {
  return (
    <div className="mr-0 w-80 absolute left-14 top-10 text-right box-border backdrop-blur-md pl-12 pr-4 h-screen bg-slate-300/30 overflow-hidden  shadow-sm shadow-slate-200">
      <nav className="pr-2 bg-transparent">
        <ul className="flex flex-col font-bold font-mono text-4xl">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li
              key={"home"}
              className="text-blue-700 dark:text-white  underline underline-offset-8 decoration-3 mb-10"
            >
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
            <li
              key={"about"}
              className="hover:text-blue-700 dark:text-white mb-10 hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100"
            >
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
            <li
              key={"skill"}
              className="hover:text-blue-700 dark:text-white  mb-10 hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100"
            >
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
            <li
              key={"education"}
              className="hover:text-blue-700 mb-10 dark:text-white  hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100"
            >
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
            <li
              key={"project"}
              className="hover:text-blue-700 mb-10 dark:text-white  hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100"
            >
              Project
            </li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li
              key={"contact"}
              className="hover:text-blue-700 dark:text-white  mb-10 hover:underline hover:underline-offset-8 hover:decoration-3 hover:transition hover:ease-linear hover:translate-x-1 hover:delay-100 hover:duration-100"
            >
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerComponent;
