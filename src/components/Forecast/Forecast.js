import React from "react";
import "./forecast.css";

const Forecast = ({ forecast }) => {
  const { icon, description, date, temp } = forecast;

  return (
    <div>
      <div className="forecast-container">
        <div className="forecast-details">
          <h4>{date}</h4>
          <h5>{description}</h5>
        </div>
        <h5>
          {temp} <span className="temp-unit">°C</span>
        </h5>
        <div className="icon-container">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="icon"
            className="f-icon-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Forecast;
