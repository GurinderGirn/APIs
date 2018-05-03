//weather

var tempMode = 1;
function getWeather(lat, lon) {
    var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=7a96fdffbb70f3c9563bced5ca6a844e";

    $.ajax({
        url: apiURI,
        dataType: "json",
        type: "GET",
        async: "false",
        success: function(response) {

            $("#tempMode").on("click", function() {
                if (this.checked) {
                    $("#temp-text").html(cels.toFixed(1) + " C&deg");
                    console.log("checked");
                } else
                    $("#temp-text").html(fahr.toFixed(0) + " F&deg");
            });

            if (response.name) {
                $("#city-text").html(response.name + ", " + response.sys.country);
            }
            if (response.wind) {
                var knots = response.wind.speed * 1.9438445;
                $("#wind-text").html(knots.toFixed(1) + " Knots");
            }
            if (response.main.temp) {
                var fahr = (response.main.temp * 9 / 5) - 459.67;
                var cels = (response.main.temp - 273.15);
                if (cels > 24){
                    $("#temp-text").css("color", "red");
                } else if (cels < 18){
                    $("#temp-text").css("color", "blue");
                }
                $("#temp-text").html((tempMode === 1 ? fahr.toFixed(0) + " F&deg" : cels.toFixed(0) + " C&deg"));
            }
            if (response.weather) {
                var imgURL = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";

                $("#weatherImg").attr("src", imgURL);
                $("#weather-text").html(response.weather[0].description);
            }
        },
        error: function(response) {
            alert("Error: " + e);
            clearInterval(updateinter);
        }
    });
}