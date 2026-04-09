// main js
let grid = document.querySelectorAll(".grid-container"); 
let divs = document.querySelection(".grid-container div"); 

//let rotation = 0;
/*
document.addEventListener("click", function () {
    // let min = 10; 
    // let max = 40; 
    rotation += randomNumber(1, 200); 
    
    document.body.style.transform = `rotate(${rotation}deg)`; 
}) 
*/ 
//let elements = document.querySelectorAll("body *"); 
//console.log(elements.length); 


function randomize() {
    console.log(divs.length, "randomize! "); 
    grid[0].style.transform = `rotate(${Math.random() * 360}deg)`; 

    divs.forEach(function(div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 360);
        let rotate = randomNumber(0, 360);

        if(Math.randam() > .5) {
            scale = 1; 
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80); 
        }

        /* div.style.transform = 
            `scale(${scale})
            translate(${translateX}%, ${translateY}%)
            rotate(${rotate}deg)`; */ 
    div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}% rotate(${rotate}deg)`; 
    
    }); 
   
 
} 

document.addEventListener("click", randomize);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min; 
}

/*
elements.forEach(function(ele) {
	ele.style.transform = `rotate(${Math.random() * 360}deg)`;
}); */ 
