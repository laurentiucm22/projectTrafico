import React from "react";
import "./ContactBtn.css";

const ContactBtn = () => {
  const contactBtn = "Contact Us";
  return (
    <div className="c-btn">
      <div className="c-btn__container">
        <a href="#contact-us" className="contact-btn">
          {contactBtn}
        </a>
      </div>
    </div>
  );
};

export default ContactBtn;
