import React from "react";
import FAQS from "../components/FAQS/FAQS";
import FAQSDesc from "../components/FAQS/FAQSDesc";

const FAQSPage = (props) => {
  return (
    <FAQS>
      <FAQSDesc
        pageTitles={props.item[2].pageTitles}
        message={props.item[2].message}
        scdmessage={props.item[2].scdmessage}
      />
    </FAQS>
  );
};

export default FAQSPage;
