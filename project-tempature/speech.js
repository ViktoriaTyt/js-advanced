//Краткая документация по чудо-коду  :)
// 1. в функции getCityData делаю запроос на  json файл, делаю парсинг и получаю  объект с городами и прочей инфой
// 2. после преобразования вызываю ф-цию trasformCityData и передаю data параметром
// 3. В trasformCityData прохожусь циклом по объекту пушу в массив только свойство name (города)
// 4. После результат выполнения recognition запускается ф-ция getWeatherData, которая делает fetch запро на API Weather.При ошибке циклом forEach перебираю массив
// и фильтрую методом includes вписанное(сказанное) слово в инпут и все города с масссива arrCity. Сравнение идёт по первым трем символам.
// 5. Подходящие элементы масива arrCity записываю в DOM, по которому можно будет кликнуть и перезаписать в инпут новое значение (строка 52 ф-ции getWeatherData)


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


/*function b() {
   var c = 8 + 8;
    a(c)
   return c;
}
b()
function a(param) {
    var number;
    return number = param + 8 ;
}

document.body.addEventListener('click', function () {
    //как тут получить результат функции а ???? чтоб дальше работать со значение переменной number
})*/


