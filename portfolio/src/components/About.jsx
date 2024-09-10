import React from "react";
import img from "../assets/img.jpg";
import vertifiedBadge from '../assets/verified-badge.webp'

const About = () => {
  return (
    <section className="mt-8 flex flex-col gap-2 ">

      <div className="">
        <img className="shrink-0 w-[20%] rounded-[50%] xs:w-[10%]" src={img} alt="" />
      </div>

      <article className="flex flex-col gap-4 t text-muted-foreground text-md">
        <p className=" xs:text-white/85 font-semibold">
          Hey, <span className="font-semibold text-[#1a58b7]">Essuon</span> Here! 👋
          <br />
          I'm a Front-end Developer and I Create Web Development Content.
        </p>
         <p className="text-[#a1a1a1]">
          I help aspiring developers succeed in their web dev journey by sharing
          useful stuffs and lessons from my own experience.
        </p>

        <p className="text-[#a1a1a1]"> 
          I'm specialized in creating high quality websites and webapps that are
          not just visually appealing but also gives an awesome user experience.
        </p> 
      </article>
    </section>
  );
};

export default About;
