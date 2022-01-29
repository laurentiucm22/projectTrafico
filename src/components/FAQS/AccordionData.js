import React, { useState, useEffect } from "react";
import AccordionBody from "./AccordionBody";

const AccordionData = () => {
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

  return (
    <div className="accordion-body content">
      <AccordionBody items={accordionData} />
      <button>
        Add More <span>+</span>
      </button>
    </div>
  );
};

export default AccordionData;
