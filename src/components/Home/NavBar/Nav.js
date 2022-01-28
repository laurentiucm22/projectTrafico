import React from "react";
import "./Nav.css";

const Nav = () => {
  const MenuItems = [
    {
      pages: "About",
      url: "#about",
      clsName: "nav-links",
    },
    {
      pages: "How To",
      url: "#how-to",
      clsName: "nav-links",
    },
    {
      pages: "FAQS",
      url: "#faqs",
      clsName: "nav-links",
    },
  ];
  return (
    <nav className="nav">
      <ul className="nav-list">
        {MenuItems.map((item, index) => {
          return (
            <li className="nav-items" key={index}>
              <a className={item.clsName} href={item.url}>
                {item.pages}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
