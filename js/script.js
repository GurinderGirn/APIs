function initMap() {
    x = navigator.geolocation;
    x.getCurrentPosition(success, failure);
    function success(position){
        var mylat = position.coords.latitude;
        var mylang = position.coords.longitude;
        var coords = new google.maps.LatLng(mylat, mylang);
        var mapOptions = {
            center: coords,
            maptypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 13
        }
        var map = new google.maps.Map(document.getElementById('map'),mapOptions);
        var lat = document.getElementById("lat").innerHTML = mylat;
        var lng = document.getElementById("lng").innerHTML = mylang;
        getWeather(lat, lng);
        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var types = document.getElementById('type-selector');
        var strictBounds = document.getElementById('strict-bounds-selector');

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
            map: map,
            position: coords
        });

        autocomplete.addListener('place_changed', function () {
            //weather
            infowindow.close();
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            var places = place.formatted_address;
            var address = place.formatted_address;
            geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'address': address
            }, function (results, status) {
                var lat = document.getElementById("lat").innerHTML = results[0].geometry.location.lat();
                var lng = document.getElementById("lng").innerHTML = results[0].geometry.location.lng();
                var latval = results[0].geometry.location.lat();
                var latlang = results[0].geometry.location.lng()
                getWeather(latval, latlang);
            });

            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);  // Why 17? Because it looks good.
            }
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }

            infowindowContent.children['place-icon'].src = place.icon;
            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-address'].textContent = address;
            infowindow.open(map, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, types) {
            var radioButton = document.getElementById(id);
            radioButton.addEventListener('click', function () {
                autocomplete.setTypes(types);
            });
        }

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-address', ['address']);
        setupClickListener('changetype-establishment', ['establishment']);
        setupClickListener('changetype-geocode', ['geocode']);

        document.getElementById('use-strict-bounds')
            .addEventListener('click', function () {
                console.log('Checkbox clicked! New state=' + this.checked);
                autocomplete.setOptions({strictBounds: this.checked});
            });

    }
    function failure() {
        $('#error').append("<p>Co-ordinates not available!</p>");
    }


}
