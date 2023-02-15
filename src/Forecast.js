import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function displayForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <span className="Day">Monday</span>
              <br />
              <span className="icon">Icon</span>
              <br />
              <span className="maxDegree">
                Math.round({forecastData[0].temp.max})°{" "}
              </span>{" "}
              <span className="minDegree">
                Math.round({forecastData[0].temp.min})°{" "}
              </span>
              <br />
            </div>
            <div className="col">
              <span className="Day">Monday</span>
              <br />
              <span className="icon">Icon</span>
              <br />
              <span className="maxDegree">30° </span>{" "}
              <span className="minDegree">0° </span>
              <br />
            </div>{" "}
            <div className="col">
              <span className="Day">Monday</span>
              <br />
              <span className="icon">Icon</span>
              <br />
              <span className="maxDegree">30°C </span>{" "}
              <span className="minDegree">0°C </span>
              <br />
            </div>{" "}
            <div className="col">
              <span className="Day">Monday</span>
              <br />
              <span className="icon">Icon</span>
              <br />
              <span className="maxDegree">30° </span>{" "}
              <span className="minDegree">0° </span>
              <br />
            </div>{" "}
            <div className="col">
              <span className="Day">Monday</span>
              <br />
              <span className="icon">Icon</span>
              <br />
              <span className="maxDegree">30° </span>{" "}
              <span className="minDegree">0° </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
