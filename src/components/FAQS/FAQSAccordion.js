import React from "react";
import AccordionBody from "./AccordionBody";
import "./FAQSAccordion.css";
// <AccordionData />

const FAQSAccordion = () => {
  return (
    <div className="accordian-container container">
      <AccordionBody />
      <div className="btn-holder content">
        <div className="btn-container">
          <button className="load-btn">
            Load More <span className="load-span">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSAccordion;
