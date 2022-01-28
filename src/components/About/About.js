import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <div id="about" className="about content">
      {props.children}
    </div>
  );
};

export default About;
