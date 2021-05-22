import React from "react";
import "./Forecast2.css";
import axios from "axios";

export default function Forecast2(props) {
 
  function handleResponse(response) {
    console.log(response.data);
  }

    let apiKey = "fc432415aa7fe94fca563ee851cbde80";
      let latitude = props.coordinates.lat;
      let longitude = props.coordinates.lon;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
  
  return (
    <div className="Forecast2">
      <div className="row">
          <div className="col-2"> </div>
        <div className="col-3">
          <h3>
            <em> Forecast </em>
          </h3>
        </div>
        <div className="col-4">
          <ul className="forecast" style={{ listStyleType: "none" }}>
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





