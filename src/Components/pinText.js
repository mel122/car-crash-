import React from "react";
import "../App.css";
import Map from "./Map.js";

function pin() {
  return (
    <div className="card-container">
      <div className="card-title">Staten Island</div>
      <p className="card-text description">Name</p>
      <p className="card-text lat-lon">Lat, Lon</p>
      <Map />
    </div>
  );
}

export default Map;
