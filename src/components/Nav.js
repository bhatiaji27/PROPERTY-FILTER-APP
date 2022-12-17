import React from "react";
import "./Nav.css";

function Nav({ mode, onUpdateMode, onSignOut }) {
  const myStyle = { color: mode === "dark" ? "gold" : "black" };

  const onSignOutHandler = () => {
    onSignOut();
  };

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${
        mode === "light" ? "primary" : "dark"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          PropFinder
        </a>
        <button
          className="navbar-toggler navbar-toggler-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundColor: mode === "dark" ? "gold" : "white",
            }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={myStyle}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
          <div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={onUpdateMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label modeCont"
                htmlFor="flexSwitchCheckDefault"
                style={myStyle}
              >
                {mode === "light" ? "Enable" : "Disable"} Dark mode
              </label>
            </div>
          </div>
          <button onClick={onSignOutHandler} className="btn btn-lg btn-dark">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
