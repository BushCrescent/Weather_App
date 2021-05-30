// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("api.openweathermap.org/data/2.5/weather?q=San%20Diego&appid=451e4a2460f2107ab9d665f5f96771d1", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

var apiKey = "451e4a2460f2107ab9d665f5f96771d1";

document.querySelector("#submit-btn").addEventListener("click", function() {
    //capture user input
    var userInput = document.querySelector("#search").value;

    //generate Weather info
    currentWeather(userInput);
});

var currentWeather = function(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`).then(function(res) {
        return res.json(res)
    }).then(function(data) {
        console.log(data);

        var template = `
            <div class="card">
                <div class="card-body">
                    <h2 class="h3 card-title">
                        ${data.name} (${new Date().toLocaleDateString()})
                        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}" class="weather-img">
                    </h2>
                    <p class="card-text">Temp: ${data.main.temp}°F</p>
                    <p class="card-text">Wind: ${data.wind.speed} MPH</p>
                    <p class="card-text">Humidity: ${data.main.humidity} %</p>
                </div>
            </div>
        `;

        document.querySelector(".current-weather").innerHTML = template;
    });
}