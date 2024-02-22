import React from "react";
import "./signup.css";

const Signuparea = (toggleLogin) => {
  return (
    <div>
      <div className="loginPage">
        <div className="loginArea">
          <form className="form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />

            <button>Submit</button>
          </form>
          <p>
            Already have an account?{" "}
            <button onClick={toggleLogin}>Log in</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signuparea;
