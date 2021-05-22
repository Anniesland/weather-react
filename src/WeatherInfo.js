import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherInfo(props) {
   return (
   <div>
      <div className="row description">
        {props.data.description}
      </div>
      <div className="row description">

      </div>
      <div className="row" id="other-info">
  <WeatherIcon code={props.data.icon} size={12} />

                <div className="column current-data">
                  <ul className="information">
                    <li className="row info maxMin" id="wind">
                      {props.data.min_temp} to {props.data.max_temp}°C
                    </li>
                    <li className="row info windSpeed" id="wind">
                        {Math.round(props.data.wind)} km/h
                    </li>
                    <li className="row info humidity" id="hum">
                       {props.data.humidity}%
                    </li>
                    
                  </ul>
                </div>

              </div>

   </div>
   );
}