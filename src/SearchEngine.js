import React, { useState } from "react";
import "./SearchEngine.css";
import CurrentData from "./CurrentData";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [cityName, setCityName] = useState("City");
  let [clouds, setClouds] = useState("0");
  let [degree, setDegree] = useState("0");
  let [icon, setIcon] = useState("http://openweathermap.org/img/wn/01n@2x.png");
  let [description, setDescription] = useState("");
  let [wind, setWind] = useState("0");
  let [humidity, setHumidity] = useState("0");

  function sendCity(event) {
    event.preventDefault();
    let apiKey = "1fa04c70c5487af6b7c48dd7dfcb0b3f";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(DisplayCityData);

    function DisplayCityData(response) {
      let weatherimage = response.data.weather[0].icon;
      setIcon(`http://openweathermap.org/img/wn/${weatherimage}@2x.png`);
      setDegree(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(Math.round(response.data.wind.speed));
      setClouds(response.data.clouds.all);
    }

    setCityName(city);
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
        cityName={cityName}
        clouds={clouds}
        degree={degree}
        icon={icon}
        description={description}
        wind={wind}
        humidity={humidity}
      />
      ;
    </div>
  );
}
