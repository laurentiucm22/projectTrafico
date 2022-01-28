import React from "react";
import "./Nav.css";

const Nav = () => {
  const MenuItems = [
    {
      title: "About",
      url: "#about",
      clsName: "nav-links",
    },
    {
      title: "How To",
      url: "#how-to",
      clsName: "nav-links",
    },
    {
      title: "FAQS",
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
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
