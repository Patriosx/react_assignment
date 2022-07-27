import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <NavLink activeclassname="active" to={"/"}>
        home
      </NavLink>
      <NavLink activeclassname="active" to={"/login"}>
        Login
      </NavLink>
    </div>
  );
};

export default Header;
