import React from "react";
import "./HowTo.css";

const HowTo = (props) => {
  return (
    <div id="how-to" className="how-to">
      {props.children}
    </div>
  );
};

export default HowTo;
