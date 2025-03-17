import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`flex flex-col md:block  h-full text-light-gray bg-primary font-semibold border border-l-2 border-Primary-light ${
        isCollapsed ? "w-20 items-center" : "w-[180px]"
      }`}>
      <div>
        <button
          className=" w-full px-4 py-5 text-Primary hover:bg-custom-brown hover:text-Primary"
          onClick={toggleSidebar}>
          {isCollapsed ? (
            <svg className="w-5 h-5 fill-light-gray">
              <use href="/sprite.svg#icon-circle-right"></use>
            </svg>
          ) : (
            <svg className="w-5 h-5  fill-light-gray">
              <use href="/sprite.svg#icon-circle-left"></use>
            </svg>
          )}
        </button>
        <ul className="flex-grow">
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <svg className="w-4 h-4  fill-light-gray">
              <use href="/sprite.svg#icon-home3"></use>
            </svg>
            {!isCollapsed && <NavLink to="/">Home</NavLink>}
          </li>
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <svg className="w-5 h-5 fill-light-gray">
              <use href="/sprite.svg#icon-users"></use>
            </svg>
            {!isCollapsed && <NavLink to="/members">Members</NavLink>}
          </li>
          <li className="flex items-center gap-2 px-4 py-5 hover:bg-custom-brown hover:text-Primary">
            <svg className="w-4 h-4 fill-light-gray">
              <use href="/sprite.svg#icon-library"></use>
            </svg>
            {!isCollapsed && <NavLink to="/branches">Departments</NavLink>}
          </li>
        </ul>
      </div>
      <button className="mt-auto w-full flex items-center gap-2 px-4 py-5 cursor-pointer hover:bg-custom-brown hover:text-Primary">
        <svg className="w-5 h-5 fill-light-gray">
          <use href="/sprite.svg#icon-share"></use>
        </svg>
        {!isCollapsed && <NavLink to="/dashboard/logout">LOG OUT</NavLink>}
      </button>
    </nav>
  );
};

export default Sidebar;
