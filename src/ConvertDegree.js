import React, { useState } from "react";
import "./ConvertDegree.css";

export default function ConvertDegree(props) {
  const defaultDegree = props.defaultDegree;
  let [currentDegree, setCurrentDegree] = useState(defaultDegree);

  function convertFahrenheit(event) {
    event.preventDefault();
    setCurrentDegree(defaultDegree * 1.8 + 32);
  }

  function convertCelsius(event) {
    event.preventDefault();
    setCurrentDegree(defaultDegree);
  }

  return (
    <div className="ConvertDegree">
      <span className="currentDegree">{currentDegree}</span>
      <a href="/" onClick={convertCelsius}>
        °C
      </a>{" "}
      /{" "}
      <a href="/" onClick={convertFahrenheit}>
        F
      </a>
    </div>
  );
}
