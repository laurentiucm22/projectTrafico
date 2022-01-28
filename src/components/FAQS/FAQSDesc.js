import React from "react";
import "./FAQSDesc.css";
import IllustrationThree from "../../images/Illustration-three.svg";

const FAQSDesc = (props) => {
  return (
    <div className="faqs-desc__container">
      <div className="accent-div">
        <div className="accent-div__right"></div>
      </div>
      <div className="cols-container container">
        <div className="description-and__img content">
          <div className="col-one__faqs">
            <div className="faqs-title__container">
              <h2 className="faqs-title">{props.pageTitles}</h2>
              <p className="faqs-description">{props.message}</p>
            </div>
          </div>
          <div className="col-two__faqs">
            <img src={IllustrationThree} className="third-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSDesc;
