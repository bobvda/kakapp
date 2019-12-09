
//openen map

var mymap = L.map("mapid").fitWorld();

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

// Routing toevoegen

L.Routing.control({
  waypoints: [
    L.latLng(51.229940, 4.415600),
    L.latLng(51.218754, 4.416905)
  ]
}).addTo(mymap);


// Isotope script

var iso = new Isotope( '.collapse', {
  itemSelector: '.overzichtslijst',
  layoutMode: 'fitRows',
  getSortData: {
  }
});


var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}



//FILTERFUNCTIES

// bind filter button click
var filters = document.querySelector('.filter-by-button-group');
filters.addEventListener( 'click', function( event ) {

  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
});
