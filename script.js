// create variables to hold the character options for Special, lowercase, uppercase, and numeric characters

// var specialCharsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+'] 
// var numericCharsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// var lowerCharsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// var upperCharsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


// create an empty array that will hold the users selected characters

// var possibleChars = []
// var passwordArray = []

// on game start prompt for users number of characters and hold in a variable
// var numChars = prompt("How many characters would you like in your password?")

// check the users input and confirm they put in a number between 8-128, and that it is numeric

// write function that validates users input

// function validateUserInput(chars) {
  // parseInt(chars)
//  if (chars < 8) || chars > 128) {
//    return null
//  }
//  }

// after validation, create variables for character selections

// var specialChars = confirm("Would you like special characters?")
// var numericChars = confirm("Would you like numbers?")
// var lowerChars = confirm("Would you like lowercase characters?")
// var upperChars = confirm("Would you like uppercase characters?")

// validate that at least one option was selecteed

// if (!specialChars && !numericChars && !lowerChars && !upperChars) {
  // alert("You need to select at least one type of character.");
  // return generatePassword()
// }

// after validation is complete, start pushing the selected characters into possible chars array

// if (specialChars) {
  // possibleChars.concat(specialCharsArray)
// }
// if (numericChars) {
  // possibleChars.concat(numericCharsArray)
// }
// if (lowerChars) {
  // possibleChar.concat(lowerCharsArray)
// }
// if (upperChars) {
  // possibleChar.concat(upperCharsArray)
// }

// create a random number

// loop through possibleChars and select a random character from the possibleChars array based on how many characters they entered into the prompt

// push() the randomly generated character to an empty array called passwordArray

// return passwordArray.join()


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
