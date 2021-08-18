let weather = {
    apiKey: "5a1bf8388be4d30bb8e08bbbe2e40c87",
fetchWeather: function (city) {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid="
        + this.apiKey 
    )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        
    }
};



weather.fetchWeather("denver")