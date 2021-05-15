import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Conversion from "./Conversion";
import Newdate from "./Newdate";

export default function Search(props) {
    let [city, setCity] = useState("");
    let [temperature, setTemperature] = useState("");
    let [description, setDescription] = useState("");
    let [humidity, setHumidity] = useState("");
    let [wind, setWind] = useState("");
    

    function handleResponse(response) {
     setTemperature(response.data.main.temp);
     setDescription(response.data.weather[0].description);
     setHumidity(response.data.main.humidity);
     setWind(response.data.wind.speed);
     new Date(response.data.dt * 1000);
    }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
  const apiKey = "fc432415aa7fe94fca563ee851cbde80";
  let apiUrl =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }


  return (
    <div className="Weather">
      <div className="container">
      <div className="row">
        <div className="col-6" >
          <h2 className="time">
          <li style={{ listStyleType: "none" }}>
          <Newdate />
          
        </li>
        </h2>
          <br />
          <h1 id="defaultCity"> {city} </h1>
         
    <div className="Search"  onSubmit={handleSubmit}>
      <form id="Search">
        <input
          type="text"
          id="city"
          onChange={handleCityChange}
          placeholder="enter city"
          style={{ height: "30px", width: "100px" }}
        />

        <br />
        <button id="searchButton"
        style={{ height: "30px", width: "50px" }}>{"search "}</button>
      </form>
        </div>
          </div>

        <div className="col-6 display">
            <div className="Tempdisp">
      <p> <strong>{Math.round(temperature)} ºC </strong> </p>
    </div>
    <Conversion />
    
              <ul class="detail" style={{ listStyleType: "none" }}>
            <li>
            
              <span id="humidity1">Humidity: {humidity}%</span>
            </li>
            <li>
             
              <span id="wind1">Wind: {wind}mph</span>
            </li>
          </ul>
        

<br />
          <p id="description">
            <em> {description} </em>
          </p>
        
      </div>
      </div>
      </div>
      </div>
      
  );
  }