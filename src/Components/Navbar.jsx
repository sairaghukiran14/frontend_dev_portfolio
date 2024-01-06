import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="homepage_nav flex justify-between items-center py-2 px-4">
      <div className="leftnav flex justify-between items-center gap-2">
        <div className="circle w-5 h-5 bg-blue-500 rounded-full"></div>
        <div className="logo_name font-semibold text-xl text-white">asrk</div>
      </div>

      <div className="midnav flex gap-6 items-center ">
        <div className="home text-white cursor-pointer">
          <Link to="/">Home</Link>
        </div>

        <div className="about text-white cursor-pointer">
          <Link to="/aboutme">About me</Link>
        </div>
        <div className="projects text-white cursor-pointer">
          <Link to="/projects">Projects</Link>
        </div>
      </div>
      <div className="rightnav flex items-center gap-3 font-semibold">
        <button
          color="primary"
          className="text-white font-semibold bg-blue-600 p-2 px-4 rounded-xl text-sm hover:bg-blue-500"
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
