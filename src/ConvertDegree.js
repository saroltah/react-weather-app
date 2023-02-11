import React from "react";

export default function ConvertDegree() {
  return (
    <div className="ConvertDegree">
      <a href="/" onClick={convertCelsius}>
        °C
      </a>
      /
      <a href="/" onClick={convertFahrenheit}>
        F
      </a>
    </div>
  );
}
