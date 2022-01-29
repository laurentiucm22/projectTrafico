import React from "react";
import HowTo from "../components/HowTo/HowTo";
import HowToDesc from "../components/HowTo/HowToDesc";
import HowToImg from "../components/HowTo/HowToImg";

const HowToPage = (props) => {
  return (
    <HowTo>
      <HowToImg />
      <HowToDesc
        pageTitles={props.item[1].pageTitles}
        message={props.item[1].message}
      />
    </HowTo>
  );
};

export default HowToPage;
