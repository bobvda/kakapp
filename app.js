//KAKAPP

// Express toevoegen aan Node.js
const express = require('express');
const app = express();
const request = require('request');

// bibliotheek inladen om paden naar folder te maken
const path = require('path');

let port = process.env.PORT;
if (port == null || port == ""){
	port = 3000;
}
app.listen(port);

// EJS configureren
app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

// databestand inladen >> HIER KOMT DATABANK ANTWERPEN
//const blogposts = require('./data/dataToilets.json');

// statische files toelaten in 'public-folder'
app.use(express.static('public'));


// route naar "homepagina" laten werken
app.get('/', function(req,res){
  res.render('home', {
		data: data;
	});
});

// route naar "overzicht" laten werken
app.get('/overzicht', function(req,res){
  res.render('overzicht', {
		data: data;
	});
});

// route naar "detailpagina" laten werken
app.get('/detail/:postid', function(req,res){
  res.render('detail', {
		post: blogposts.blog[req.params.postid],
    postId: req.params.postid, //wat is het ID van de post die ik nu aan het bekijken ben
    lastPostId: blogposts.blog.length-1 //hoeveel blogposts heb ik in totaal? (-1 want we beginnen tellen bij 0)
	});
});

//test of server draait
console.log("De server draait op poort: "+port);

//var aanmaken global scope
var data;

//databank linken
request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/8/query?where=1%3D1&outFields=TYPE,STADSEIGENDOM,BETALEND,STRAAT,HUISNUMMER,POSTCODE,DOELGROEP,INTEGRAAL_TOEGANKELIJK,LUIERTAFEL,OPENINGSUREN_OPM,X_COORD,Y_COORD,OMSCHRIJVING,ID,CATEGORIE,DISTRICT,CONTACTPERSOON&outSR=4326&f=json',
function(error, response, body){ //MapServer/636/query?where=1%3D1&outFields=id,naam,straat,huisnummer,postcode&outSR=4326&f=json'
  data = JSON.parse(body);
	console.log(data.features);
  console.log("Databank connected!")
	/*for(var i=0; i < data_toiletten.features.length; i++) {
			console.log("naam: " + data_toiletten.features[i].attributes.naam);
			console.log("coord: " + data_toiletten.features[i].geometry.x + ", " + data.features[i].geometry.y);
			console.log(data_toiletten.features[i].attributes); */
}
);

//heroku: in app.js poort variable
//        in package.json: start: wat moet er opstarten als app wordt geladen in heroku?

//ericitation(?)
