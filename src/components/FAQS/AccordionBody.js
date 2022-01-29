import React, { useState } from "react";
import "./AccordionBody.css";

const AccordionBody = (props) => {
  const items = props.items;

  const [selected, setSelected] = useState(null);

  const toggle = (item) => {
    if (selected === item) {
      return setSelected(null);
    }

    setSelected(item);
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <div className="accordion" key={index}>
          <div className="acrd-col__one">
            <h2 className="accordion-title" onClick={() => toggle(item)}>
              {item.title}
              <span className="acrd-span">{selected === item ? "-" : "+"}</span>
            </h2>
            <div className={selected === item ? "show" : "accordion-msg"}>
              {item.Message}
            </div>
          </div>
          <div className="acrd-col__two">
            <h2 className="accordion-title" onClick={() => toggle(item)}>
              {item.title}
              <span className="acrd-span">{selected === item ? "-" : "+"}</span>
            </h2>
            <div className={selected === item ? "show" : "accordion-msg"}>
              {item.Message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionBody;
