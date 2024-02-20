import React from "react";
import Navbar from "../components/Navbar";

const Service = () => {
  document.getElementById("title").innerHTML = "Service | Rohit IT";
  return (
    <div>
      <Navbar />
      <h1>Check our Services</h1>
    </div>
  );
};

export default Service;
