import React from "react";
import FormattedData from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="currentTemperatureSection">
        <h1>{props.data.country}</h1>
        <div className="row mt-3 ">
          <div className="col-6 ">
            <div className="clearfix ">
              <div className="icon">
                <WeatherIcon code={props.data.icon} size={57} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <ul>
            <div className="left-description">
              <li>
                <FormattedData date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </div>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <div className="right-description">
              <li>Humidity: {Math.round(props.data.humidity)}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
