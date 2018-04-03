$(document).ready(function() {
    $("#weather-card").hide();

    $("#search").on("click", function() {
        var city = $("#search-city").val().trim();
        var apiKey = "AIzaSyBUNDE4VXEvdHZQxgGQt3BeVhBAxHmDzcs";

        var $map = $("#map");
        $map.attr("width", 600);
        $map.attr("height", 450);
        $map.attr("style", "border:0");
        $map.attr("src", "https://www.google.com/maps/embed/v1/place?key=" + apiKey + "&q=" + city);

        $("#weather-card").show();

    });
});