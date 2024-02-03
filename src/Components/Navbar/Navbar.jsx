import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const setActive = (e) => {
    const x = document.querySelectorAll(".nav-link");
    for (const ele of x) {
      ele.classList.remove("active");
    }
    e.target.classList.add("active");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" onClick={setActive} to={""}>
          <h1>FrameWork</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" onClick={setActive} to={"about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={setActive} to={"profile"}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={setActive} to={"contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
