import React from "react";
import { FaBars } from "react-icons/fa";
import "./MobileNav.css";

const MobileNav = () => {
  return (
    <div className="mobile-menu__container">
      <FaBars className="mobile-menu" />
    </div>
  );
};

export default MobileNav;
