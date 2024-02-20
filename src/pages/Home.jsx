import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AdsOne from "../components/adsOne";
import Courses from "../components/Courses";

function Home() {
  document.getElementById("title").innerHTML = "Home | Rohit IT";
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <AdsOne />
    </div>
  );
}

export default Home;
