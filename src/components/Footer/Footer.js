import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div id="contact-us" className="footer">
      {props.children}
    </div>
  );
};

export default Footer;
