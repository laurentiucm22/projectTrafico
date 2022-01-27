import React from "react";
import About from "../components/About/About";
import AboutDesc from "../components/About/AboutDesc";
import AboutImg from "../components/About/AboutImg";

const AboutPage = () => {
  return (
    <About className="container">
      <AboutDesc />
      <AboutImg />
    </About>
  );
};

export default AboutPage;
