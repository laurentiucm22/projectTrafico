import React from "react";
import "./HowTo.css";

const HowTo = (props) => {
  return (
    <div
      className="how-to content
  "
    >
      {props.children}
    </div>
  );
};

export default HowTo;
