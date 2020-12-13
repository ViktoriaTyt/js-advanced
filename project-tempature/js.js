var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var currentWeatherDetails = document.getElementById('current-weather-details');
var getWeatherButton = document.getElementById('get-weather');
var getWeatherByCity = document.querySelector('.btn-temperature');
var inputCity = document.querySelector('.city-indicators input');
var preloader = document.querySelector('.preloader');
var urlAPI,generalWeather;
function getLocationCoords() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            urlAPI = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=b4f2447b3b05c86e015a35a9e833b87a';
            getWeatherData();
        })
    } else {
        alert('Your browser does not support Navigator API');
    }
}

async function getWeatherData() {
    loader()
    const response = await fetch(urlAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
            console.log(data)
        })
    let result = end();
    result = await response;
    displayWeatherColor(generalWeather);
}

function loader() {
     preloader.innerHTML = 'data download started';
}
function end() {
     preloader.innerHTML = 'data download finished';
}

function displayData(data) {
    temperature.innerText = kToC(data.main.temp) + ' C';
    humidity.innerText = data.main.humidity + '%';
    pressure.innerText = data.main.pressure + ' mmHg.';
    windSpeed.innerText = data.wind.speed + ' м/с';
    generalWeather = data.weather[0].main;
    console.log(generalWeather);
}

function displayWeatherColor(name) {
    switch(name){
        case 'Clouds':
            currentWeatherDetails.setAttribute('style', 'background-color:#6f3cc552;transition:background-color 2.0s;')
            break;
        case 'Thunderstorm':
            currentWeatherDetails.setAttribute('style', 'background-color:#8c849a;')
            break;
        case 'Drizzle':
            currentWeatherDetails.setAttribute('style', 'background-color:#668eb0;')
            break;
        case 'Rain':
            currentWeatherDetails.setAttribute('style', 'background-color:#85beee;')
            break;
        case 'Snow':
            currentWeatherDetails.setAttribute('style', 'background-color:#b2c6dd;')
            break;
        case 'Atmosphere':
            currentWeatherDetails.setAttribute('style', 'background-color:#b8c3cf;')
            break;
        case 'Clear':
            currentWeatherDetails.setAttribute('style', 'background-color:#dfcbc1;')
            break;
        default:
            console.log(`no BG`);
    }
}

function kToC(k) {
    return Math.round(k - 273);
}

function getIndicatorsCity() {
    var city = inputCity.value;
    if(city){
        urlAPI = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b4f2447b3b05c86e015a35a9e833b87a';
        getWeatherData();
    }else{
        alert("Please, enter city")
    }
}
getWeatherButton.addEventListener('click', getLocationCoords);
getWeatherByCity.addEventListener('click', getIndicatorsCity);