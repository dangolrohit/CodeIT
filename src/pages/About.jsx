import React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";

function About() {
  document.getElementById("title").innerHTML = "About | Rohit IT";
  return (
    <div>
      <Navbar />
      <h1>You will about Info here</h1>
    </div>
  );
}

export default About;
