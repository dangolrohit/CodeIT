import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";

const Signuparea = () => {
  return (
    <div>
      <div className="loginPage">
        <div className="loginArea">
          <form className="form">
            <h1>Sign Up Page</h1>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button>Sign Up</button>
            <hr />
            <p>
              Already have an account? <NavLink to="/login">Log in</NavLink>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signuparea;
