import React, { Component } from "react";
import interactiveMap from "./Components/interactiveMap.js";
import Navbar from "./Components/navbar.js";
import Cards from "./Components/card.js";
import "bootstrap";
import "./App.css";
import data from "./Components/data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addToBoroughCount = (Borough) => {
    console.log("STATEN ISLAND");
    this.setState((data) => {
      this.state.staten.push("STATEN ISLAND");
      return this.state.staten;
    });
    console.log(this.state.staten);
  };

  //<Borough ={this.state.staten}/>

  //data.forEach((data) => {
  // console.log(data.borough);
  //});

  // === "STATEN ISLAND") {
  // bdata += 1;
  // }

  // counters = { STATEN ISLAND: 0, BROOKLYN: 0, QUEENS:0, MANHATTAN:0,BRONX:0 };

  // <Rows counters ={data[0]} /> {data.map((counters) => {  return <Rows counters={counters} />;})}
  //map ()

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Staten Island Crash Locations 2022</h1>
        <Cards />
      </div>
    );
  }
}
export default App;
