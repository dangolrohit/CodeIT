import React from "react";
import Navbar from "../components/Navbar";

const Order = () => {
  document.getElementById("title").innerHTML = "Order | Rohit IT";
  return (
    <div>
      <Navbar />
      <h1>Order from here</h1>
    </div>
  );
};

export default Order;
