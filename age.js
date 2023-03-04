console.log("Hello World");

let ageEl = document.getElementById("age-el");

let alertEl = document.getElementById("alert-age");

let ageCount = 0;
let zeroSet = 0;

function addAge(){
    ageCount += 1;
    ageEl.textContent = ageCount;
    
}

function subAge(){
    ageCount--;
    ageEl.textContent = ageCount;

    if(ageCount <= zeroSet){
        ageCount++;
    }
}

function verifyAge(){
    if(ageCount >= 3){
        window.open("https://shiny-clafoutis-8dc2a3.netlify.app/", "_blank");

    }
    else{
        alertEl.style.display = "block"
        alertEl.textContent = "Need strict supervision for age below 3"

        let soundEff = document.getElementById("soundEffect");
        soundEff.play();

        ageCount = 0;
    }
}       

function clear(){
    ageCount = 0;
    ageEl.textContent = ageCount;

    alertEl.textContent = "";
}

var clearButton = document.getElementById('clearBtn'); //gets the element of the button to clear
clearButton.addEventListener('click', clear); //adds execution of the clear button and executes the
                                              // clear function
