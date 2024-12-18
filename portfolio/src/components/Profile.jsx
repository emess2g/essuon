import React from 'react'
import { Link } from 'react-router-dom';
import img from "../assets/img.jpg";
import vertifiedBadge from '../assets/verified-badge.webp'

const Profile = () => {

  return (
    <section>
    <main className="mt-6 flex flex-col"  >
    <div className="">
     <div className="">
       <img className="shrink-0 w-[20%] rounded-[50%] xs:w-[10%]" src={img} alt="" />
     </div>
     <div className="flex mt-4 text-white items-center gap-18">
       <div className="flex gap-2">
           <h1 className="text-[20px] text-nowrap font-semibold xs:text-2xl">Essuon Emmanuel</h1>
             {/* social icons */}
       <div className="flex items-center gap-1">
     <img src={vertifiedBadge} className="w-[12%]" alt="" /> 

     <Link to='https://www.linkedin.com/in/essuon-emmanuel-0b027a208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>  
     <svg
       stroke="currentColor"
       fill="currentColor"
       stroke-width="0"
       viewBox="0 0 448 512"
       class="w-6 h-6"
       height="1em"
       width="1em"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
     </svg>
     </Link>     

      <Link to='https://x.com/emessCodes'>
      <svg
       stroke="currentColor"
       fill="currentColor"
       stroke-width="0"
       viewBox="0 0 448 512"
       class="w-6 h-6"
       height="1em"
       width="1em"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
     </svg>
      </Link>

     <Link to='https://github.com/emess2g'>
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
     </Link>
     <Link to='mailto:@essuonemma84@gmail.com'>
     <svg
       stroke="currentColor"
       fill="currentColor"
       stroke-width="0"
       viewBox="0 0 512 512"
       class="w-6 h-6"
       height="1em"
       width="1em"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
       <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
     </svg>
     </Link>


     </div>
       </div>
     
    
     </div> 
   </div>
     <article className="flex flex-col gap-1 t text-muted-foreground text-md">
       <p className=" text-[#a1a1a1] xs:text-white/85 font-semibold">
         I'm a Front-end Developer and I Create Web Development Content.
       </p>
     
     </article>
     <Link to='https://docs.google.com/document/d/10-VKW3Xu2RJUaPW5jpF-jOZZkLcm_LivcC2M4Cldnxk/edit?usp=sharing'>
     <button className="mt-4 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#1D6CE1] text-primary-foreground hover:bg-[#1D6CE1]/90 h-11 rounded-md px-8 w-full xs:w-40">Download My Resume</button>
     </Link>
       </main>
    </section>  
  )
}

export default Profile
