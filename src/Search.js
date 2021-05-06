import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="Search">
        <input
          type="text"
          id="city"
          placeholder="enter city"
          style={{ height: "30px", width: "140px" }}
        />

        <br />
        <button id="searchButton">{"search "}</button>
      </form>
    </div>
  );
}