import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "./assets/logo.png";

function NavBar() {
  return (
    <>
      <header data-bs-theme="dark">
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={Logo}
                alt="Logo"
                width="56"
                height="44"
                style={{ maxHeight: "48px" }}
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/ai-parking"
                >
                  AI Parking Violations
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
