import React from "react";
import "./HeaderImg.css";
import Cover from "../../images/Scene.svg";

const HeaderImg = () => {
  return (
    <div>
      <img src={Cover} className="home-img" />
    </div>
  );
};

export default HeaderImg;
