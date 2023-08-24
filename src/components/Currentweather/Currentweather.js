import React from "react";
import "./currentweather.css";

const Currentweather = ({ currentWeather }) => {
  const { name, icon, description, temp, date } = currentWeather;

  return (
    <>
      <div className="current-container">
        <div className="top-details">
          <div className="details-container">
            <p>Now</p>
            <h2 className="temp-value">
              {temp} <span className="temp-unit">°C</span>
            </h2>
            <h5 className="details">{description}</h5>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="icon"
            className="icon-img"
          />
        </div>
        <hr />
        <div className="bot-details">
          <h5 className="bot-detail">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3239/3239948.png"
              className="calender"
              alt="icon"
            />
            <span className="details">{date}</span>
          </h5>
          <h5 className="bot-detail">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3082/3082383.png"
              className="location-icon"
              alt="icon"
            />
            <span className="details">{name}</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Currentweather;
