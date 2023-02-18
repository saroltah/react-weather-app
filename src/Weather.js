import React, { useState } from "react";
import "./Weather.css";
import CurrentData from "./CurrentData";
import axios from "axios";
import TimeDate from "./TimeDate";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function search() {
    const apiKey = "1fa04c70c5487af6b7c48dd7dfcb0b3f";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(DisplayCityData);
  }

  function sendCity(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function DisplayCityData(response) {
    setWeatherData({
      loaded: true,
      coord: response.data.coord,
      cityName: response.data.name,
      icon: response.data.weather[0].icon,
      degree: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      clouds: response.data.clouds.all,
      date: response.data.dt,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <form onSubmit={sendCity}>
                <input
                  type="search"
                  placeholder="Type a city"
                  className="placeholder"
                  onChange={updateCity}
                />
                <input type="submit" value="Search" className="submitButton" />
              </form>
            </div>
            <div className="col-sm-6 dateTime">
              <TimeDate date={weatherData.date} />
            </div>
          </div>
        </div>
        <CurrentData
          cityName={weatherData.cityName}
          clouds={weatherData.clouds}
          degree={weatherData.degree}
          icon={weatherData.icon}
          description={weatherData.description}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
        />
        <Forecast coord={weatherData.coord} icon={weatherData.icon} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
