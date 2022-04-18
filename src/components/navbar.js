import React from "react";
import myLogo from "../my-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";


const navbar = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" id="navbarstyle">
      <div className="container">

        <Link smooth={true} to="home" offset={-110} className="navbar-link" href="/#">
          <img className="logo" img src={myLogo} alt="logo..." />
        </Link>


        <button
          className="navbar-toggler"
          id="hamburger-btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">

              {/* Navbar links */}
              <Link eventKey="1" smooth={true} to="home" isDynamic={true} offset={-110} className="nav-link smooth" href="/#">
                Home <span className="sr-only"></span>
              </Link>

            </li>
            <li className="nav-item">
              <Link eventKey="2" smooth={true} to="about" offset={-105} className="nav-link" href="/#">
                About
              </Link>

            </li>
            <li className="nav-item">
              <Link eventKey="3" smooth={true} to="Services" offset={-108} className="nav-link" href="/#">
                Tech
              </Link>

            </li>
            <li className="nav-item">
              <Link eventKey="4" smooth={true} to="portfolio" offset={-108} className="nav-link" href="/#">
                Projects
              </Link>

            </li>
            <li className="nav-item">
              <Link eventKey="5" smooth={true} to="contact" offset={-107} className="nav-link" href="/#">
                Contact
              </Link>

            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default navbar;
