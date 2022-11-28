// Global variables
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*_-+="
var charString = ""
var str = ""

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Main function to create password
function writePassword() {  
  var passwordLength = selectPasswordLength();
  var specialChars = selectCharacters(); 
  var lowerChars = selectLowerChars();
  var upperChars = selectUpperChars();
  var numericChars = selectNumericChars();
  validateCharactersSelected(specialChars, lowerChars, upperChars, numericChars);
  var CharsString = createCharsString(specialChars, lowerChars, upperChars, numericChars);
  var password = generatePassword(passwordLength, CharsString);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}  

// Function to prompt user to select password length & validate that password is between 8-128 characters long
function selectPasswordLength() {
  while (true) {
    var passwordLength = prompt("How many characters would you like in your password? Choose between 8-128.")
    if (passwordLength >= 8 && passwordLength <= 128) {
      return passwordLength;
    }
  }
}

// Functions to prompt user to select character types
function selectCharacters() {
  var specialChars = confirm("Would you like special characters?")
  return specialChars;
} 

function selectLowerChars() {
  var lowerChars = confirm("Would you like lowercase characters?")
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
  if (!specialChars && !numericChars && !lowerChars && !upperChars) {
  alert("Please select at least one type of character.");
  writePassword()
}
}

// Function to join strings of selected character types and return a new string
function createCharsString(specialChars, lowerChars, upperChars, numericChars) {
  if (specialChars) {
    possibleChars = charString.concat(symbols)
    charString = possibleChars;
  }
  if (numericChars) {
    possibleChars = charString.concat(numbers)
    charString = possibleChars;
  }
  if (lowerChars) {
    possibleChars = charString.concat(lowercase)
    charString = possibleChars;
  }
  if (upperChars) {
    possibleChars = charString.concat(uppercase)
    charString = possibleChars;
  }
  return charString
}

// Function to create a random string using the length of the password selected by user and new string containing selected character types
function generatePassword(length, characters) { 
  for (var i = 0; i < length; i++) {
  var index = Math.floor(Math.random() * characters.length);
  str += characters[index];
  }
return str;
}