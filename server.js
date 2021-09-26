// Express required to run app
const express = require("express");
const app = express();
const port = 3000;

// Const for API data
const pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override');

// MIDDLEWARE
// -------------------
var bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(methodOverride('_method'));

// INDEX
// -------------------
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { pokemon: pokemon });
});

// NEW
// -------------------
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});

// DESTROY
// -------------------
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
  });

// UPDATE
// -------------------
app.put('/pokemon/:id', (req, res) => {
	pokemon[req.params.id] = req.body;
    console.log(req.body);
    // req.body.stats = {
    //     hp: req.body.stats[0],
    //     attack: req.body.stats[1],
    //     defense: req.body.stats[2],
    //     spattack: req.body.stats[3],
    //     spdefense: req.body.stats[4],
    //     speed: req.body.stats[5],
    // }
	res.redirect('/pokemon');
});

// CREATE
// -------------------
app.post('/pokemon', (req, res) => {
    console.log(req.body);
    pokemon.push(req.body);
    res.redirect('/pokemon');
});

// EDIT
// -------------------
app.get('/pokemon/:id/edit', (req, res) => {
	res.render(
		'edit.ejs',
		{
			pokemon: pokemon[req.params.id],
			index: req.params.id,
		}
	);
});

// SHOW
// -------------------
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { 
        pokemon: pokemon[req.params.id] 
    });
});


// Express Web Server port - app.listen
app.listen(port, ()=>{
    console.log(`listening on port`, port);
});