import React, { useState } from "react";

const AccordionData = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  const clickHandler = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div className="accordion-element">
      <h2 className="accordion-title" onClick={clickHandler}>
        {props.data.title}
        <span className="acrd-span">{showMessage ? "-" : "+"}</span>
      </h2>
      <p className={showMessage ? "show" : "accordion-msg"}>
        {props.data.Message}
      </p>
    </div>
  );
};

export default AccordionData;
