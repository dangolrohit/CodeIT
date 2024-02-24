import React from "react";
import Navbar from "../components/Navbar";
import Loginarea from "../components/Loginarea";

function Login() {
  document.getElementById("title").innerHTML = "Login | Rohit IT";
  return (
    <div>
      <Navbar />
      <Loginarea />
    </div>
  );
}

export default Login;
