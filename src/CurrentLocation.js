import React, { useState } from "react";
import axios from "axios";
import CurrentData from "./CurrentData";

export default function CurrentLocation() {
  let [weatherData, setWeatherData] = useState({});

  navigator.geolocation.getCurrentPosition(getPosition);
  function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = "1fa04c70c5487af6b7c48dd7dfcb0b3f";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(DisplayData);

    function DisplayData(response) {
      let weatherimage = response.data.weather[0].icon;
      setWeatherData({
        cityName: response.data.name,
        icon: `http://openweathermap.org/img/wn/${weatherimage}@2x.png`,
        degree: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        clouds: response.data.clouds.all,
        date: response.data.dt,
      });
    }
  }
  return (
    <CurrentData
      cityName={weatherData.cityName}
      clouds={weatherData.clouds}
      degree={weatherData.degree}
      icon={weatherData.icon}
      description={weatherData.description}
      wind={weatherData.wind}
      humidity={weatherData.humidity}
    />
  );
}
