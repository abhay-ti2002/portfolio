import React from "react";

import { useDarkMode } from "../utils/useDarkMode";

import useDraggable from "../utils/useDraggble";

const Dark = () => {
  const { toggleTheme } = useDarkMode();
  const { theme } = useDarkMode();

  useDraggable("draggable-button");

  return theme === "dark" ? (
    <div
      id="draggable-button"
      className="bottom-14 right-10 laptop:bottom-20 laptop:right-20 flex justify-center items-center bg-stone-100  rounded-full px-6 py-6 dark:shadow-md dark:shadow-slate-400 transition-all duration-300 hover:scale-125 fixed w-12 h-12 z-10"
      title="Drag button"
    >
      <button onClick={toggleTheme}>
        <h1 className="text-3xl animate-spin">🌞</h1>
      </button>
    </div>
  ) : (
    <div
      id="draggable-button"
      className="bottom-5 right-5 laptop:bottom-20 laptop:right-20 flex justify-center items-center bg-stone-100 rounded-full px-6 py-6 shadow-md shadow-green-300 transition-all duration-300 hover:scale-125 fixed w-12 h-12 z-10"
      title="Drag button"
    >
      <button onClick={toggleTheme}>
        <h1 className="text-3xl animate-bounce">🌚</h1>
      </button>
    </div>
  );
};

export default Dark;
