var button = document.querySelector('.button') 
var inputValue = document.querySelector('.inputValue')
var nameValue = document.querySelector('.nameValue')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var highlow = document.querySelector(".highlow")

button.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c9a6dcba08cc3596ab4edce33b79a8a3')

.then(response => response.json())
.then(data =>    {
    // console.log(data.name)
     var namegive = data.name;
     var temperature = data.main.temp;
     var description = data.weather[0].description;
     var Highlow = `${ data.main.temp_max } ${data.main.temp_min}`
console.log(nameValue.innerHTML)

   nameValue.innerHTML = namegive;
   temp.innerHTML = temperature;
   desc.innerHTML = description
   highlow.innerHTML = Highlow;
})

.catch(err => alert("wrong city name"))
})



