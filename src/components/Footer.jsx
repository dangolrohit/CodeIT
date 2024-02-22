import React from "react";
import Logo from "../assets/rologo.svg";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  var currentYear = new Date().getFullYear();

  return (
    <div className="mainFooter">
      <div className="footerContent">
        <div className="footOne">
          <div className="footerLogo">
            <img src={Logo} alt="" />
          </div>
          <div className="oneContent">
            <p>
              Code IT is one of the best inclusive computer training institutes
              in Dharan, Nepal. Established in 2017, our professional IT
              Training and Development center has been employing experts in this
              field to impart professional education to trainees.
            </p>
          </div>
        </div>
        <div className="footTwo">
          <h2>Quick Links</h2>
          <div className="footerLinks" id="footerLinks">
            <Link to="/about" className="links">
              About Us
            </Link>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
            <Link to="/service" className="links">
              Services
            </Link>
            <Link to="/order" className="links">
              Orders
            </Link>
          </div>
        </div>
        <div className="footThree">
          <h2>Contact Us</h2>
          <p>Pepsicola, Kathmandu, Nepal</p>
          <p>contact@rohitdangol.com.np</p>
          <p>+977 9841038881</p>
        </div>
      </div>
      <hr />
      <p style={{ textAlign: "center" }}>
        Copyright © {currentYear} | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
