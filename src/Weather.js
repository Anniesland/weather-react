import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  return (
    
    <div className="Weather">
           
          <Search defaultCity="Donegal" />

        <footer className="Footer"> <a href="https://github.com/Anniesland/weather-react"> Open source code</a> by Anniesland
        </footer>
        
    </div>
  );
}
