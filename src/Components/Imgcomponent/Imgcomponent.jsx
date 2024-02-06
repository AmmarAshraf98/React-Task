import React from "react";
import style from "./Imgcomponent.module.css";
export default function Imgcomponent(props) {
  function close() {
    props.handelState();
  }

  return (
    <>
      <div className={style.display}>
        <div className="min-vh-100 w-50 mx-auto  d-flex justify-content-center align-items-center">
          <img src={props.img} className="w-100 d-block" alt="" />
        </div>
        <div
          className="position-absolute top-0 start-0 p-2 bg-secondary"
          onClick={close}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </>
  );
}
