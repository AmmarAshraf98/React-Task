import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className=" pt-3 text-white">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-4 text-center p-3">
            <div className="item">
              {" "}
              <h4 className="mb-3">LOCATION</h4>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>{" "}
          </div>
          <div className="col-md-4 text-center p-3">
            <div className="item">
              <h4 className="mb-3">AROUND THE WEB</h4>
              <div className="icons d-flex gap-2 justify-content-center align-items-center">
                <i className="fa-brands fa-facebook  icon p-2 rounded-circle border"></i>
                <i className="fa-brands fa-twitter  icon p-2 rounded-circle border"></i>
                <i className="fa-brands fa-linkedin  icon p-2 rounded-circle border"></i>
                <i className="fa-solid fa-globe  icon p-2 rounded-circle border"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center p-3">
            <h4 className="mb-3">ABOUT FREELANCER</h4>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mb-0 py-3 bg-dark">
        Copyright © Your Website 2021
      </p>
    </footer>
  );
}
