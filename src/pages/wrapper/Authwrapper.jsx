import React, { useState } from "react";

const Authwrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (!isLoggedIn) {
    window.location.href = "/login";
  }
  return <>{children}</>;
};

export default Authwrapper;
