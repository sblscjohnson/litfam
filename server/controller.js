let playlist = [
  { 
    Artist: 'Taylor Swift',
    Album: 'Reputation',
    Song: 'Look What You Made Me Do'
  },
  
  {
    Artist: 'Childish Gambino',
    Album: 'Camp',
    Song: 'Bonfire'
  },
  
  {
    Artist: 'Chelsea Lee Greenwood',
    Album: 'Slime Rancher Soundtrack',
    Song: '1,000 Light Years Away'  
  }
]

module.exports = {
  getPlaylist: (req, res) => {
    res.status(200).send(playlist)    
  }
  
}
