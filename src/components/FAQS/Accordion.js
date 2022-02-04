import React, { useState, useEffect } from "react";
import "./Accordion.css";
import AccordionElement from "./AccordionElement";

const AccordionBody = () => {
  const [accordionData, setAccordionData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://lxpi9qne2a.api.quickmocker.com/getReactFAQs"
    );
    const data = await response.json();
    setAccordionData(data.response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [maxRange, setMaxRange] = useState(10);
  const [removeBtn, setRemoveBtn] = useState(false);

  const handleClick = () => {
    setMaxRange((prevMaxRange) => prevMaxRange + 4);
    setRemoveBtn((prev) => !prev);
  };

  return (
    <div className="accordion-box">
      <div className="accordion content">
        {accordionData.slice(0, maxRange).map((accordionElement, index) => (
          <AccordionElement data={accordionElement} key={index} />
        ))}
      </div>
      <div className="btn-holder content">
        <div className="btn-container">
          <button
            className={removeBtn ? "remove-btn" : "load-btn"}
            onClick={handleClick}
          >
            Load More <span className="load-span">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccordionBody;
