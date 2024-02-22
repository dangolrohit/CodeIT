import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/rologo.svg";

function Navbar() {
  const activeClass = ({ isActive }) => (isActive ? "active" : "links");
  return (
    <div>
      <nav id="navBar">
        <div className="logoHeader">
          <NavLink to="/" id="brand">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <ul className="navLinks" id="navLinks">
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>
          <NavLink to="/blog" className={activeClass}>
            Blog
          </NavLink>
          <NavLink to="/service" className={activeClass}>
            Service
          </NavLink>
          <NavLink to="/contact" className={activeClass}>
            Contact
          </NavLink>
        </ul>
        <NavLink to="/login" className={activeClass}>
          Login
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
