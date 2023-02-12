import React from "react";
import "./TimeDate.css";

export default function weatherData(props) {
  let currentDate = new Date(props.date * 1000);
  let hours = currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let date = currentDate.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  return (
    <div>
      <span className="updated"> Last updated: </span>
      <br />
      {year}. {month}. {date}.
      <br />
      {day}
      <br />
      {hours}:{minutes}
    </div>
  );
}
