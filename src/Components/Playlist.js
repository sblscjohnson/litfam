import React, {Component} from 'react';



class Playlist extends Component {

  render() {
    return(
      <div>
        <h3>Artist: {this.props.song.artistName}</h3>
        <h3>Album: {this.props.song.albumName}</h3>
        <h3>Song: {this.props.song.songName}</h3>
        

      </div>
    )
  }
}

export default Playlist;