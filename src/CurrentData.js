import React from "react";
import "./CurrentData.css";

export default function CurrentData(props) {
  return (
    <div className="CurrentData">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <li className="cityName">{props.cityName}</li>
              <li className="emoji">
                ☀ <span className="degree">30°</span>
              </li>
              <li className="description">Description</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="data">
                Rain: <span className="rainData">72mm</span>
              </li>
              <li className="data">
                Wind: <span className="windData">30 km/h</span>
              </li>
              <li className="data">
                Humidiy: <span className="humidData">35%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
