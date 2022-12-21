import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
  return ReactDOM.createPortal(
    <h1>portal</h1>,
    document.getElementById("another-root")
  );
};

export default Portal;
