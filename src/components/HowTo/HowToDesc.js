import React from "react";
import "./HowToDesc.css";

const HowToDesc = (props) => {
  return (
    <div className="col-unu">
      <div className="row content">
        <h2 className="how-to-title">{props.pageTitles}</h2>
        <p className="row-description">{props.message}</p>
      </div>
    </div>
  );
};

export default HowToDesc;
