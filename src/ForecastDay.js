import React from "react";

export default function ForecastDay(props) {
  function day() {
    let forecastDate = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[forecastDate.getDay()];
    return day;
  }
  let weatherImage = props.data.weather[0].icon;
  let icon = `http://openweathermap.org/img/wn/${weatherImage}@2x.png`;
  return (
    <div className="ForecastDay">
      <span className="Day">{day()}</span>
      <br />
      <span className="icon">
        <img src={icon} alt="icon" />{" "}
      </span>
      <br />
      <span className="maxDegree">
        {Math.round(props.data.temp.max)}°{" "}
      </span>{" "}
      <span className="minDegree">{Math.round(props.data.temp.min)}° </span>
    </div>
  );
}
