import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation.js";
import Weather from "./components/Weather.js"; 


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Weather />
        <div className="container">
          <h1>Welcome to CodeLikeRichard</h1>
        </div>
      </div>
    );
  }
}

export default App;
