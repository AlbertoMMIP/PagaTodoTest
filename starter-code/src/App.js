import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" >
            <Home/>
        </div>

      </div>
    );
  }
}

export default App;
