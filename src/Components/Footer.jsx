import React from "react";
import linkedin from "../assets/linkedin1.svg";
import github from "../assets/github.svg";

const Footer = () => {
  return (
    <div className="homepage_footer_links w-full flex justify-center items-center">
      <div className="links flex items-center h-15 gap-3">
        <a href="https://www.linkedin.com/in/sai-raghu-kiran-avula-8a2598250/">
          <img src={linkedin} alt="" className="w-12 h-12 cursor-pointer" />
        </a>

        <a href="https://github.com/sairaghukiran14">
          <img src={github} alt="" className="w-10 h-10 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
