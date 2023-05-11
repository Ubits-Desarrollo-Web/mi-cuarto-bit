import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ubits_logo.png";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
          <img className="Logo" alt="ubits logo" src={logo} />
      </div>
    </>
  );
};

export default NavBar;
