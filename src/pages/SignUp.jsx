import React from "react";
import Navbar from "../components/Navbar";
import Signuparea from "../components/Signuparea";

function SignUp() {
  document.getElementById("title").innerHTML = "Sign Up | Rohit IT";
  return (
    <div>
      <Navbar />
      <Signuparea />
    </div>
  );
}

export default SignUp;
