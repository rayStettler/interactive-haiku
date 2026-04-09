// main js

let rotation = 0;
document.addEventListener("click", function () {
    // let min = 10; 
    // let max = 40; 
    rotation += randomNumber(1, 200); 
    
    document.body.style.transform = `rotate(${rotation}deg)`; 
}) 

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min; 
}
//let elements = document.querySelectorAll("body *"); 
//console.log(elements.length); 
let divs = document.querySelection(".grid-container div"); 
 

function randomize() {
    
    divs.forEach(function(div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 360);
        let rotate = randomNumber(0, 360);
        div.style.transform = 
            `scale(${scale})
            translate(${translateX}%, ${translateY}%)
            rotate(${rotate}deg)`; 
    }) 

    console.log(divs.length, "randomize! "); 
 
} 
/*
elements.forEach(function(ele) {
	ele.style.transform = `rotate(${Math.random() * 360}deg)`;
}); */ 
