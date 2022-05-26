import "bootstrap";
import map from "./images/Map.jpeg";
import data from "./data.js";
import React from "react";

function Cards(props) {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img src={map} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{this.state.props.on_street_name}</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
