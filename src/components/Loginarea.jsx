import React from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";

const Loginarea = () => {
  const nav = useNavigate();
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const passWord = e.target.elements.password.value;
    if (email === "admin" && passWord === "admin") {
      nav("/dashboard");
    } else {
      alert("Sorry credential did not match");
    }
  };

  return (
    <div>
      <div className="loginPage">
        <div className="loginArea">
          <form className="form" onSubmit={handleLoginSubmit}>
            <h1>Welcome to Login Page</h1>
            <input
              type="text"
              placeholder="Username / Email"
              name="email"
              id="emailLogin"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="passwordLogin"
              required
            />
            <a href="">forgot password</a>
            <button type="submit">Login</button>
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
