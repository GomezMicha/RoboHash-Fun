import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ handleChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="Search Avatar"
      onChange={handleChange}
    />
  );
};
