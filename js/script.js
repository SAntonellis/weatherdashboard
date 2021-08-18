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
        document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = "Current conditions: " + description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " m/ph";
    }
};



weather.fetchWeather("wellington")