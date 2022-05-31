import "bootstrap";
import React from "react";

const onClick = () => {
  window.scroll({
    bottom: document.body.scrollHeight,
    left: 0,
    behavior: "smooth"
  });
};

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Staten Island Crash Locations
        </span>
        <button
          onClick={onClick}
          type="button"
          className="btn btn-outline-info"
        >
          Go to Graph
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
