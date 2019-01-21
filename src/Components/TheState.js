import React, {Component} from 'react';
import axios from 'axios';
import Playlist from './Playlist';
import Header from './Header';
import Elsescreen from './Elsescreen'


import editPNG from './../images/edit.png';
import trashPNG from './../images/trash.png';


class TheState extends Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      artistName: '',
      albumName: '',
      songName: '',
      // id: 0,
    }   
  }

  handleGetPlaylist() {
    axios.get('/api/playlist')
    .then(response => {
      // console.log(response.data)
      this.setState ({
        playlist: response.data
      })  
    })  
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
  
  
  handleAddSong() {
    
    const bodyObj = {
      artist: this.state.artistName,
      album: this.state.albumName,
      song: this.state.songName,
      id: this.state.index
    }  
    
    axios.post('/api/playlist', bodyObj) 
    .then(response => {
      // console.log(response);
      this.setState({
        playlist: response.data
      })
    })

    this.setState({
      artistName: '',
      albumName: '',
      songName: '',
    })
  }


  handleChange(value) {
    this.setState({ 
      songName: value
    })
   }

  handleEditSong(id) {
    let bodyObj = {
     songName: this.state.songName
    }
    console.log('id', id)
    axios.put(`/api/playlist/${id}`, {songName: this.state.songName})
    .then((response) => {
      this.setState ({
        playlist: response.data
      })
    })
    this.setState({
      songName: ''
    })
  }
  
  handleDeleteSong(id) {
    // console.log(id)
    axios.delete(`/api/playlist/:${id}`)
    .then(response => {
      // console.log(response);
      this.setState({
        playlist: response.data
      })
    })
  }

  render() {
    let mappedPlaylist = this.state.playlist.map((eachSongObj) => {
      return (
        <div className="mapped-playlist">
          <Playlist key={eachSongObj.index} song={eachSongObj} />
          <div className="modify-pictures">
            <div>
              <input 
                className="edit-input" 
                placeholder="Edit Song Name"
                onChange={(e) => this.handleChange(e.target.value)}
                
              />
              <img 
                className="edit-image" 
                src={editPNG} 
                alt="edit" 
                onClick={() => this.handleEditSong(eachSongObj.id)}
              />  
            </div>
            <div className="delete-big">
            
              <img 
              className="trash-image" 
              src={trashPNG} 
              alt="trash" 
              onClick={() => this.handleDeleteSong(eachSongObj.id)}
              />
            </div>
          </div>
        </div>
      )
    })
    
    if (this.state.playlist.length) {
      return (
        <div className="App">
          <Header />
          
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
          <Elsescreen /> 
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

export default TheState