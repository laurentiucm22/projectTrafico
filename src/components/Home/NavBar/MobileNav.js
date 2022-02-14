import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./MobileNav.css";

const MobileNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileLinks, setMobileLinks] = useState(false);
  let menuWrap;
  let menu;

  const clickHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  const linkClickHandler = (event) => {
    setMobileLinks(event.target.value);
    setMobileMenu(false);
  };

  if (mobileMenu) {
    menuWrap = <div className="mobile__container"></div>;

    menu = (
      <div className="mobile__menu">
        <h1 className="ttl">Trafico.</h1>
        <nav className="mobile__nav">
          <li className="mobile-nav__items">
            <a
              href="#about"
              className="mobile-nav__links"
              value={mobileLinks}
              onClick={linkClickHandler}
            >
              About Us
            </a>
          </li>
          <li className="mobile-nav__items">
            <a
              href="#about"
              className="mobile-nav__links"
              value={mobileLinks}
              onClick={linkClickHandler}
            >
              How To
            </a>
          </li>
          <li className="mobile-nav__items">
            <a
              href="#about"
              className="mobile-nav__links"
              value={mobileLinks}
              onClick={linkClickHandler}
            >
              FAQS
            </a>
          </li>
          <li className="mobile-contact__us">
            <a
              href="#contact-us"
              className="contact-mobile__btn"
              value={mobileLinks}
              onClick={linkClickHandler}
            >
              Contact Us
            </a>
          </li>
        </nav>
      </div>
    );
  }

  return (
    <div className="mobile-menu__container">
      <FaBars className="mobile-icon" onClick={clickHandler} />
      {menuWrap}
      {menu}
    </div>
  );
};

export default MobileNav;
