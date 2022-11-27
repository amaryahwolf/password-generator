// Global variables
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*_-+="

var generateBtn = document.querySelector("#generate");

// Main function to create password
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
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}  

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Function to prompt user to select password length
function selectPasswordLength() {
  var passwordLength = prompt("How many characters would you like in your password? Choose between 8-128.")
  console.log(passwordLength);
  if (passwordLength !== null) {
      if (passwordLength < 8 || passwordLength > 128) {
          alert("Please choose a number between 8-128.")
// **I want my screen to return to the prompt "How many characters..." but don't know how**
      } else return passwordLength;
  } 
}

// Functions to prompt users to select character types
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

// Function to ensure that the user has selected at least one character type
function validateCharactersSelected(specialChars, lowerChars, upperChars, numericChars) {
  console.log(specialChars, lowerChars, upperChars, numericChars)
  if (!specialChars && !numericChars && !lowerChars && !upperChars) {
  alert("Please select at least one type of character.");
  writePassword()
}
}

// Function to join arrays of selected character types and return a new array
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

// Function to create a random string using the length of the password selected by user and new array containing selected character types
function generatePassword(length, characters) { 
  var str = "" 
   for (var i = 0; i <= length; i++) {
     var index = Math.floor(Math.random() * characters.length);
     str += characters[index];
   }
   return str.join();
 }

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Create global variables

// var specialCharsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+'] 
// var numericCharsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// var lowerCharsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// var upperCharsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// var possibleChars = []
// var passwordArray = []

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Create first prompt asking user for # of characters
// var numberChars = prompt("How many characters would you like in your password? Choose between 8-128.")

// Create a function validating that a number between 8-128 was chosen
// function passwordLength() {
  //  if (numberChars <= 8 || numberChars >= 128); {
    // alert("Please choose a number between 8-128");
//     return null 
//   }
//    }

// passwordLength()   

//  WHEN asked for character types to include in the password
//  THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//  WHEN I answer each prompt
//  THEN my input should be validated and at least one character type should be selected

// Create second prompt asking user to confirm which types of characters they would like included
// var specialChars = confirm("Would you like special characters?")
// var numericChars = confirm("Would you like numbers?")
// var lowerChars = confirm("Would you like lowercase characters?")
// var upperChars = confirm("Would you like uppercase characters?")


// Create a function validating that at least one character type was selected
//  function validateCharactersSelected() {
//     if (!specialChars && !numericChars && !lowerChars && !upperChars); {
//     alert("Please select at least one type of character.");
//     return generatePassword()
//   }
//   }

//   validateCharactersSelected()

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Push selected character types into possible arrays
// function createCharsArray() {
//   if (specialChars) {
//     possibleChars.concat(specialCharsArray)
//   }
//   if (numericChars) {
//     possibleChars.concat(numericCharsArray)
//   }
//   if (lowerChars) {
//     possibleChars.concat(lowerCharsArray)
//   }
//   if (upperChars) {
//     possibleChars.concat(upperCharsArray)
//   }
//   }

// Loop through possibleChars and select a random character from the possibleChars array based on how numberChars they entered into the prompt
// for (var i = 0; i <= numberChars; i++) {
//   passwordArray += numberChars(Math.floor(Math.random()*possibleChars));
// }

// Push() the randomly generated character to an empty array called passwordArray
// return passwordArray.join()



