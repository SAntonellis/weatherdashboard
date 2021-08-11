let weather = {
    "apiKey": "5a1bf8388be4d30bb8e08bbbe2e40c87",
fetchWeather: function () {
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=1d7834557dcbeac19bc089229fef749e").then((response) => response.json())
    .then((data) => console.log(data));
}
}

weather.fetchWeather()