

/*
function reversrString(str){
    var reversedStr = '';
    var i,
    size = str.lenght-1;
    for (i = size; i >= 0; i -= 1){
        reversedStr+= str[i]
    }
    return reversedStr;
}

console.log(reversrString('hello'))
*/


var p = document.querySelector('.text-quote');
var button = document.querySelector('button');

var quotes = ['1','2','3'];

function getRandomQuote(){
    console.log('p, button') //рандомная цитата тут
}
getRandomQuote()
button.addEventListener('click', getRandomQuote)
console.log(p, button)