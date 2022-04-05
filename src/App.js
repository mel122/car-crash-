import React, { Component } from "react";
import Map from "./Components/map.js";
import pin from "./Components/pinText.js";
import Accordion from "./Components/Accordion.js";
import "bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Staten Island: 5 Crash Site Locations</h1>
        <Map />
        <pin />
        <Accordion />
      </div>
    );
  }
}

export default App;
