// main.js

let grid = document.querySelectorAll(".grid-container"); 
let divs = document.querySelectorAll(".grid-container div"); 

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + 1) + min; 
}


function randomize() {

    grid[0].computedStyleMap.transform = `rotate(${Math.random() * 360}deg)`

    divs.forEach(function(div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber (0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360); 
        div.style.transform = 
            `scale(${scale})
            translate(${translateX}%, ${translateY}%)
            rotate(${rotate}deg)`
    })

    consolue.log(divs.length, "randomize!"); 
}

document.addEventListener("click", randomize); 

/* 
let grid = document.querySelectorAll(".grid-container"); 
let divs = document.querySelection(".grid-container div"); 

let rotation = 0;
document.addEventListener("click", function () {
    let min = 1;
    let max = 20;
    rotation += Math.random() * (max - min + 1) + min;
    document.body.style.transform = `rotate(${rotation}deg)`;
}) 


function randomize() {
    
    grid[0].styles.transform = `rotate(${Math.random() * 360}deg)`; 

    divs.forEach(function (div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);

        if(Math.random() > .5) {
            scale = 1; 
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80); 
        }
        
        div.style.transform = 
            `scale(${scale}) 
            translate(${translateX}%, ${translateY}%) 
            rotate(${rotate}deg)`;
    }); 
    console.log(divs.length, "randomize!");
    
}

document.addEventListener("click", randomize);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
*/ 
