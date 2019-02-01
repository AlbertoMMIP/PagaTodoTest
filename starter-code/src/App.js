import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Paga Todo Test</h1>
        </header>
        <div className="container" >
            <Home/>
        </div>

      </div>
    );
  }
}

export default App;
