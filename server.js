// Express required to run app
const express = require("express");
const app = express();
const port = 3000;

// Const for API data
const pokemon = require('./models/pokemon.js');

// MIDDLEWARE
// -------------------
var bodyParser = require('body-parser');
app.use(express.static('public'))

// INDEX
// -------------------
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { pokemon: pokemon });
});

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { pokemon: pokemon[req.params.id] });
});

// NEW
// -------------------

// DESTROY
// -------------------

// UPDATE
// -------------------

// CREATE
// -------------------

// EDIT
// -------------------

// SHOW
// -------------------

// Express Web Server port - app.listen
app.listen(port, ()=>{
    console.log(`listening on port`, port)
});