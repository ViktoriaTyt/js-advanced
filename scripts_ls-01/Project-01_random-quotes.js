var p = document.querySelector('.text-quote');
var button = document.querySelector('button');

var quotes = ['А вы знаете, у зимы есть свой запах — запах чудес и сказок!',
    'Поднимаешь голову к небу: облака посыпают мир ванильным сахаром.',
    'Зима — лучшее время для возвращения в детство. Когда идёт снег, мы снова чувствуем себя детьми.',
    'Зима — это надежда. Зима – это звон тонкого хрусталя под бой курантов. Зима — это мягкие варежки и снежки. Зима – это мандарины и хурма…',
    'Запасайтесь любимыми — зима близко…',
    'Пусть у каждого в эту зиму случится что-то незабываемое.',
    'Скоро мужчины будут наряжать елки, а настоящие мужчины своих женщин.',
    'Проживи три месяца зимы и получи четвёртый в подарок!'];

function getRandomQuote(){
    var getNumber = getRandomNumber(0, quotes.length);
    p.innerHTML = quotes[getNumber]
    console.log('p, button') //рандомная цитата тут
}
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
getRandomQuote()
button.addEventListener('click', getRandomQuote)