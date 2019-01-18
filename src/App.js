import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import fireGIF from './images/fire.gif';
import Playlist from './Components/Playlist';


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
    axios.get('/api/playlist')
    .then(response => {
      console.log(response.data)
      this.setState ({
        playlist: response.data
      })  
    })  
  }
  
  render() {
    let mappedPlaylist = this.state.playlist.map((eachSongObj) => {
      return (
        <div className="mapped-playlist">
          <Playlist key={eachSongObj.index} song={eachSongObj} />
          <br />
        </div>
      )
    })
    
    if (this.state.playlist.length) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="title">It's finna be lit, fam</h1>
            <img className="fire-pic" src={fireGIF} alt="fire" />
          </header>
          
          <main className="middle">
            <h2>Add a new song to your playlist:</h2>
            <input placeholder="Artist" />
            <input placeholder="Album" /> 
            <input placeholder="Song" /> 
            <button className="this-button" >Add to Playlist</button>
          </main>
          
          <div>
            {mappedPlaylist}  
          </div>
          
          <footer className="foot">
            <p> © 2019 LitFam, Inc. </p>
          </footer>
          
        </div>
      );    
    }
    
    else {
      return (
        <div className="nothing-here">
          <img className="fire-pic-too" src={fireGIF} alt="fire" />
          <button className="click-lit" 
            onClick={() => this.handleGetPlaylist()}
          >
          Click for Lit
          </button>
        </div>
      )
    }
  }
}

export default App;
