import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Currentweather from "./components/Currentweather/Currentweather";
import Forecast from "./components/Forecast/Forecast";
import Highlights from "./components/Highlights/Highlights";

const App = () => {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const [forecast, setForecast] = useState("");
  const [moreDetails, setMoreDetails] = useState("");
  const apiKey = "aedad2a53644a99d72136eb2fc6e9e9b";

  function getCityCoordinates(city) {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.length) {
          alert("Location noy found");
        } else {
          const { lat, lon } = data[0];
          fetchWeather(lat, lon);
        }
      });
  }

  function getUserCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude);
    });
  }

  function fetchWeather(latitude, longitude) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => displayWeather(data));
  }

  function displayWeather(data) {
    const uniqueForecastdays = [];
    const forecasts = [];

    const fiveForecastDate = data.list.filter((forecast) => {
      const forecastdate = new Date(forecast.dt_txt).getDate();
      return !uniqueForecastdays.includes(forecastdate)
        ? uniqueForecastdays.push(forecastdate)
        : false;
    });
    fiveForecastDate.forEach((weatherItem, index) => {
      if (index !== 0) {
        const date = new Date(weatherItem.dt_txt).toDateString();
        const { icon, description } = weatherItem.weather[0];
        const { temp } = weatherItem.main;

        forecasts.push({ date, icon, description, temp });
      } else {
        const { name } = data.city;
        const { temp } = weatherItem.main;
        const date = new Date(weatherItem.dt_txt).toDateString();
        const { icon, description } = weatherItem.weather[0];
        const { sunrise, sunset, country } = data.city;
        const { feels_like, temp_min, temp_max, pressure, humidity } =
          weatherItem.main;
        const { visibility } = weatherItem;
        const { speed } = weatherItem.wind;

        setCurrentWeather({ name, temp, icon, description, date });
        setMoreDetails({
          feels_like,
          temp_min,
          temp_max,
          pressure,
          humidity,
          sunrise,
          sunset,
          country,
          speed,
          visibility,
        });
      }
    });
    setForecast(forecasts);
  }

  function handleCityChange(newCity) {
    setCity(newCity);
    getCityCoordinates(newCity);
  }

  return (
    <div>
      <Navbar
        onCityChange={handleCityChange}
        getUserCoordinates={getUserCoordinates}
      />
      <main>
        <div className="sidebar">
          {currentWeather && (
            <aside>
              <Currentweather city={city} currentWeather={currentWeather} />
            </aside>
          )}
          {forecast.length > 0 && (
            <aside className="forecast-data">
              {forecast.map((item, index) => (
                <Forecast key={index} forecast={item} />
              ))}
            </aside>
          )}
        </div>
        <div className="highlights">
          {moreDetails && <Highlights moreDetails={moreDetails} />}
        </div>
      </main>
    </div>
  );
};

export default App;
