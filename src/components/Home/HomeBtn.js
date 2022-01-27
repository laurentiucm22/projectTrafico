import React from "react";
import "./HomeBtn.css";
import { CgArrowLongRight } from "react-icons/cg";

const HomeBtn = () => {
  return (
    <div className="content">
      <div className="test">
        <div className="home-btn__container">
          <a href="#about" className="home-btn">
            Get started
            <CgArrowLongRight className="btn-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBtn;
