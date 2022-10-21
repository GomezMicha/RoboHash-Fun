import React from "react";
import "./card-element.style.css";

export const CardElement = ({ valueKey, value }) => {
  return (
    <p className="card-element">
      <span>{valueKey}: </span>
      {value}
    </p>
  );
};
