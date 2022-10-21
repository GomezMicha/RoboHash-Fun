import React from "react";
import "./hash-images.style.css";

export const HashImages = ({ name, changeAvatar }) => {
  return (
    <div className="avatar-image">
      <img
        src={`https://robohash.org/${name}${changeAvatar}&size=180x180`}
        alt={name}
      />
    </div>
  );
};
