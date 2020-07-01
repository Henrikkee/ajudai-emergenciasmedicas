var map;
var infowindow;
var myPos;
var myMark;
function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log(lat, lng)
    myPos = {lat: lat, lng: lng};
    map.setCenter(new google.maps.LatLng(lat, lng));

    var pyrmont = new google.maps.LatLng(lat, lng);
    infowindow = new google.maps.InfoWindow();
    var request = {
        location: pyrmont,
        radius: 5000,
        types: ['hospital', 'health'] // this is where you set the map to get the hospitals and health related places
    };
    myMark = new google.maps.Marker({
        map: map,
        position: pyrmont
    });
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        $( ".hospital-list" ).find('li').remove()
        for (var i = 0; i < results.length; i++) {
            if(i < 3) $( ".hospital-list" ).append( "<li>"+results[i].name+"</li>" );
            createMarker(results[i]);
        }
    } else console.log(status)
    myMark.setMap(null);
}
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    // console.log(haversine_distance(marker, myMark), place.name)

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function initAutocomplete() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        mapTypeId: 'roadmap',
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    input.value = 'hospital'
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });
    getLocation();

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log('Returned place contains no geometry');
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

function haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
}
$(function () {
    getLocation();
});