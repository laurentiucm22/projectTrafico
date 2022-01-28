import React from "react";
import "./HomeBtn.css";
import { CgArrowLongRight } from "react-icons/cg";

const HomeBtn = () => {
  return (
    <div className="content">
      <div className="btn-home">
        <div className="home-btn__container">
          <a href="#how-to" className="home-btn">
            Get started
            <CgArrowLongRight className="btn-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBtn;
