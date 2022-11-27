// Click the button to show the options to generate a button
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*_-+="

var generateBtn = document.querySelector("#generate");

function writePassword() {  
    var generateBtn = document.querySelector("#generate");
    var passwordLength = selectPasswordLength();
    var specialChars = selectCharacters(); 
    var lowerChars = selectLowerChars();
    var upperChars = selectUpperChars();
    var numericChars = selectNumericChars();
    console.log(specialChars, lowerChars, upperChars, numericChars)
    validateCharactersSelected(specialChars, lowerChars, upperChars, numericChars);
    var CharsString = createCharsString(specialChars, lowerChars, upperChars, numericChars);
    var password = generatePassword(passwordLength, CharsString);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}   



function selectPasswordLength() {
    var passwordLength = prompt("How many characters would you like in your password? Choose between 8-128.")
    console.log(passwordLength);
    if (passwordLength !== null) {
        if (passwordLength < 8 || passwordLength > 128) {
            alert("Please choose a number between 8-128.")
// I want my screen to return to the prompt "How many characters..." but don't know how
        } else return passwordLength;
    } 
}

function selectCharacters() {
    var specialChars = confirm("Would you like special characters?")
    if (specialChars !== null) { 
        if (specialChars == true) {return true} else {return false} }
} 

function selectLowerChars() {
    var lowerChars = confirm("Would you like lowercase characters?")
    console.log(lowerChars)
    return lowerChars;
}

function selectUpperChars() {
    var upperChars = confirm("Would you like uppercase characters?")
    return upperChars;
}

function selectNumericChars() {
    var numericChars = confirm("Would you like numeric characters?")
    return numericChars;
}


function validateCharactersSelected(specialChars, lowerChars, upperChars, numericChars) {
    console.log(specialChars, lowerChars, upperChars, numericChars)
    if (!specialChars && !numericChars && !lowerChars && !upperChars) {
    alert("Please select at least one type of character.");
    writePassword()
  }
}

function createCharsString(specialChars, lowerChars, upperChars, numericChars) {
    var possibleChars = "";
    if (specialChars) {
      possibleChars.concat(symbols)
    }
    if (numericChars) {
      possibleChars.concat(numbers)
    }
    if (lowerChars) {
      possibleChars.concat(lowercase)
    }
    if (upperChars) {
      possibleChars.concat(uppercase)
    }
    return possibleChars
}

  function generatePassword(length, characters) { 
   var str = "" 
    for (var i = 0; i <= length; i++) {
      var index = Math.floor(Math.random() * characters.length);
      str += characters[index];
    }
    return str.join;
  }

//   generateBtn.addEventListener("click", writePassword);

// After selection, confirm

// Password is generated