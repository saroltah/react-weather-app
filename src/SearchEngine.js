import React, { useState } from "react";
import "./SearchEngine.css";
import CurrentData from "./CurrentData";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({});

  function sendCity(event) {
    event.preventDefault();
    let apiKey = "1fa04c70c5487af6b7c48dd7dfcb0b3f";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(DisplayCityData);

    function DisplayCityData(response) {
      let weatherimage = response.data.weather[0].icon;
      setWeatherData({
        cityName: response.data.name,
        icon: `http://openweathermap.org/img/wn/${weatherimage}@2x.png`,
        degree: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        clouds: response.data.clouds.all,
      });
    }
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
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
            <span>Time</span>
            <br />
            <span>Date</span>
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
      ;
    </div>
  );
}
