import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AdsOne from "../components/adsOne";
import Courses from "../components/Courses";
import Placement from "../components/Placement";
import Footer from "../components/Footer";

function Home() {
  document.getElementById("title").innerHTML = "Home | Rohit IT";
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <AdsOne />
      <Placement />
      <Footer />
    </div>
  );
}

export default Home;
