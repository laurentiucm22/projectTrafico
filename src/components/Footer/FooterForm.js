import React, { useState } from "react";
import "./FooterForm.css";
import { CgArrowLongRight } from "react-icons/cg";

const FooterForm = () => {
  const getStartedBtn = "Get started";

  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      name: enteredName,
      mail: enteredMail,
    };
    console.log(enteredData);

    setEnteredName("");
    setEnteredMail("");
  };

  return (
    <div className="col_two-container">
      <form className="footer-form" onSubmit={submitHandler}>
        <label className="form-label">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="input-group"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label className="form-label">Email Address</label>
        <input
          type="email"
          placeholder="Your email address"
          className="input-group"
          onChange={emailChangeHandler}
          value={enteredMail}
        />
        <button className="form-btn" type="submit">
          {getStartedBtn}
          <CgArrowLongRight className="btn-arrow" />
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
