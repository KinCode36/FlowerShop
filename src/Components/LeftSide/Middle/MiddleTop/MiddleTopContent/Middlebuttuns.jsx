import React from "react";
import { NavLink } from "react-router-dom";

const Middlebuttuns = ({ sidebarButtons }) => {
  return (
    <div>
      {sidebarButtons?.map((button) => (
        <NavLink 
          key={button.id}
          to={button.path}
          className={({ isActive }) =>
            `flex items-center gap-2.5 py-2.5 px-5 text-sm cursor-pointer border-l-2 transition-all duration-150 text-left font-dm font-normal w-full ${
              isActive
                ? "text-white bg-white/10 border-[#6B8F71]"
                : "text-white/55 border-transparent hover:text-white hover:bg-white/[0.04]"
            }`
          }
        >
          <span className="text-sm w-4 text-center">
            {button.icon}
          </span>
          {button.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Middlebuttuns;