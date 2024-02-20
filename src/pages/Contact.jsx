import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  document.getElementById("title").innerHTML = "Contact | Rohit IT";
  return (
    <div>
      <Navbar />
      <h1>You can contact me from here</h1>
    </div>
  );
};

export default Contact;
