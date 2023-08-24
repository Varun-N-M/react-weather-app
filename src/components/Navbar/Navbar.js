import React, { useState } from "react";
import "./navbar.css";
import { Search } from "../SearchBar/SearchBar";
import { BiCurrentLocation } from "react-icons/bi";

const Navbar = ({ onCityChange, getUserCoordinates }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    onCityChange(searchTerm);
  };
  const handleKey = (e) => {
    onCityChange(searchTerm);
  };
  const handleChange = (content) => {
    setSearchTerm(content.toLowerCase());
  };

  return (
    <nav>
      <div className="big-screen-nav">
        <div className="logo-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4814/4814489.png"
            alt="logo"
            autoFocus
            className="logo-img"
          />
          <h2 className="logo-title">weatherio</h2>
        </div>
        <Search
          onSearchContentChange={handleChange}
          searchButtonClicked={handleClick}
          onEnterKeyPress={handleKey}
        />
        <div className="current-location" onClick={getUserCoordinates}>
          <BiCurrentLocation />
          <span className="c-l">Current location</span>
        </div>
      </div>

      <div className="small-screen-nav">
        <div className="logo-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4814/4814489.png"
            alt="logo"
            autoFocus
            className="logo-img"
          />
          <h2 className="logo-title">weatherio</h2>
        </div>
        <div className="search-and-location">
          <Search
            onSearchContentChange={handleChange}
            searchButtonClicked={handleClick}
            onEnterKeyPress={handleKey}
          />
          <div className="current-location" onClick={getUserCoordinates}>
            <BiCurrentLocation className="gps-icon" />

            <span className="c-l">Current location</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
