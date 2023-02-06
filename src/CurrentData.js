import React from "react";
import "./CurrentData.css";

export default function CurrentData() {
  return (
    <div className="CurrentData">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <li>CityName</li>
              <li>emoji and Degree</li>
              <li>Description</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Rain</li>
              <li>Wind</li>
              <li>Humidity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
