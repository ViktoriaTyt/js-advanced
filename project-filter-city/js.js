const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(function (blob) {
        return blob.json();
    })
    .then(function (data) {
        cities.push(...data);
    });

function findMatches(text, cities) {
    return cities.filter(function (place) {
        return place.city.includes(text) || place.state.includes(text);
    })
}

function displayMatches() {
    removeText();
    let textInput = (this.value).split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    const matchArray = findMatches(textInput, cities);
    suggestions.innerHTML = matchArray.map(function (place) {
        return `
            <li>
                <span>${place.city} ${place.state}</span>
            </li>
        `
    }).join('');

    if((this.value).length === 0){
        suggestions.innerHTML = `<li>Filter for a city</li><li>or a state</li> `;
    }

    let reg = new RegExp(textInput,"g");
    let span = document.querySelectorAll('.suggestions span');
      span.forEach(function (item) {
          item.innerHTML = item.innerHTML.replace(reg, '<mark class="text_red">'+ textInput +'</mark>');
       })
}

function removeText(){
    const close = document.querySelector('.close');
    close.classList.add('active')
    close.addEventListener('click',function () {
        searchInput.value = ' ';
        suggestions.innerHTML = `<li>Filter for a city</li><li>or a state</li> `;
    })
}

searchInput.addEventListener('keyup', displayMatches);