import React from "react";
import "./HomeBtn.css";
import { CgArrowLongRight } from "react-icons/cg";

const HomeBtn = () => {
  const getStartedBtn = "Get started";

  return (
    <div className="content">
      <div className="btn-home">
        <div className="home-btn__container">
          <a href="#how-to" className="home-btn">
            {getStartedBtn}
            <CgArrowLongRight className="btn-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBtn;
