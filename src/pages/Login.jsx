import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Loginarea from "../components/Loginarea";
import Signuparea from "../components/Signuparea";

function Login() {
  document.getElementById("title").innerHTML = "Login | Rohit IT";
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Login;
