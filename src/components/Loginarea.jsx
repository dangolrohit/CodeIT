import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

const Loginarea = () => {
  let btn = document.getElementById("btn");
  return (
    <div>
      <div className="loginPage">
        <div className="loginArea">
          <form className="form">
            <h1>Welcome to Login Page</h1>
            <input type="text" placeholder="Username / Email" required />
            <input type="password" placeholder="Password" required />
            <a href="">forgot password</a>
            <button>Login</button>
            <hr />
            <p>
              Don’t have an account?
              <NavLink to="/new-register"> Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginarea;
