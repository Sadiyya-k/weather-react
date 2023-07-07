import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>England</h1>
      <ul>
        <li>Friday 10:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="Clear Sky"
          />
          15°C
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 10%</li>
            <li>Humidity: 35%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
