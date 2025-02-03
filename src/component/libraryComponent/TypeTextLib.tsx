import React from "react";
import Typed from "typed.js";
const TypeTextLib = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Computer Science Engineering",
        "Web developer",
        "Front-end web development",
      ],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="typed-text">
      <span ref={el} />
    </div>
  );
};

export default TypeTextLib;
