<!--About Website -->
<div class="container my-2">
    <div class="row col-md-12 justify-content-center">
        <h1 class="text-info">Current Weather and Forecasts in your City</h1>
        <p class="text-info">Looking for current temperature and weather conditions in your city or any other location?</p>
        <p class="text-dark text-center">Get current weather for your city.
            Weather Report shows precipitation, clouds, pressure, wind around specified location.
            Search a location with autocomplete option in google maps.
            This website is built with integration of Google Maps API(with GeoLocation), Places API(with AutoComplete search) and Weather API(OpenWeatherMap).</p>
    </div>
</div>


<!-- map and weather outer container -->
<div class="container mt-2">
    <!--row div-->
    <div class="row col-md-12">
        <!-- section for map with autocomplete search-->
        <section class="col-md-6 mr-2 mb-2 border border-light" >
            <div class="pac-card" id="pac-card">
                <div>
                    <div id="title" class="text-center">
                        AutoComplete Search
                    </div>
                    <div id="type-selector" class="pac-controls">
                        <input type="radio" name="type" id="changetype-all" checked="checked">
                        <label for="changetype-all">All</label>

                        <input type="radio" name="type" id="changetype-establishment">
                        <label for="changetype-establishment">Establishments</label>

                        <input type="radio" name="type" id="changetype-address">
                        <label for="changetype-address">Addresses</label>

                        <input type="radio" name="type" id="changetype-geocode">
                        <label for="changetype-geocode">Geocodes</label>
                    </div>
                    <div id="strict-bounds-selector" class="pac-controls">
                        <input type="checkbox" id="use-strict-bounds" value="">
                        <label for="use-strict-bounds">Strict Bounds</label>
                    </div>
                </div>
                <div id="pac-container">
                    <input id="pac-input" type="text"
                           placeholder="Enter a location">
                </div>
            </div>
            <!--MAP -->
            <div id="map"></div>
            <!--info window of search -->
            <div id="infowindow-content">
                <img src="" width="16" height="16" id="place-icon">
                <span id="place-name"  class="title"></span><br>
                <span id="place-address"></span>
            </div><!--info window of search end-->
        </section>
        <!--map ends -->
        <!--weather section -->
        <section class="col-md-5 border border-light" >
            <!--weather report -->
            <div class=" m-1 row jumbotron col-md-12">
                <div class="row col-md-12 border-bottom border-light">
                    <h3 class="text-center text-primary">Weather Report</h3>
                </div>
                <!--Location -->
                <div class=" row col-md-12" id="city">
                    <h4 class="text-primary">Location: <span class="text-info" id="city-text"></span> </h4>
                </div>
                <!--rain/snow/cloudy -->
                <div class="row col-md-12 " id="weather">
                    <img src="" id="weatherImg" class="center-block offset-5">
                    <h4 class="text-info offset-4" id="weather-text"></h4>
                </div>
                <!-- Temperature-->
                <div class="row col-md-12 " id="temp">
                    <h4 class="text-primary">Temperature: <span class="text-center  mr-4" id="temp-text"></span></h4>
                    <div class="checkbox text-center">
                        <label><input type="checkbox" id="tempMode" value="2">
                            <span class="text-primary">C&deg<span>
                        </label>
                    </div>
                </div>
                <!--Wind Speed -->
                <div class="row col-md-12 " id="wind">
                    <h4 class="text-primary">Wind Speed: <span class="text-info" id="wind-text"></span></h4>
                </div>
            </div>
            <!--latitude and longitude of address -->
            <div class="card my-2 p-2 bg-light">
                <h3 class="card-title text-primary">Location Co-ordinates:</h3>
                <div class="card-text text-info">Latitude: <span id="lat"></span></div>
                <div class="card-text text-info">Longitude: <span id="lng"></span></div>
            </div>
        </section><!--weather section -->
    </div><!--row div-->
</div><!-- map and weather outer container -->



<!-- script files -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>

<script src='js/script.js'></script>
<script src='js/weather.js'></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOvCjWG37BnesX4rNIyEm3e-RHN7GuZgY&libraries=places&callback=initMap"
        async defer></script>