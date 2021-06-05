const express = require('express');
const cors = require('cors');
const lyricsFinder = require('lyrics-finder');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/search',
        clientId: '870aaff6b58d45c7966b777713414204',
        clientSecret: '0765c26e2f024ee0b0de5bdf369cdcdf'
    })


    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({ 
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expiresIn,
        })
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    })
})


app.get('/lyrics', async function(req,res){
    const lyrics = await lyricsFinder(req.query.artist, req.query.track) || "No Lyrics Found";
    res.json({lyrics});
})


app.listen(3001);