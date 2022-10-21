import React from "react";
import "./button.style.css";

export const Button = ({ onClick, children }) => {
  return (
    <div className="button" onClick={onClick}>
      <button>{children}</button>
    </div>
  );
};
