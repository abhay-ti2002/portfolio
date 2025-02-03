import React, { createContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextType {
  theme: string;
  toggleTheme: () => void;
}

//generic
export const DarkModeContext = createContext<DarkModeContextType | null>(null);

// provider  component

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom Hook to Access Context
// export const useDarkMode = (): DarkModeContextType => {
//   const context = useContext(DarkModeContext);
//   if (!context) {
//     throw new Error("useDarkMode must be used within a DarkModeProvider");
//   }
//   return context;
// };
