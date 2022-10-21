import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import { Button } from "./components/button/button.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { Card } from "./components/card/card.component";

function App() {
  const avatars = useRef([]);
  const [bios, setBio] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [changeAvatar, setChangeAvatar] = useState("?bgset=bg");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = await response.json();
      avatars.current = usersData;
    };

    const fetchBio = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const usersBio = await response.json();
      setBio(usersBio);
    };

    fetchUsers();
    fetchBio();
  }, []);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleChangeAvatar = (avatarSet) => {
    setChangeAvatar(avatarSet);
  };

  return (
    <div className="App">
      <div className="app-title">
        <h1>RoboHash Fun</h1>
      </div>
      <div className="search-box-wrapper">
        <SearchBox handleChange={handleChange} />
      </div>
      <div className="buttons-wrapper">
        <Button onClick={() => handleChangeAvatar("?bgset=bg")}>SET 1</Button>
        <Button onClick={() => handleChangeAvatar("?set=set3")}>SET 2</Button>
        <Button onClick={() => handleChangeAvatar("?set=set4")}>SET 3</Button>
      </div>
      <div className="cards-wrapper">
        <Card
          avatars={avatars.current}
          bios={bios}
          searchField={searchField}
          changeAvatar={changeAvatar}
        />
      </div>
    </div>
  );
}

export default App;
