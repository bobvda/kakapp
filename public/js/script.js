/*
 *locatie gebruiker bepalen
 */
navigator.geolocation.getCurrentPosition(function(location) {
var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

/*
 *initiaisatie
 */

var mymap = L.map("mapid").setView([51.219496, 4.401636], 18); //coordinates + zoom
// activering
var basicmap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	id: 'mapbox.streets',
	apikey: '9ca3811048a94fedb11d6c701bde8bc3',
	maxZoom: 22
}).addTo(mymap);


// Custom icon aanmaken

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [40,40],
        iconAnchor:   [20,20],
        popupAnchor:  [0,-20],
    }
});

var greenIcon = new LeafIcon({iconUrl: 'tentGreen.png'}),
    blueIcon = new LeafIcon({iconUrl: 'tentBlue.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'tentOrange.png'});



// HANGOUTS
var hangOutOne = L.marker([51.2016242,4.458387799999969], {icon: greenIcon}).addTo(mymap).bindPopup("Bij Flor en Kaat."); //Flor en Kaat in Deurne
var hangOutTwo = L.marker([51.2171919,4.421446100000026], {icon: blueIcon}).addTo(mymap).bindPopup("Op de trein."); //Centraal Station
var hangOutThree = L.marker([51.22789390000001,4.405467499999986], {icon: orangeIcon}).addTo(mymap).bindPopup("Story Urban Deli Shop");
var marker = L.marker(latlng).addTo(mymap).bindPopup("U bevindt zich hier");

});
