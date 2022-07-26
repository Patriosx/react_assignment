import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/popular"}>Popular movies</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
