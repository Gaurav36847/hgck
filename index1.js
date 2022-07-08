let apiKey = "9bfab854aba545be845be5d2c4c5acfb";
// source = 'bbc-news'
source = 'the-times-of-india'
// source = 'bbc-news'
// https://newsapi.org/v2/top-headlines?country=in&apiKey=API_KEY

fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${'9bfab854aba545be845be5d2c4c5acfb'}`)
// fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&category=business&apiKey=${apiKey}`)

.then(response => response.json())
.then(json => {
    console.log(json);
    console.log(json.articles);
    let article = json.articles;
    article.forEach((element) => {
        // console.log(element.description)
        console.log(element.article)
   
    let newsContainer = document.querySelector('.newsContainer1')
    let newsTitle = element.title;
    let newsContent = element.content;
    let newsSource = element.source.name;
    let imgUrl = element.urlToImage;
    let Url = element.url;
    console.log(Url)
    // let img = `${images/breaking-news-img.webp}`
    

    let newsHtml = `
            <div class="card mb-3">
            <img src=${imgUrl} width="100%" alt="">
            <div class="card-body">
            <h5 class="card-title">${newsTitle}</h5>
            <p class="card-text">${newsContent}  <a href="${Url}" target="_blank" >Read more here</a></p>
           
            
            </div>
            
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Source: <strong> ${newsSource}</strong></li>
            </ul>
           
        
        
        </div>
`

newsContainer.innerHTML += newsHtml
});
console.log(article)
})

