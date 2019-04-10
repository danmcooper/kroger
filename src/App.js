import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Categories from "./components/categories";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Kroger Demo</h1>
        <hr />
        <Categories />
      </React.Fragment>
    );
  }
}

export default App;
