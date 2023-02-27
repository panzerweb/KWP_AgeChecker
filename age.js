console.log("Hello World");

let ageEl = document.getElementById("age-el");

let alertEl = document.getElementById("alert-age");

let ageCount = 0;

function addAge(){
    ageCount += 1;
    ageEl.textContent = ageCount;
}

function subAge(){
    ageCount--;
    ageEl.textContent = ageCount;

    if(ageCount <= 0){
        ageCount++;
    }
}

function verifyAge(){
    if(ageCount >= 6){
        window.location.href = "https://shiny-clafoutis-8dc2a3.netlify.app/";
    }
    else{
        alertEl.textContent = "You are not allowed!"
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
