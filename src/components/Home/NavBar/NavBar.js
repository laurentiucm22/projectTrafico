import React from "react";
import ContactBtn from "./ContactBtn";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className="navigation content">
        <Logo />
        <Nav />
        <ContactBtn />
        <MobileNav />
      </div>
    </div>
  );
};

export default NavBar;
