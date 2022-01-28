import React from "react";
import "./AboutDesc.css";

const AboutDesc = (props) => {
  return (
    <div className="col-one">
      <div className="row-one">
        <h2 className="about-title">{props.pageTitles}</h2>
        <p className="row-one__description">{props.message}</p>
      </div>
      <div className="row-two">
        <div className="card">
          <span className="span-red"></span>
          <p className="row-two__description">{props.scdmessage}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDesc;
