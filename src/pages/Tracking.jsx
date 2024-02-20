import React from "react";
import Navbar from "../components/Navbar";

const Tracking = () => {
  document.getElementById("title").innerHTML = "Tracking | Rohit IT";
  return (
    <div>
      <Navbar />
      <h1>Lets Track Your Order</h1>
    </div>
  );
};

export default Tracking;
