import React from "react";
import pic from "./images/Map.jpeg";
import data from "./data";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

//import React, { Component } from "react";
//import "./App.css";

//class App extends Component {
// constructor(props) {
//  super(props);
//  this.state = {
// Add data state here
//    data: []
//  };
// }

// Code your API request here
//componentDidMount = () => {
//  fetch(
//   " data"
//   )
// .then((response) => response.json())
//  .then((data) => {
//     this.setState({ data: data });
//  console.log(this.state.data);
//   })
//   .catch((e) => {
//    console.log(e);
//   });
// };

//let bData = {

// STATEN ISLAND;
//};

function Map() {
  //map for borough

  return (
    <div className="Map">
      <VictoryChart>
        <VictoryAxis tickValues={["STATEN ISLAND"]} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x} mil`} />

        <VictoryBar data={data} x="borough" y="crash_time" />
      </VictoryChart>
    </div>
  );
}

export default Map;
