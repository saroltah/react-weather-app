import React from "react";
import "./CurrentData.css";
import ConvertDegree from "./ConvertDegree";
import WeatherIcon from "./WeatherIcon";

export default function CurrentData(props) {
  return (
    <div className="CurrentData">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <ul className="basicInfo">
              <li className="cityName">{props.cityName}</li>
              <li className="emoji">
                <WeatherIcon icon={props.icon} />
                <div className="degree">
                  <ConvertDegree defaultCelsius={props.degree} />
                </div>
              </li>
              <li className="description text-capitalize">
                {props.description}
              </li>
            </ul>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-6">
            <ul className="details">
              <li className="data">
                Clouds: <span className="cloudData">{props.clouds}</span> %
              </li>
              <li className="data">
                Wind: <span className="windData">{props.wind}</span> km/h
              </li>
              <li className="data">
                Humidiy: <span className="humidData">{props.humidity}</span> %
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
