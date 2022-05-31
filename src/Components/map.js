import data from "./data.js";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import React from "react";

function Map(props) {
  //map for borough
  let si = 0;
  let mh = 0;
  let q = 0;
  let br = 0;
  let bx = 0;
  data.forEach((item) => {
    if (item.borough === "STATEN ISLAND") {
      si++;
    }
    if (item.borough === "MANHATTAN") {
      mh++;
    }
    if (item.borough === "QUEENS") {
      q++;
    }
    if (item.borough === "BROOKLYN") {
      br++;
    }
    if (item.borough === "BRONX") {
      bx++;
    }
  });
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
