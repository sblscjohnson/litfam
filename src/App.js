import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import fireGIF from './images/fire.gif';


class App extends Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      artistName: '',
      albumName: '',
      songName: ''
    }   
  }
  
  handleGetPlaylist() {
    axios.get('http://localhost:4000/api/playlist')
    .then(response => {
      this.setState ({
        playlist: response.data
      })  
    })  
  }
  
  render() {
    
    if (!this.state.playlist.length) {
      return (
        <div className="nothing-here">
          <img className="fire-pic" src={fireGIF} alt="fire" />
          <button className="click-lit" onClick={() => this.handleGetPlaylist()}>Click for Lit</button>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <div className="App-header">
            <h1 className="title">It's finna be lit, fam</h1>
            <img className="fire-pic-too" src={fireGIF} alt="fire" />
          </div>
          <div className="middle">
            <h2>Add a new song to your playlist:</h2>
            <input placeholder="Artist" />
            <input placeholder="Album" /> 
            <input placeholder="Song" /> 
            <button className="add-button" >Add to Playlist</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
