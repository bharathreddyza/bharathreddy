var btn = document.getElementById('button');
var input = document.querySelector('#search');
btn.addEventListener('click', doSearch)

function  doSearch(e){
    e.preventDefault()
//    var inputValue = input.value
   console.log(input.value)
}

// Material Select


// json 
// javascript object notation 
// adc74abeab2340f19450e7458d984a8e

var url = "http://newsapi.org/v2/top-headlines?" +
`country=${input.value }&` +
'apiKey=adc74abeab2340f19450e7458d984a8e';
          console.log(url)
var xhr = new XMLHttpRequest();
xhr.open('GET',url , true)
// fetch(xhr)
//     .then(function(response) {
//         console.log(response.json());})
    
    xhr.onload = function(){
        if(this.status == 200 ){
            var data = JSON.parse(this.responseText)
         console.log(data.articles[0])
        var card = `<div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>`

        }
    }

    xhr.send()
    