import React from "react";
import Navbar from "../components/Navbar";

function Blog() {
  document.getElementById("title").innerHTML = "Blog | Rohit IT";
  return (
    <div>
      <Navbar />
      <h1>This is Blog Page</h1>
    </div>
  );
}

export default Blog;
