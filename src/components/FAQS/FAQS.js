import React from "react";
import "./FAQS.css";

const FAQS = (props) => {
  return (
    <div id="faqs" className="faqs container">
      {props.children}
    </div>
  );
};

export default FAQS;
