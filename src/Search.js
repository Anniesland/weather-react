import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Conversion from "./Conversion";
import WeatherIcon from "./WeatherIcon";
import Newdate from "./Newdate";
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchPosition(position) {
    const apiKey = "fc432415aa7fe94fca563ee851cbde80";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function retreivePosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchPosition);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2 className="time">
                <li style={{ listStyleType: "none" }}>
                  <Newdate />
                </li>
              </h2>
              <br />
              <h1 id="defaultCity"> {weatherData.city} </h1>
              <div className="Search" onSubmit={handleSubmit}>
                <form id="Search">
                  <input
                    type="text"
                    id="city"
                    onChange={handleCityChange}
                    placeholder="enter city"
                    style={{ height: "28px", width: "140px" }}
                  />
                  <br />
                  <button
                    id="searchButton"
                    style={{ height: "30px", width: "70px" }}
                  >
                    {"SEARCH "}
                  </button>
                  <button
                    id="locationButton"
                    onClick={retreivePosition}
                    style={{ height: "30px", width: "70px" }}
                  >
                    {"LOCATION "}
                  </button>
                </form>
                <br />
              </div>
            </div>
            <div className="col-6 display">
              <div className="Tempdisp">
                  {" "}
                  <strong>
                    <br />
              <Conversion celcius={weatherData.temperature} /> </strong>{" "} 
              </div>
              <div className="detail">
                  <span id="humidity1">Humidity: {weatherData.humidity}%</span>
               <br />
                  <span id="wind1">Wind: {weatherData.wind}mph</span>
              </div>
              <p id="description">
                <em> {weatherData.description} <WeatherIcon code={weatherData.icon} /> </em>
              </p>
              <br />
            </div>
            <hr /> 
            <Forecast2 coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}