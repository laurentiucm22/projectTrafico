import React from "react";
import Rectangle15 from "./Rectangle15.png";
import Rectangle16 from "./Rectangle16.png";
import "./FooterCredits.css";

const FooterCredits = () => {
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
    <div
      className="credits-container
      content"
    >
      <div className="logo-container logo-footer">
        <div className="rectangle-container">
          <div className="rectangle-up">
            <img src={Rectangle15} />
          </div>
          <div className="rectangle-down">
            <img src={Rectangle16} />
          </div>
        </div>
        <h1 className="logo-title">Trafico.</h1>
      </div>
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
    </div>
  );
};

export default FooterCredits;
