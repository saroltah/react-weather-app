import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import "./ConvertDegree.css";

export default function ConvertDegree(props) {
  const celsius = props.defaultCelsius;
  const fahrenheit = Math.round(celsius * 1.8 + 32);
  let [unit, setUnit] = useState(celsius);

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit(fahrenheit);
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit(celsius);
  }

  if (unit === null) {
    return unit;
  } else {
    if (unit === celsius) {
      return (
        <div className="ConvertDegree">
          <span className="currentDegree"> {unit}</span>
          °C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </div>
      );
    } else {
      return (
        <div className="ConvertDegree">
          <span className="currentDegree"> {unit}</span>
          <a href="/" onClick={convertCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </div>
      );
    }
  }
}
