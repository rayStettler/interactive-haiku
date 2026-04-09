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
