import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Project from "./component/Project";
import { DarkModeProvider } from "./component/DarkModeContext";
const App = () => {
  return (
    <DarkModeProvider>
      <div className="-mt-20">
        <header>
          <Header />
        </header>
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Project />
        </section>
      </div>
    </DarkModeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
