// main forecast

let weather = {
    apiKey: "5a1bf8388be4d30bb8e08bbbe2e40c87",
fetchWeather: function (city) {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid="
        + this.apiKey 
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name + ",";
        document.querySelector(".country").innerText = country;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " m/ph";
        document.querySelector(".weather").classList.remove("weather");
    },







// adding search function
search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
}

};



document.querySelector(".button").addEventListener("click", function() {
    weather.search();
});

    //making it search on hitting enter
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
  
});


