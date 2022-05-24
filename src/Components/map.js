import React from "react";
import pic from "./images/Map.jpeg";
import StatenData from "./StatenData";
import data from "./data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

//const data2 = [
//{ borough: "SI", earnings: 13000 },
//{ borough: "manhattan", earnings: 16500 },
// { borough: "queens", earnings: 14250 },
//{ borough: "bronx", earnings: 19000 }
//];

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
  let si = 0;
  let mh = 0;
  let q = 0;
  let br = 0;
  let bx = 0;
  data.forEach((item) => {
    if (item.borough == "STATEN ISLAND") {
      si++;
    }
    if (item.borough == "MANHATTAN") {
      mh++;
    }
    if (item.borough == "QUEENS") {
      q++;
    }
    if (item.borough == "BROOKLYN") {
      br++;
    }
    if (item.borough == "BRONX") {
      bx++;
    }
  });
  console.log(si);
  console.log(mh);
  console.log(q);
  console.log(br);
  console.log(bx);
  const data2 = [
    { boro: "si", crashes: si },
    { boro: "q", crashes: q },
    { boro: "mh", crashes: mh },
    { boro: "br", crashes: br },
    { boro: "bx", crashes: bx }
  ];

  return (
    <div className="Map">
      <VictoryChart>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["si", "q", "mh", "br", "bx"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          //tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
          data={data2}
          // data accessor for x values
          x="boro"
          // data accessor for y values
          y="crashes"
        />
      </VictoryChart>
    </div>
  );
}

export default Map;
