import React from "react";
import "./Forecast1.css";

export default function Forecast1() {
  return (
    <div className="Forecast1">
      <div className="row">
          <div className="col-2"> </div>
        <div className="col-3">
          <h3>
            <em> Forecast </em>
          </h3>
        </div>
        <div className="col-4">
          <ul class="forecast" style={{ listStyleType: "none" }}>
            <li id="projection1"> 🌀 Monday</li>
            <li id="projection2"> 🌞 Tuesday</li>
            <li id="projection3"> ☀  Wednesday</li>
            <li id="projection4"> 🌡  Thursday</li>
            <li id="projection5"> 🌈 Friday</li>
          </ul>
        </div>
        <footer className="Footer"> <a href="https://github.com/Anniesland/weather-react"> Open source code</a> <br /> by Anniesland
        </footer>
      </div>
    </div>
  );
}
