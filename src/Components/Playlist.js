import React from 'react';

let Playlist = (props) => {
  return(
    <div>
      <h3>Artist: {props.song.artistName}</h3>
      <h3>Album: {props.song.albumName}</h3>
      <h3>Song: {props.song.songName}</h3>
    </div>
  )
}

export default Playlist;