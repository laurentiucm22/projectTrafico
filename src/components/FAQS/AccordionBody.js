import React, { useState } from "react";
import "./AccordionBody.css";
import AccordionData from "./AccordionData";

const AccordionBody = () => {
  return (
    <div className="accordion-body content">
      <div className="acrd-col__one">
        <AccordionData />
      </div>
      <div className="acrd-col__two">
        <AccordionData />
      </div>
    </div>
  );
};

export default AccordionBody;
