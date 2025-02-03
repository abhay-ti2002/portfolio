import React, { useContext } from "react";
import { DarkModeContext } from "../component/DarkModeContext";
// Custom Hook to Access Context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
