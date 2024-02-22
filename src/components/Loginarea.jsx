import React from "react";
import "./login.css";

const Loginarea = (toggleSignup) => {
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
          </form>
          <p>
            Don’t have an account?
            <button onClick={toggleSignup}>Create an account</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginarea;
