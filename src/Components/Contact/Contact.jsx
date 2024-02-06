import React, { useState } from "react";
import style from "./Contact.module.css";
export default function Contact() {
  // state
  const [isFocused, setIsFocused] = useState({
    name: false,
    age: false,
    password: false,
    email: false,
  });

  // set label to be show
  const handleFocus = (e) => {
    setIsFocused({ ...isFocused, [e.target.name]: true });
  };

  // set label to be hide
  const ayhaga = (e) => {
    setIsFocused({ ...isFocused, [e.target.name]: false });
  };

  return (
    <>
      <h2 className="text-center fw-bold mb-4">CONTACT SECTION</h2>
      <p className={`${style.stars} text-center mb-3`}>
        <i className="fa-solid fa-star"></i>
      </p>

      <form action="">
        <div className="position-relative border-bottom border-secondary mb-4">
          <input
            name="name"
            type="text"
            className="form-control py-3 bg-black text-white border-0 "
            id="nameL"
            placeholder="Enter Your Name"
            onInput={handleFocus}
            onBlur={ayhaga}
          />
          <label
            htmlFor="nameL"
            className={`${style.labelStyle} ${
              isFocused.name ? style.goUp : ""
            }`}
          >
            User Email
          </label>
        </div>

        <div className="position-relative  border-bottom border-secondary mb-4">
          <input
            name="age"
            type="number"
            className="form-control py-3 bg-black text-white border-0 "
            id="age"
            placeholder="Enter Your Age"
            onInput={handleFocus}
            onBlur={ayhaga}
          />
          <label
            htmlFor="age"
            className={`${style.labelStyle} ${isFocused.age ? style.goUp : ""}`}
          >
            User Age
          </label>
        </div>

        <div className="position-relative  border-bottom border-secondary mb-4">
          <input
            name="email"
            type="email"
            className="form-control py-3 bg-black text-white border-0 "
            id="emailL"
            placeholder="Enter Your Email"
            onInput={handleFocus}
            onBlur={ayhaga}
          />
          <label
            htmlFor="emailL"
            className={`${style.labelStyle} ${
              isFocused.email ? style.goUp : ""
            }`}
          >
            User Email
          </label>
        </div>

        <div className="position-relative  border-bottom border-secondary mb-4">
          <input
            name="password"
            type="password"
            className="form-control py-3 bg-black text-white border-0 "
            id="password"
            placeholder="Enter Your Password"
            onInput={handleFocus}
            onBlur={ayhaga}
          />
          <label
            htmlFor="password"
            className={`${style.labelStyle} ${
              isFocused.password ? style.goUp : ""
            }`}
          >
            User Password
          </label>
        </div>

        <button className="btn btn-dark" onClick={(e) => e.preventDefault()}>
          Submit
        </button>
      </form>
    </>
  );
}
