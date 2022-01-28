import React from "react";
import About from "../components/About/About";
import AboutDesc from "../components/About/AboutDesc";
import AboutImg from "../components/About/AboutImg";

const AboutPage = (props) => {
  return (
    <About className="container">
      <AboutDesc
        pageTitles={props.item[0].pageTitles}
        message={props.item[0].message}
        scdmessage={props.item[0].scdmessage}
      />
      <AboutImg />
    </About>
  );
};

export default AboutPage;
