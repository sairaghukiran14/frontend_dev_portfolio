import React from "react";
import sumzai from "../assets/aisummariserwebsite.png";
import rayban from "../assets/raybanwebsite.png";
import produx from "../assets/produxwebsite.png";
import arrow from "../assets/arrow.gif";
const Projects = () => {
  return (
    <div className="projects_section flex flex-wrap justify-around">
      <div className="individual_project w-96 bg-slate-100 rounded flex flex-col justify-between">
        <img src={sumzai} alt="" className="rounded" />
        <div className="project_description p-3">
          <div className="project_title font-semibold">
            Article Summariser (Responsive)
          </div>

          <ul className="flex gap-2 flex-wrap mt-3">
            <li className="bg-red-400 text-white p-2 px-4 text-sm rounded-lg">
              ReactJs
            </li>
            <li className="bg-blue-400 text-white p-2 px-4 text-sm rounded-lg">
              TailwindCss
            </li>
            <li className="bg-orange-400 text-white p-2 px-4 text-sm rounded-lg">
              ArticleSummariser API
            </li>
          </ul>
        </div>
        <div
          className="open_link text-center mt-2 text-white bg-black p-2 rounded cursor-pointer"
          onClick={() => {
            window.open(
              "https://articlesummarizerusing-ai.vercel.app/",
              "_blank"
            );
          }}
        >
          Deployment Link
        </div>
      </div>
      <div className="individual_project w-96 bg-slate-100 rounded flex flex-col justify-between">
        <img src={rayban} alt="" className="rounded" />
        <div className="project_description p-3">
          <div className="project_title font-semibold">
            Rayban Landing Page Using GSAP and Shery.js
          </div>

          <ul className="flex gap-2 flex-wrap mt-3">
            <li className="bg-red-400 text-white p-2 px-4 text-sm rounded-lg">
              Javascript
            </li>
            <li className="bg-blue-400 text-white p-2 px-4 text-sm rounded-lg">
              GSAP
            </li>
            <li className="bg-orange-400 text-white p-2 px-4 text-sm rounded-lg">
              Shery.js
            </li>
          </ul>
        </div>
        <div
          className="open_link text-center mt-2 text-white bg-black p-2 rounded cursor-pointer"
          onClick={() => {
            window.open("https://sheryjsanimatedwebsite.vercel.app/", "_blank");
          }}
        >
          Deployment Link
        </div>
      </div>
      <div className="individual_project w-96 bg-slate-100 rounded flex flex-col justify-between">
        <img src={produx} alt="" className="rounded" />
        <div className="project_description p-3">
          <div className="project_title font-semibold">
            Produx Ecommerce Website
          </div>

          <ul className="flex gap-2 flex-wrap mt-3">
            <li className="bg-purple-400 text-white p-2 px-4 text-sm rounded-lg">
              ReactJs
            </li>
            <li className="bg-blue-400 text-white p-2 px-4 text-sm rounded-lg">
              TailwindCss
            </li>
            <li className="bg-orange-400 text-white p-2 px-4 text-sm rounded-lg">
              ContextAPI
            </li>
          </ul>
        </div>
        <div
          className="open_link text-center mt-2 text-white bg-black p-2 rounded cursor-pointer"
          onClick={() => {
            window.open("https://produxecomm.vercel.app/", "_blank");
          }}
        >
          Deployment Link
        </div>
      </div>
    </div>
  );
};

export default Projects;
