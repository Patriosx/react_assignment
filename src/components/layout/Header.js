import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../../pages/Login";
import Modal from "../Modal";
import { RiLoginCircleFill } from "react-icons/ri";
const Header = () => {
  //control open/close of Modal Component
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <NavLink activeclassname="active" to={"/"}>
          home
        </NavLink>
        <div
          className="login btn_login-container"
          onClick={() => setIsOpen(true)}
        >
          <RiLoginCircleFill fill="#transparent" />
          <span>LOGIN</span>
        </div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Login />
      </Modal>
    </>
  );
};

export default Header;
