const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const arr = []

function getUrl(name){
    let urlAPI = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + this.value + '&api-key=qOMBXdNEBI2mObNVLR5rvHhzoCaYfbab';
    getArticle(urlAPI)
   return urlAPI
}

function getArticle(url){
    fetch(url)
        .then((response)=>  response.json())
        .then((data) =>  displayData(data));
}

function displayData(data){
    let allData;
    for( let prop in data){
        allData = data[prop].docs;
    }
    suggestions.innerHTML = allData.map(function (abstract) {
        let date = abstract.pub_date.split('-').join('.').substr(0,abstract.pub_date.indexOf("T"));
        let multimedia = abstract.multimedia[0].url || 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';

        return `
            <div class="wrapper">
            <a href="${abstract.web_url}" target="_blank">
                 <img src="https://static01.nyt.com/${multimedia}" alt="image">
                    <span class="first-content">
                         <span class="desk">${abstract.news_desk}</span>
                         <span class="date">${date}</span>
                         <span class="sectionName">${abstract.section_name}</span>
                    </span>
                   
                    <span class="paragraph">${abstract.snippet}</span>
               </a>
            </div>
        `
    }).join('');
}

searchInput.addEventListener('keyup', getUrl);
