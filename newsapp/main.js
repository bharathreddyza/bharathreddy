
var formSelect = document.getElementById('inputGroupSelect01');
// var inputSearch = document.querySelector('#');
var appendToDataDiv  = document.getElementById('data')
loadEventListeners()
function loadEventListeners(){
    formSelect.addEventListener('change', doSearch)
}
function  doSearch(e){
    e.preventDefault()
    let inputValue = formSelect.value
    // console.log(inputValue)
    loadData(inputValue)
}
function loadData(inputValue){
    const  url = `https://newsapi.org/v2/top-headlines?country=${inputValue}&apiKey=adc74abeab2340f19450e7458d984a8e`
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url, true)
    xhr.onload = function(){
        if(this.status == 200 ){
            
            var data = JSON.parse(this.responseText)
            // console.log(data.articles[1].url)
            let articles = data.articles
            let output = ''
            articles.forEach(function(article){
                output += `<div class=" card col-md-4 p-1 " style="width:20rem" style="margin-right:5px , width: 1300px" >
                <a class = "contentlink" href=${article.url}>
  
                        <img src="${article.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body ">
                          <h5 class="card-title">${article.title}</h5>
                          <p class="card-text">${article.description}</p>
                          <p class="card-text"><small class="text-muted">this was published on ${article.publishedAt}</small></p>
                        </div>
                        </a>
                      </div>`
            })
            appendToDataDiv.innerHTML = output
    }
    }
    xhr.send()
}