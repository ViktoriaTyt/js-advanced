var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var currentWeatherDetails = document.getElementById('current-weather-details');
var getWeatherButton = document.getElementById('get-weather');
var getWeatherByCity = document.querySelector('.btn-temperature');
var inputCity = document.querySelector('.city-indicators input');
var preloader = document.querySelector('.preloader');
var words = document.querySelector('.words');
var errorCity = document.querySelector('.error-name');
var nameCity = document.getElementById('name-city');
var possibleName = document.querySelector('.possible-name');
var body = document.querySelector('body');
var arrCity = [];
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
            errorCity.innerHTML = ' '
            displayData(data);
        })
        .catch(function (error) {
            errorCity.innerHTML = 'Say correct city!'
            var valInput = inputCity.value;
            var arr = [];
            arrCity.forEach(function (item) {
                var i;
                for(i = 0; i < 3; i+=1){
                    if(valInput.includes(item[i])){
                        arr.push(item)
                        possibleName.innerHTML = arr[0];
                    }
                    return false
                }
            })
            possibleName.addEventListener('click', function (e) {
                var target = e.target;
                inputCity.value = possibleName.textContent;
            })
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
    nameCity.innerText =  data.name;
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

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;
var speechCity;
recognition.addEventListener('result', function (event) {
    //getCityData()
    inputCity.innerText = Array
        .from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (result) {
            console.log(result.transcript)
            speechCity = result.transcript;
            if(speechCity === 'lol'){
                getIndicatorsCity()
                speechCity = ' ';
            }
            return speechCity;
        })

    if(event.results[0].isFinal) {
        inputCity.value  =  speechCity;
    }
})

recognition.addEventListener('end', recognition.start);
recognition.start();

 function getCityData() {
    fetch('https://raw.githubusercontent.com/ViktoriaTyt/js-advanced/main/project-tempature/city.list.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        trasformCityData(data)
    })
    .catch(function (error) {
        console.log('error')
    })
}
getCityData()

function trasformCityData(data) {
    for(let key in data){
        var nameCity = data[key].name;
        arrCity.push(nameCity)
    }
    return arrCity;
}


