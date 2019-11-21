/*
 *locatie gebruiker bepalen
 */
navigator.geolocation.getCurrentPosition(function(location) {
var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

/*
 *initiaisatie
 */
//openen op vaste locatie
//var mymap = L.map("mapid").setView([51.219496, 4.401636], 18); //coordinates + zoom

//openen op huidige locatie
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
        iconSize:     [50,50],
        iconAnchor:   [25,25],
        popupAnchor:  [0,-25],
    }
});

// Afbeelding linken aan custom item

var toiletIcon = new LeafIcon({iconUrl: '/./leaflet/toiletIcon.png'});

// WC iconen ter voorbeeld

var hangOutOne = L.marker([51.2016242,4.458387799999969], {icon: toiletIcon}).addTo(mymap).bindPopup("Aanklikbare link");
var hangOutTwo = L.marker([51.2171919,4.421446100000026], {icon: toiletIcon}).addTo(mymap).bindPopup("Aanklikbare link");
var hangOutThree = L.marker([51.22789390000001,4.405467499999986], {icon: toiletIcon}).addTo(mymap).bindPopup("Aanklikbare link");
var marker = L.marker(latlng).addTo(mymap).bindPopup("Huidige locatie");

//testen
//for (var i = 0; i < data_toiletten.features.length; i++){
//console.log("naam: " + data_toiletten.features[i].attributes.naam);
//console.log("coord: " + data_toiletten.features[i].geometry.x + ", " + data.features[i].geometry.y);
//}

});
