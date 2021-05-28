import "./Forecast2.css";
import React, {useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}

if (loaded) {

return (
 <div class-name="WeatherForecast">
   <div className="row WeatherForecast-box">
      <div className="col day-box">
              <WeatherForecastDay data={forecast[1]} /></div>
      <div className="col day-box">
              <WeatherForecastDay data={forecast[2]} /></div>
      <div className="col day-box">
              <WeatherForecastDay data={forecast[3]} /></div>
              </div >
              <div className="row WeatherForecast-box2">
      <div className="col day-box">
              <WeatherForecastDay data={forecast[4]} /></div>
      <div className="col day-box">
              <WeatherForecastDay data={forecast[5]} />
      </div>
   </div>
 </div>
);

} else {

let apiKey = "fc432415aa7fe94fca563ee851cbde80";
let latitude = props.coordinates.lat;
let longitude = props.coordinates.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    

return null;

} 
}





