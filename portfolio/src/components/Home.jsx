import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import rcc from "../assets/rcc-project.png";
import amazon from "../assets/amazon-project.png";

import Stack from "./Stack";
import Profile from "./Profile";
import Banner from "./Banner";

const Home = () => {



  const projects = [
    {
      img: rcc,
      name: "RuralCodeCamp",
      detail:
        " Rural Code Camp a Non Profit Organisation based in Ghana , empowering kids and youth in Rural communities with Digital literacy. Join us in our journey to create a digitally inclusive society where every child has access to technology and coding education.",
      area: "Design & Development",
      gitSvg: 
        <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 496 512"
        class="w-6 h-6"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
      </svg>
      ,
      gitSource: '',
      demoPreview: 'https://ruralcodecamp.netlify.app/',
      stack: {
        react: "ReactJs",
        tl: "TailwindCss",
        js: "JavaScript",
      },
    },
    {
      img: amazon,
      name: "AmazonClone",
      detail:'A Vanilla JS Project that I have built to deepen my knowledge about HTML, CSS and more importantly JavaScript concept like DOM manipulation, array, locale storage and more. How to work with external libraries.Features like date of shipping etc...',
      area: "Design & Development",
      gitSvg: 
      <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 496 512"
      class="w-6 h-6"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
    ,
    gitSource: 'https://github.com/emess2g/Amazon-Project',
    demoPreview: 'https://emessamazon.netlify.app',
      stack: {
        react: "Vanilla JavaScript",
        tl: "Css",
        js: "Html",
      },
    },
  ];
  
  return (
    <div>
      {/* profile */}
       <Profile/>

      {/* projects */}

      <section className="my-8">
        <header className="flex justify-between items-center mb-5">
          <h1 className="text-white text-xl font-semibold opacity-95">Projects</h1>
          {/* <Link to='/projects' className="flex border text-sm text-[#a1a1aa] font-semibold bg-[#212121] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-[#1a58b7] group p-2 xl:p-2 xl:px-4 xs:w-fit items-center gap-2 bg-card rounded-md">
            <p>View all</p>
             <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 group-hover:translate-x-1 duration-200"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
             </span>
          </Link> */}
        </header>

        <div to="" className="  grid  xl:grid-cols-2 gap-6 relative">
          {projects.map((project, i) => {
            return (
              <Link to={project.demoPreview} className="] xs:w-[50%] p-2 rounded-xl bg- hover:bg-[#12100E]">
                <div className="bg-[#212121] rounded-xl p-8  w-[%]">
                  <img src={project.img} className="" alt="Rcc project img" />
                </div>

                <div className="flex flex-col gap">
                  <span className=" text-[12px] mt-2 text-[#a1a1aa]">
                    {project.area}
                  </span>
                  <div className="flex gap-2">
                  <h1 className="text-[1.125rem] mb-1">{project.name}</h1>
                  <Link to={project.gitSource}>{project.gitSvg}</Link>
                  </div>
                  <p className="text-[#a1a1aa] mb-2 text-[.875rem]">
                    {project.detail}
                  </p>
                  <div className="mt-auto items-start p-0 flex flex-col ">
                    <ul className="flex gap-1 flex-wrap">
                      <div
                        class="inline-flex items-center border 
                             px-2.5 py-0.5 text-xs font-semibold bg-[#212121]
                             focus:outline-none focus:ring-2 focus:ring-ring 
                             focus:ring-offset-2 border-transparent hover:bg-[#1A58B7]
                             text-white/80 rounded-md"
                      >
                        {project.stack.react}
                      </div>

                      <div
                        class="inline-flex items-center border 
                             px-2.5 py-0.5 text-xs font-semibold bg-[#212121]
                             focus:outline-none focus:ring-2 focus:ring-ring 
                             focus:ring-offset-2 border-transparent hover:bg-[#1A58B7]
                             text-white/80 rounded-md"
                      >
                        {project.stack.tl}
                      </div>

                      <div
                        class="inline-flex items-center border 
                             px-2.5 py-0.5 text-xs font-semibold bg-[#212121]
                             focus:outline-none focus:ring-2 focus:ring-ring 
                             focus:ring-offset-2 border-transparent hover:bg-[#1A58B7]
                             text-white/80 rounded-md"
                      >
                        {project.stack.js}
                      </div>
                    </ul>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      
      {/* stack */}

      <Stack/>

      {/* about */}
      <About/>

     {/* banner */}
     <Banner/>
    </div>
  );
};

export default Home;
