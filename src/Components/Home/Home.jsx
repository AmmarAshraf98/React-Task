import React from "react";
import pic from "../../assets/avataaars.svg";
import style from "./Home.module.css";
export default function Home() {
  return (
    <div className="text-white text-center">
      <img src={pic} alt="profile" className="w-25 mb-2" />
      <h2 className="fw-bold">START FRAMEWORK</h2>
      <p className={style.stars}>
        <i className="fa-solid fa-star"></i>
      </p>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
