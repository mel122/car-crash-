import React, { Component } from "react";
import Map from "./Components/map.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Staten Island Crash Locations 2022</h1>
        <Map />
      </div>
    );
  }
}

export default App;
