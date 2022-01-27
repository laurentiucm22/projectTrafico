import React, { useEffect } from "react";
import "./HomeCar.css";
import Car from "../../images/mobel.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeCar = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container">
      <div className="car-container">
        <img data-aos="fade-right" data-aos-duration="1000" src={Car} />
      </div>
    </div>
  );
};

export default HomeCar;
