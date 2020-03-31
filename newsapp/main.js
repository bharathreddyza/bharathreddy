var btn = document.getElementById('form');
var input = document.querySelector('#search');
var appendToContainer  = document.getElementsByClassName('container')

btn.addEventListener('sumbit', doSearch)

function  doSearch(e){
    e.preventDefault()
   var inputValue = input.value
//    console.log(input.value)


var url = `https://newsapi.org/v2/top-headlines?country=${inputValue}&apiKey=adc74abeab2340f19450e7458d984a8e`
          console.log(url)
var xhr = new XMLHttpRequest();
xhr.open('GET',url , true)
// fetch(xhr)
//     .then(function(response) {
//         console.log(response.json());})
    
    xhr.onload = function(){
        if(this.status == 200 ){
      var card = document.createElement('div');
        // card.classList.add('class-list')
            // console.log(card)
            var data = JSON.parse(this.responseText)
            console.log(data)
        //  console.log(data.articles.length)
         for(var i =0 ; i < data.articles.length ; i++){
            card.innerHTML +=`<div class="card">
            <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.articles[i].title}</h5>
              <p class="card-text">${data.articles[i].description}</p>
              <p class="card-text"><small class="text-muted">this was published on ${data.articles[i].publishedAt}</small></p>
            </div>
          </div>`
         }
        //  JSON.stringify(card)
         console.log(card.innerHTML)
                    appendToContainer.innnerHTML += card

       
          // console.log(appendToContainer)
          return appendToContainer.innerHTML += card
        }console.log("thats not a valid country")
    } 

    xhr.send()
    

}

// Material Select


// json 
// javascript object notation 
// adc74abeab2340f19450e7458d984a8e
