let playlist = [
  { 
    artistName: 'Taylor Swift',
    albumName: 'Reputation',
    songName: 'Look What You Made Me Do',
    id: 1
  },
  
  {
    artistName: 'Childish Gambino',
    albumName: 'Camp',
    songName: 'Bonfire',
    id: 2
  },
  
  {
    artistName: 'Chelsea Lee Greenwood',
    albumName: 'Slime Rancher Soundtrack',
    songName: '1,000 Light Years Away',
    id: 3
  },
]

module.exports = {
  getPlaylist: (req, res) => {
    
    res.status(200).send(playlist)    
  },
  
  addSong: (req, res) => {
    let index = playlist[playlist.length-1].id+1
    let newSong = {
      artistName: req.body.artist,
      albumName: req.body.album,
      songName: req.body.song,
      id: index
    };

    playlist.push(newSong)
    res.status(200).send(playlist)
  },


  editSong: (req,res) => {
    let {songName} = req.body;
    let newID = req.params.id;

    let song = playlist.find((element) => {
      return element.id === +newID
    })
    
    song.songName = songName

    res.status(200).send(playlist);
  },
  
  deleteSong: (req, res) => {
    playlist = playlist.filter((song) => {
      return (req.params.id !== ":" + song.id)
    })
    
    console.log(playlist)
    res.status(200).send(playlist)
  }
}
