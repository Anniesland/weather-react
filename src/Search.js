import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Conversion from "./Conversion";
import Newdate from "./Newdate";
import WeatherInfo from "./WeatherInfo";
import Forecast2 from "./Forecast2";


export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
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
          <h1 id="defaultCity"> {weatherData.city} </h1>
         
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
      <WeatherInfo data={weatherData} />
        <Forecast2 coordinates={weatherData.coordinates} />
        </div>
          </div>

        <div className="col-6 display">
            <div className="Tempdisp">
      <p> <strong>{Math.round(weatherData.temperature)} ºC </strong> </p>
    </div>
    <Conversion />
    
              <ul className="detail" style={{ listStyleType: "none" }}>
            <li>
            
              <span id="humidity1">Humidity: {weatherData.humidity}%</span>
            </li>
            <li>
             
              <span id="wind1">Wind: {weatherData.wind}mph</span>
            </li>
          </ul>
        

<br />
          <p id="description">
            <em> {weatherData.description} </em>
          </p>
        
      </div>
      </div>
      </div>
      </div>
      
  );
  }