// Initialize values
let rectangle1El = document.getElementById("rectangle-1-el")
let rectangle2El = document.getElementById("rectangle-2-el")
let rectangle3El = document.getElementById("rectangle-3-el")
let rectangle4El = document.getElementById("rectangle-4-el")
let passLengthEl = 0
let errorEl = document.getElementById("error-el")
let passwordString = ""
// Put all possible characters in a string
let possible_characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+="
// store all possible characters in an array
let charArray = Array.from(possible_characters);

//This function will store 4 passwords into the emplty fields.
function generatePass() {
    passLengthEl = document.getElementById("pass-length-el").value
    //Initialize output fields
    rectangle1El.textContent = ""
    rectangle2El.textContent = ""
    rectangle3El.textContent = ""
    rectangle4El.textContent = ""
    errorEl.textContent = ""
    //Validate the input
    if (passLengthEl > 19) {
        errorEl.textContent = "Error: Enter a number that is less than 20"
    } else if (isNaN(passLengthEl)) {
        errorEl.textContent = "Error: Numeric characters only"
    } else if (passLengthEl < 5) {
        errorEl.textContent = "Error: Enter a number that is greater than 4"
    }  else {
    //Call function that generates password string if validations are met. 
    rectangle1El.textContent = passwordStringFunction()
    rectangle2El.textContent = passwordStringFunction()
    rectangle3El.textContent = passwordStringFunction()
    rectangle4El.textContent = passwordStringFunction()
    }
}

function passwordStringFunction() {
    //Need to initialize string since function runs multiple times
    passwordString = ""
    for (let i = 0; i < passLengthEl; i++) {
     passwordString += charArray[Math.floor( Math.random()*74)]   
    }
    return passwordString
}