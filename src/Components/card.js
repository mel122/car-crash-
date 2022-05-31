import "bootstrap";
import map from "./images/Map.jpeg";
import React from "react";
import "bootstrap";

function Cards(props) {
  console.log(props.data);
  return (
  
      <div class="col">
        <div class="card">
          <img src={map} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.data.on_street_name} </h5>
            <p> Crash Date: {props.data.crash_date} </p>
            <p class="card-text"> Crash Time: {props.data.crash_time} </p>
            <p class="card-text">
              Number of Persons Injured: {props.data.number_of_persons_injured}
            </p>
            <p class="card-text">
              Number of Persons Killed: {props.data.number_of_persons_killed}
            </p>
            <p class="card-title"> Car Type: {props.data.vehicle_type_code1} </p>
          </div>
        
      </div>
    </div>
  );
}

export default Cards;
