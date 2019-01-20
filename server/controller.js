let playlist = [
  { 
    artistName: 'Taylor Swift',
    albumName: 'Reputation',
    songName: 'Look What You Made Me Do',
    index: 1
  },
  
  {
    artistName: 'Childish Gambino',
    albumName: 'Camp',
    songName: 'Bonfire',
    index: 2
  },
  
  {
    artistName: 'Chelsea Lee Greenwood',
    albumName: 'Slime Rancher Soundtrack',
    songName: '1,000 Light Years Away',
    index: 3
  }
]

module.exports = {
  getPlaylist: (req, res) => {
    console.log(playlist)
    res.status(200).send(playlist)    
  },
  
  addSong: (req, res) => {
    let index = playlist[playlist.length-1].index+1
    
    let newSong = {
      artistName: req.body.artist,
      albumName: req.body.album,
      songName: req.body.song,
      index: index  
    };
    
    playlist.push(newSong)
    res.status(200).send(playlist)
  },
  
}
