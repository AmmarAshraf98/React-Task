import React, { useState } from "react";
import style from "./Profile.module.css";
import Imgcomponent from "../Imgcomponent/Imgcomponent";

// import all images
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../../assets/porfolio", false, /\.(png|jpe)$/)
);

export default function Profile() {
  const [show, setshow] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  function handelShow() {
    setshow(!show);
  }

  function getCurrentImg(x) {
    setCurrentImg(x);
  }

  return (
    <>
      <h2 className="text-center pt-5 mb-3 fw-bold">PORTFOLIO COMPONENT</h2>
      <p className={`${style.stars} text-center mb-4  `}>
        <i className="fa-solid fa-star"></i>
      </p>

      <div className="row gy-4">
        {[...images].map((img, index) => {
          return (
            <div
              className={`col-md-4 ${style.cursorePointer}`}
              date-index={index}
              onClick={function (e) {
                console.log(e.target);
                handelShow();
                getCurrentImg(img);
              }}
              key={index}
            >
              <div className={`rounded-4 overflow-hidden ${style.item}`}>
                <img src={img} alt="" className="w-100" />
              </div>
            </div>
          );
        })}
      </div>

      {show && <Imgcomponent img={currentImg} handelState={handelShow} />}
    </>
  );
}
