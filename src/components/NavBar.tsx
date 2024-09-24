import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="flex justify-between w-full">
      <NavLink className="font-bold text-purple-500 font-mono text-lg" to="/">
        Streamify
      </NavLink>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Analytics
        </NavLink>
        {" / "}
        <NavLink
          to="/recent-streams"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Recent Streams
        </NavLink>
      </div>
    </ul>
  );
};

export default NavBar;
