const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller')

const app = express();
app.use(bodyParser.json())

app.get('/api/playlist', ctrl.getPlaylist)

app.post('/api/playlist', ctrl.addSong)

app.put('/api/playlist/:id', ctrl.editSong)

app.delete('/api/playlist/:id', ctrl.deleteSong)

app.listen(4000, () => console.log('4000 finna be lit, fam'))