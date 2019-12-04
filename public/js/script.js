
//openen map
var mymap = L.map("mapid").fitWorld();
//coordinates + zoom



//openen op huidige locatie
mymap.locate({setView: true, maxZoom: 17});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);

//error als geolocatie is mislukt
function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);

// activering
var basicmap = L.tileLayer('https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	id: 'mapbox.streets',
	apikey: '9ca3811048a94fedb11d6c701bde8bc3',
	maxZoom: 20
}).addTo(mymap);

// Custom icon aanmaken

var LeafIcon = L.Icon.extend({
	iconUrl: 'toiletIcon.png',
    options: {
        iconSize:     [150,150],
        iconAnchor:   [25,25],
        popupAnchor:  [0,-25],
    }
});

// Afbeelding linken aan custom item

var toiletIcon = new LeafIcon({iconUrl: '/./leaflet/images/toiletIcon.png'});
