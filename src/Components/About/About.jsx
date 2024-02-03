import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <h2 className="text-center fw-bold mb-4 pt-5">ABOUT COMPONENT</h2>
      <p className={`${style.stars} text-center mb-3`}>
        <i className="fa-solid fa-star"></i>
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="item p-3">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="item p-3">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
