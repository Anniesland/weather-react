import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  return (
    
    <div className="Weather">
           
          <Search defaultCity="Donegal" />
       
    </div>
  );
}
