import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/rologo.svg";

function Navbar() {
  return (
    <div>
      <nav id="navBar">
        <div className="logoHeader">
          <Link to="/" id="brand">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="navLinks" id="navLinks">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/about" className="links">
            About
          </Link>
          <Link to="/blog" className="links">
            Blog
          </Link>
          <Link to="/service" className="links">
            Service
          </Link>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
