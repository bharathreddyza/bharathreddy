var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementsByClassName("colorDisplay");
var he =document.getElementById("he");

var messageDisplay =document.querySelector("#message");
var h1 =document.querySelector("#h1");
var resetButton = document.querySelector("#reset");
var easyBtn =document.querySelector("#easyBtn");
var hardBtn =document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares =3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    he.textContent = pickedColor;

    colorDisplay.textContent = pickedColor;
    for(var i =0;i < squares.length; i++){
       if(colors[i]){
           squares[i].style.background = colors[i];
       }else{
           squares[i].style.display ="none" ;
       }
    }


});


hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    he.textContent = pickedColor;

    numberOfSquares =6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0;i < squares.length; i++){
      
           squares[i].style.background = colors[i];
       
           squares[i].style.display ="block" ;
       }
    }
    
);

resetButton.addEventListener("click", function(){
   //generate all new colors 
   colors =generateRandomColors(numberOfSquares);

   //pick new random color
   pickedColor = pickColor();
   he.textContent = pickedColor;

   //change colordisplay to match picked color
   colorDisplay.textContent =pickedColor;
   messageDisplay.textContent ="";
   this.textContent = "new color";
   //change colors of squares 
   for(var i = 0 ;i < squares.length; i++){
       squares[i].style.background =colors[i];
   }
      h1.style.background = "rgb(38, 149, 168)";
})

colorDisplay.textContent = pickedColor;
he.textContent = pickedColor;


for(i=0; i < squares.length; i++){
    // add initial colors to swquares

    squares[i].style.background = colors[i];
// add clicklisteners to squares 
    squares[i].addEventListener("click", function(){
        //grab color of the clicked color
      var clickedColor = this.style.background;
      //compare the color to pickedColor 
      if(clickedColor ===pickedColor){
          messageDisplay.textContent ="correct !";
          resetButton.textContent ="play again?";
          changeColors(clickedColor);
          h1.style.background =clickedColor;
      } else{
          this.style.background ="#232323";
          messageDisplay.textContent ="try again"
      }
  
  
  
    });
}

function changeColors(colors){
    // loop through all colors
    for(var i = 0 ;i < squares.length; i++){
        //change all colors to the correct colors
        squares[i].style.background =colors;

    }
}
function pickColor(){
  var random =  Math.floor(Math.random() * colors.length); 
  return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = []
    //add num random colors to array
     for(var i =0;i< num; i++){
         //get random color and push into arr
         arr.push(randonColor())

     }
    //return thr array
    return arr;
}

function randonColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() *256);
    //pick green from 0-255
    var g = Math.floor(Math.random() *256);
    //pick blue from 0-255 
    var b = Math.floor(Math.random() *256);
      return  "rgb(" + r + ", " + g + ", " + b + ")"
}

