import React, { useState, useEffect } from "react";

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

  const [selected, setSelected] = useState(null);

  const toggle = (item) => {
    if (selected === item) {
      return setSelected(null);
    }
    setSelected(item);
  };
  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <h1 className="accordion-title" onClick={() => toggle(item)}>
            {item.title}
            <span className="acrd-span">{selected === item ? "-" : "+"}</span>
          </h1>
          <p className={selected === item ? "show" : "accordion-msg"}>
            {item.Message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccordionData;
