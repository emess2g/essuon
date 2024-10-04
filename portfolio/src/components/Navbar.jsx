import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: "1",
      title: "Home",
      path: "/",
    },
    {
      id: "2",
      title: "About",
      path: "/about",
    },
    {
      id: "3",
      title: "Projects",
      path: "/projects",
    },
    {
      id: "5",
      title: "Contact",
      path: "/contact",
    },
    {
      id: "6",
      title: "Resume",
      path: "/resume",
    },
  ];

  return (
    
      <nav className="flex-end fixed z-[12] top-0 righ text justify-end items-end  ">
        {/* logo */}
     
        
        {/* links */}
        <div className="flex gap-2 justify-end">
          {links.map((link, index) => {
            return (
              <div className="">
                    <Link to={link.path}
                    key={index}
                    >
                <span className="text-e">{link.title}</span>
              </Link>
              </div>
            );
          })}
        </div>

        {/* buttons */}
      </nav>
    
  );
};

export default Navbar;
