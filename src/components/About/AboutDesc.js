import React from "react";
import "./AboutDesc.css";

const AboutDesc = () => {
  return (
    <div id="about" className="col-one">
      <div className="row-one">
        <h2 className="about-title">About Us</h2>
        <p className="row-one__description">
          The occupational traffic permit is one of the most important things in
          the company when carrying out freight transport. In fact, it is a
          prerequisite for doing business traffic at all.
        </p>
      </div>
      <div className="row-two">
        <div className="card">
          <span className="span-red"></span>
          <p className="row-two__description">
            How do you do when you need to obtain a commercial traffic permit
            for freight transport to your business?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDesc;
