import React from "react";
import "./Weather.css";
import Search from "./Search";
import Conversion from "./Conversion";
import Tempdisp from "./Tempdisp";


export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
          <div className="col-2"> </div>
        <div className="col-3">
          <h2 className="time">
            Sunday
            <br />
            07/02/2020
            <br />
            13:00
          </h2>
          <br />
          <h1 id="cityDisplay">Derry</h1>
          <Search />
        </div>
        <div className="col-2">
          <Tempdisp />
          <Conversion />
              <ul class="detail" style={{ listStyleType: "none" }}>
            <li>
              Humidity:
              <span id="humidity1">94%</span>
            </li>
            <li>
              Wind:
              <span id="wind1">10mph</span>
            </li>
          </ul>
          </div>

          <div className="col-5">
          
         ☔
          <img src="" alt="" id="icon" />
<br />
<br />
          <p id="description1">
            <em> Light rain showers </em>
          </p>
        </div>
      </div>
    </div>
  );
}
