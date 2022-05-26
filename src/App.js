import React, { Component } from "react";
import Navbar from "./Components/navbar.js";
import Cards from "./Components/card.js";
import Map from "./Components/map";
import "bootstrap";
import "./App.css";
import data from "./Components/data.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      foundData: []
    };
  }

  handleData = (data) => {
    this.setState({ foundData: data });
  };

  //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$$app_token=yJglS9h953MLBYNHJC4EDB4Q0&borough=STATEN%20ISLAND

  addToBoroughCount = (Borough) => {
    console.log("STATEN ISLAND");
    this.setState((data) => {
      this.state.staten.push("STATEN ISLAND");
      return this.state.staten;
    });
    console.log(this.state.staten);
  };

  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$$app_token=yJglS9h953MLBYNHJC4EDB4Q0&borough=STATEN%20ISLAND"
    )
      .then((reponse) => response.json())
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((e) => {
        alert(e);
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Staten Island Crash Locations 2022</h1>
        {this.state.data.map((data) => (
          <Cards data={data} />
        ))}

        <Map handleData={this.handleData} />
      </div>
    );
  }
}

export default App;
