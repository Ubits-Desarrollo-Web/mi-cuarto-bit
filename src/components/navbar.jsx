import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ubits_logo.png";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <Link to="/">
          <img className="Logo" alt="ubits logo" src={logo} />
        </Link>
        <div className="NavBar-links">
          <Link to="/detalles/1">El Rick más Rick!</Link>
          <Link to="/detalles/2">Y Morty</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
