import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Playlist from './Components/Playlist';

import fireGIF from './images/fire.gif';
import editPNG from './images/edit.png';
import trashPNG from './images/trash.png';

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
  
  handleArtistInput(value) {
    this.setState ({
      artistName: value,
    });  
  }
  
  handleAlbumInput(value) {
    this.setState ({
      albumName: value
    });  
  }
  
  handleSongInput(value) {
    this.setState ({
      songName: value
    })  
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
  
  handleAddSong() {
    const bodyObj = {
      artist: this.state.artistName,
      album: this.state.albumName,
      song: this.state.songName
    }  
    
    axios.post('/api/playlist', bodyObj) 
    .then(response => {
      console.log(response);
      this.setState({
        playlist: response.data
      })
    })
    
    this.setState({
      artistName: '',
      albumName: '',
      songName: ''
    })
  }

  
  render() {
    let mappedPlaylist = this.state.playlist.map((eachSongObj) => {
      return (
        <div className="mapped-playlist">
          <Playlist key={eachSongObj.index} song={eachSongObj} />
          <img className="edit-image" src={editPNG} alt="edit" />
          <img className="trash-image" src={trashPNG} alt="trash" />
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
            <input 
            onChange={(e) => this.handleArtistInput(e.target.value)}
            value={this.state.artistName}
            placeholder="Artist" />
            <input 
            onChange={(e) => this.handleAlbumInput(e.target.value)}
            value={this.state.albumName}
            placeholder="Album" /> 
            <input 
            onChange={(e) => this.handleSongInput(e.target.value)}
            value={this.state.songName}
            placeholder="Song" /> 
            
            <button className="this-button" 
            onClick={() => this.handleAddSong()}
            >
            Add to Playlist
            </button>
        
          </main>
          
          <div >
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
