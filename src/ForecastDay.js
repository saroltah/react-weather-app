import React from "react";
import "./ForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let forecastDate = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[forecastDate.getDay()];
    return day;
  }
  return (
    <div className="ForecastDay">
      <span className="Day">{day()}</span>
      <br />
      <span className="icon">
        <WeatherIcon icon={props.data.weather[0].icon} />
      </span>
      <br />
      <span className="maxDegree degree">
        {Math.round(props.data.temp.max)}°{" "}
      </span>{" "}
      <span className="minDegree degree">
        {Math.round(props.data.temp.min)}°{" "}
      </span>
    </div>
  );
}
