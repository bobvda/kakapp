// Express toevoegen aan Node.js
const express = require('express');
const app = express();

// bibliotheek inladen om paden naar folder te maken
const path = require('path');

// applicatiepoort instellen
const port = 3000;

// EJS configureren
app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

// databestand inladen >> HIER KOMT DATABANK ANTWERPEN
//const blogposts = require('./data/dataToilets.json');

// statische files toelaten in 'public-folder'
app.use(express.static('public'));

// route naar "homepagina" laten werken
app.get('/', function(req,res){
  res.render('home');
});

// route naar "overzicht" laten werken
app.get('/overzicht', function(req,res){
  res.render('overzicht');
});

// route naar "detailpagina" laten werken
app.get('/detail', function(req,res){
  res.render('detail');
});


// app luisteren naar applicatiepoort
app.listen(port);
