import "bootstrap";
import React, { Component } from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Staten Island Crash Locations</span>
        <button onClick="onClick" type="button" class="btn btn-outline-info">
          Go to Graph
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
