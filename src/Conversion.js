import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion(props) {

  const [unit, setUnit] = useState("celcius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelcius (event) {
        event.preventDefault();
        setUnit("celcius")
    }

    if (unit === "celcius"){
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celcius)}</span>
                <span className="unit">°C  | <a href="/" onClick={showFahrenheit}><span className="Off">°F </span></a> </span>
            </div>  
        );
    } else {
        let fahrenheit = (props.celcius * 9) / 5 +32;
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit)}</span>
                <span className="unit"><a href="/" onClick={showCelcius}><span className="Off">°C</span></a> | °F </span>
            </div>
        );       
    }
}