import React from "react";
import FAQS from "../components/FAQS/FAQS";
import FAQSAccordion from "../components/FAQS/FAQSAccordion";

import FAQSDesc from "../components/FAQS/FAQSDesc";

const FAQSPage = (props) => {
  return (
    <FAQS>
      <FAQSDesc
        pageTitles={props.item[2].pageTitles}
        message={props.item[2].message}
      />
      <FAQSAccordion />
    </FAQS>
  );
};

export default FAQSPage;
