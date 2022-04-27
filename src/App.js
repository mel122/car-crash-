import React, { Component } from "react";
import Map from "./Components/map.js";
import "bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  counters = {
  STATEN ISLAND: 0,
BROOKLYN: 0,
QUEENS:0,
MANHATTAN:0,
BRONX:0
  };


  <Rows counters ={data[0]} />
  {data.map((counters) => {
    return <Rows counters={counters} />;
  })}
  //map ()


  render() {
    return (
      <div className="App">
        <Navbar/>
        <h1>Staten Island Crash Locations 2022</h1>
        <Map />
      </div>
    );
  }
}
export default App;
