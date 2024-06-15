import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.png";
import js from "../assets/js.svg";
import react_logo from "../assets/react.png";
import nodejs from "../assets/nodejs.svg";
import expressjs from "../assets/express.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.svg";
import tailwind from "../assets/tailwindcss.svg";
import redux_logo from "../assets/redux.svg";
import figma from "../assets/figma.svg";
import guvi_logo from "../assets/guvi_logo.png";
const Aboutme = () => {
  return (
    <div className="aboutme_section flex flex-col gap-3 justify-center items-center">
      <div className="top_section flex flex-col justify-center items-center gap-3">
        <div className="aboutme_info bg-white rounded-xl p-4 text-xl w-[60%]">
          "Hi there👋! I'm Raghu, a fullstack web developer driven by a love ❤️
          for creating captivating digital experiences. With a focus on CSS, and
          JavaScript, ReactJs, TailwindCss, ExpressJs , MongoDB , Figma. I shape
          designs into user-friendly interfaces.I have done Internship and
          provided my services to a startup.I enjoy crafting intuitive web
          solutions that merge aesthetics with functionality. Let's build
          something amazing together!"
        </div>
        <div className="skills_section flex flex-wrap gap-2">
          <img
            src={html}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
          <img src={css} alt="" className="bg-white w-10 h-10 rounded-xl p-1" />
          <img src={js} alt="" className="bg-white w-10 h-10 rounded-xl p-1" />
          <img
            src={react_logo}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
          <img
            src={redux_logo}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
          <img
            src={nodejs}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
          <img
            src={expressjs}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
          <img
            src={mysql}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
          <img
            src={tailwind}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
          <img
            src={mongodb}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
          <img
            src={figma}
            alt=""
            className="bg-white w-10 h-10 rounded-xl p-1"
          />
        </div>
      </div>
      <div className="bottom_section mt-3">
        <div className="heading mt-3 text-xl font-semibold text-white text-center">
          Certifications :
        </div>
        <div className="certificates flex gap-3 flex-wrap">
          <div
            className="individual_certificate relative rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer bg-white w-36 h-36"
            onClick={() => {
              window.open(
                "https://www.guvi.in/certificate?id=1M9078DY64553A8cmI",
                "_blank"
              );
            }}
          >
            <img src={guvi_logo} alt="" className="rounded-xl" />
            <div className="absolute link bg-black rounded-xl p-2 text-white text-2xl opacity-60 w-full h-full font-semibold flex justify-center items-center text-center ">
              HTML
            </div>
          </div>
          <div
            className="individual_certificate relative rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer bg-white w-36 h-36"
            onClick={() => {
              window.open(
                "https://www.guvi.in/certificate?id=07Hu49W4S58168MB05",

                "_blank"
              );
            }}
          >
            <img src={guvi_logo} alt="" className="rounded-xl" />
            <div className="absolute link bg-black rounded-xl p-2 text-white text-2xl opacity-60 w-full h-full font-semibold flex justify-center items-center text-center ">
              CSS
            </div>
          </div>
          <div
            className="individual_certificate relative rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer bg-white w-36 h-36"
            onClick={() => {
              window.open(
                "https://www.guvi.in/certificate?id=8581ea79U0657qi4r8",
                "_blank"
              );
            }}
          >
            <img src={guvi_logo} alt="" className="rounded-xl" />
            <div className="absolute link bg-black rounded-xl p-2 text-white text-2xl opacity-60 w-full h-full font-semibold flex justify-center items-center text-center ">
              Javascript
            </div>
          </div>
          <div
            className="individual_certificate relative rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer bg-white w-36 h-36"
            onClick={() => {
              window.open(
                "https://www.guvi.in/certificate?id=A88J14B9531S60257H",
                "_blank"
              );
            }}
          >
            <img src={guvi_logo} alt="" className="rounded-xl" />
            <div className="absolute link bg-black rounded-xl p-2 text-white text-2xl opacity-60 w-full h-full font-semibold flex justify-center items-center text-center ">
              React
            </div>
          </div>
          <div
            className="individual_certificate relative rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer bg-white w-36 h-36"
            onClick={() => {
              window.open(
                "https://www.guvi.in/certificate?id=17yIDxTB5We6059488",
                "_blank"
              );
            }}
          >
            <img src={guvi_logo} alt="" className="rounded-xl" />
            <div className="absolute link bg-black rounded-xl p-2 text-white text-2xl opacity-60 w-full h-full font-semibold flex justify-center items-center text-center ">
              Nodejs
            </div>
          </div>
          <div
            className="individual_certificate relative rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer bg-white w-36 h-36"
            onClick={() => {
              window.open(
                "https://www.guvi.in/certificate?id=m525bi7k016G98X48U",
                "_blank"
              );
            }}
          >
            <img src={guvi_logo} alt="" className="rounded-xl" />
            <div className="absolute link bg-black rounded-xl p-2 text-white text-2xl opacity-60 w-full h-full font-semibold flex justify-center items-center text-center ">
              MySQl
            </div>
          </div>
          <div
            className="individual_certificate relative rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer bg-white w-36 h-36"
            onClick={() => {
              window.open(
                "https://www.guvi.in/certificate?id=085yc47e619df5W5p8",
                "_blank"
              );
            }}
          >
            <img src={guvi_logo} alt="" className="rounded-xl" />
            <div className="absolute link bg-black rounded-xl p-2 text-white text-2xl opacity-60 w-full h-full font-semibold flex justify-center items-center text-center ">
              MongoDB
            </div>
          </div>
          <div
            className="individual_certificate relative rounded-xl p-2 flex flex-col justify-center items-center  bg-white w-36 h-36 cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.guvi.in/certificate?id=651348881nsJ90r57f",
                "_blank"
              );
            }}
          >
            <img src={guvi_logo} alt="" className="rounded-xl" />
            <div className="absolute link bg-black rounded-xl p-2 text-white text-2xl opacity-60 w-full h-full font-semibold flex justify-center items-center text-center ">
              FSD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
