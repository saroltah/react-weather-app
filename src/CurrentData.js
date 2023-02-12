import React from "react";
import "./CurrentData.css";
import ConvertDegree from "./ConvertDegree";

export default function CurrentData(props) {
  return (
    <div className="CurrentData">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ul className="basicInfo">
              <li className="cityName">{props.cityName}</li>
              <li className="emoji">
                <img src={props.icon} alt="icon" />{" "}
                <span className="degree">
                  <ConvertDegree defaultCelsius={props.degree} />
                </span>
              </li>
              <li className="description text-capitalize">
                {props.description}
              </li>
            </ul>
          </div>
          <div className="col-sm-6 details">
            <ul>
              <li className="data">
                Clouds: <span className="cloudData">{props.clouds}</span>%
              </li>
              <li className="data">
                Wind: <span className="windData">{props.wind}</span>km/h
              </li>
              <li className="data">
                Humidiy: <span className="humidData">{props.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
