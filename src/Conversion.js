import React from "react";
import "./Conversion.css";

export default function Conversion() {
  return (
    <div className="Conversion">
      <form id="convert-form">
        <button
          type="image"
          src="./Fbutton.png"
          alt="F"
          width="30"
          height="30"
          id="fConvert"
        >
          {"ºF"}{" "}
        </button>
        
        <button
          type="image"
          src="./Cbutton.png"
          alt="C"
          width="30"
          height="30"
          id="cConvert"
        >
          {"ºC"}{" "}
        </button>
      </form>
    </div>
  );
}
