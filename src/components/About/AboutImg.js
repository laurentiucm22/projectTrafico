import React, { useEffect } from "react";
import IllustrationOne from "../../images/Illustration-one.svg";
import "./AboutImg.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutImg = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="col-two">
        <img
          data-aos="fade-left"
          data-aos-duration="1700"
          src={IllustrationOne}
        />
      </div>
    </div>
  );
};

export default AboutImg;
