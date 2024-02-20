import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AdsOne from "../components/adsOne";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1>Welcome to Home</h1>
      <AdsOne />
    </div>
  );
}

export default Home;
