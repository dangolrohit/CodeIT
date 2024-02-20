import React from "react";
import Navbar from "../components/Navbar";

const Page404 = () => {
  document.getElementById("title").innerHTML = "Page not found | Rohit IT";
  return (
    <div>
      <Navbar />
      <h1>404 Page Not Found</h1>
    </div>
  );
};

export default Page404;
