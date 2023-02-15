import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <span className="Day">Monday</span>
            <br />
            <span className="icon">Icon</span>
            <br />
            <span className="maxDegree">30° </span>{" "}
            <span className="minDegree">0° </span>
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
}
