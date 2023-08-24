import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
import { fetchData } from "../../api";

export const Search = ({
  onSearchContentChange,
  searchButtonClicked,
  onEnterKeyPress,
}) => {
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [active, setActive] = useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onSearchContentChange(newValue);
    setActive(true);
  };

  useEffect(() => {
    if (value === "") {
      setSearchData([]);
    } else {
      const timeOut = setTimeout(() => {
        fetchData(value).then((response) => {
          setSearchData(response.data);
        });
      }, 1000);
      return () => clearTimeout(timeOut);
    }
    handleInteraction("click", value);
  }, [value]);

  useEffect(() => {
    if (searchData.length === 0) {
      setActive(false);
    }
  }, [searchData]);

  const handleClick = (name) => {
    setValue(name);
    onSearchContentChange(name)
    setActive(false);
  };

  const searchClick = () => {
    searchButtonClicked();
    setActive(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnterKeyPress();
      setActive(false);
      handleInteraction("key", "Enter");
    }
  };

  const handleInteraction = (interactionType, value) => {
    if (
      interactionType === "click" ||
      (interactionType === "key" && value === "Enter")
    ) {
      setActive(false);
    }
  };

  return (
    <div className="search-bar-container">
      <div
        className="search-bar"
        style={
          searchData.length !== 0 && active
            ? { borderRadius: "25px 25px 0 0" }
            : { borderRadius: "25px" }
        }
      >
        <input
          type="text"
          placeholder="search"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={searchClick}>
          <FaSearch className="search-button" />
        </button>
      </div>
      {searchData.length !== 0 && active && (
        <div className="results-container">
          {searchData.map((item, key) => (
            <div
              key={key}
              className="result-item"
              onClick={() => handleClick(item.name)}
            >
              <p className="suggestion-content">
                {item.name}, {item.countryCode}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
