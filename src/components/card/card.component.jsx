import React from "react";
import "./card.style.css";

import { HashImages } from "../hash-images/hash-images.component";
import { CardElement } from "../card-element/card-element.component";

export const Card = ({ avatars, bios, searchField, changeAvatar }) => {
  return (
    <div className="cards-container">
      {avatars
        .filter((avatar) =>
          avatar.name.toLowerCase().includes(searchField.toLocaleLowerCase())
        )
        .map((avatar, idx) => (
          <div key={avatar.id} className="card">
            <div className="image-wrapper">
              <HashImages name={avatar.name} changeAvatar={changeAvatar} />
            </div>
            <div className="card-element-wrapper">
              <h1>{avatar.name}</h1>
              <CardElement valueKey="Email" value={avatar.email} />
              <CardElement valueKey="Website" value={avatar.website} />
              <CardElement valueKey="Ocupation" value={avatar.company.bs} />
              <CardElement valueKey="About" value={bios[idx].body} />
            </div>
          </div>
        ))}
    </div>
  );
};
