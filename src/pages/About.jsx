import React from "react";
import Navbar from "../components/Navbar";

function About() {
  document.getElementById("title").innerHTML = "About | Rohit IT";
  return (
    <div>
      <Navbar />
      <h1>This is About Section</h1>
    </div>
  );
}

export default About;
