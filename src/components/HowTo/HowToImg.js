import React, { useEffect } from "react";
import IllustrationTwo from "../../images/illustrations.svg";
import "./HowToImg.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HowToImg = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="img-container">
      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        src={IllustrationTwo}
        className="second-img"
      />
    </div>
  );
};

export default HowToImg;
