import React, { useState } from "react";
import "./ConvertDegree.css";

export default function ConvertDegree(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.defaultCelsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="ConvertDegree">
        <span className="currentDegree">{props.defaultCelsius}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="ConvertDegree">
        <span className="currentDegree">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
