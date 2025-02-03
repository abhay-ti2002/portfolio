import React from "react";
import Tilt from "react-parallax-tilt";

const TiltAbout = () => {
  return (
    <div className="w-60 h-96">
      <Tilt>
        <div className=" w-56 h-80 backdrop-brightness-200 hover:bg-pink-300 rounded-3xl shadow-lg shadow-stone-500 dark:shadow-inner dark:shadow-white">
          <div className="relative ">
            <img
              className="relative top-24 rounded-3xl object-scale-down"
              src="/images/abhayImage.png"
              alt=""
            />
          </div>
          <div className="w-56 h-80 absolute rounded-3xl -top-0 -right-0 -left-0  -bottom-0  bg-gray-700 opacity-45 hover:opacity-0 "></div>
        </div>
      </Tilt>
    </div>
  );
};

export default TiltAbout;
