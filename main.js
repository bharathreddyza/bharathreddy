function getNewColor(){
    var symbols, color;

    symbols = "0123456789ABCDEF"

    color = "#"


for(var i = 0;i < 6; i++){
    color += symbols[Math.floor(Math.random() *16)];
}
document.body.style.backgroundColor = color;
document.getElementById('hex').innerHTML = color;
}


// const docStyle = document.documentElement.style
// const aElem = document.querySelector('a')
// const boundingClientRect = aElem.getBoundingClientRect();

// aElem.onmousemove = function(e) {

// 	const x = e.clientX - boundingClientRect.left
// 	const y = e.clientY - boundingClientRect.top
	
// 	const xc = boundingClientRect.width/2
// 	const yc = boundingClientRect.height/2
	
// 	const dx = x - xc
// 	const dy = y - yc
	
// 	docStyle.setProperty('--rx', `${ dy/-1 }deg`)
// 	docStyle.setProperty('--ry', `${ dx/10 }deg`)
	
// }

// aElem.onmouseleave = function(e) {
	
// 	docStyle.setProperty('--ty', '0')
// 	docStyle.setProperty('--rx', '0')
// 	docStyle.setProperty('--ry', '0')
	
// }

// aElem.onmousedown = function(e) {
	
// 	docStyle.setProperty('--tz', '-25px')
	
// }

// document.body.onmouseup = function(e) {
	
// 	docStyle.setProperty('--tz', '-12px')
	
// }