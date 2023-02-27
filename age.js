// Get the age element and alert element by their IDs using the document object model (DOM)
let ageEl = document.getElementById("age-el");

let alertEl = document.getElementById("alert-age");

// Initialize the age count variable to 0
let ageCount = 0;

// Function to add 1 to the age count and update the age element's text content
function addAge(){
    ageCount += 1;
    ageEl.textContent = ageCount;
}

// Function to subtract 1 from the age count, prevent negative numbers, and update the age element's text content
function subAge(){
    ageCount--;
    ageEl.textContent = ageCount;

    if(ageCount <= 0){
        ageCount++;
    }
}

// Function to verify if the age is over 6 and redirect to a website, or show an error message
function verifyAge(){
    if(ageCount >= 6){
        window.location.href = "https://shiny-clafoutis-8dc2a3.netlify.app/";
    }
    else{
        alertEl.textContent = "You are not allowed!";
    }
}       

// Function to clear the age count and error message
function clear(){
    ageCount = 0;
    ageEl.textContent = ageCount;
    alertEl.textContent = "";
}

// Get the clear button element by its ID using the document object model (DOM)
var clearButton = document.getElementById('clearBtn');

// Add an event listener to the clear button to execute the clear function when clicked
clearButton.addEventListener('click', clear);
