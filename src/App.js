import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  render() {
    
    componentDidMount() {
      axios.get(/api/songs)  
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1> It's finna be lit, fam</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
