import React from "react";
import copy from "../assets/copy.gif";
const Homepage = () => {
  return (
    <div className="homepage_showcase_section flex items-center justify-center -mt-6 ">
      <div className="showcaseleft-top flex flex-col items-center justify-center gap-3  p-4 text-white rounded-lg w-[60%]">
        <h1 className="text-5xl font-semibold">
          Hello there👋! I'm Raghu Kiran
        </h1>
        <h1 className=" text-4xl bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent font-semibold tracking-wider text-center">
          Full Stack Developer
        </h1>
        <h2 className="text-sm text-center ">
          A Passionate Full Stack developer with a keen eye for design and a
          love for clean, efficient code, I specialize in bringing concepts to
          life through intuitive and responsive user interfaces with Proper
          Backend.
        </h2>
        <div
          className="copy text-sm p-4 
            py-3 text-blue-500 flex gap-2 cursor-pointer"
        >
          {" "}
          $ avulasairaghukiran1998@gmail.com{" "}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
