import React from "react";
import Rectangle15 from "../../../images/Rectangle15.png";
import Rectangle16 from "../../../images/Rectangle15.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
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
  );
};

export default Logo;
