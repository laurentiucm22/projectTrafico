import React from "react";
import ContactBtn from "./ContactBtn";
import Logo from "./Logo";
import Nav from "./Nav";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="container">
      <div className="navigation content">
        <Logo />
        <Nav />
        <FaBars className="mobile-menu" />
        <ContactBtn />
      </div>
    </div>
  );
};

export default NavBar;
