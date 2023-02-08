import React, { useState } from "react";
import "./SearchEngine.css";
import CurrentData from "./CurrentData";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [cityName, setCityName] = useState("Oslo");

  function handleSubmit(event) {
    event.preventDefault();
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
          <div className="col">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a city"
                className="placeholder"
                onChange={updateCity}
              />
              <input type="submit" value="Search" className="submitButton" />
            </form>
          </div>
          <div className="col dateTime">
            <span>Time</span>
            <br />
            <span>Date</span>
          </div>
        </div>
      </div>
      <CurrentData cityName={cityName} />;
    </div>
  );
}
