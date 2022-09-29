// Assignment code here

// All possible characters by section.

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberlist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var symbollist = ["!", "@", "#", "$", "%", "&", "*"];

function generatePassword() {

  // Initialize empty array for possible characters.
  var possible = [];

  // Lower case check
  var lowerc = window.confirm("Would you like to include lower case letters?");
  // Upper case check
  var upperc = window.confirm("Would you like to include upper case letters?");
  // Numbers check
  var numbers = window.confirm("Would you like to include numbers?");
  // Symbols Check
  var symbols = window.confirm("Would you like to include symbols?");
  // Length Check
  var length = window.prompt("How long should it be? (8 - 128)");


  // Catches if a user does not select any boxes.
  if (!lowerc && !upperc && !numbers && !symbols) {
    return "Please choose at least one set of characters!";
  }

  // Catches if a user has an invalid length.
  if (length < 8) {
    return "Your password must be at least 8 characters long!"
  } else if (length > 128) {
    return "Your password cannot be longer than 128 characters!"
  } 

  // Create proper set of characters to pull from.
  if (lowerc) {
    possible = possible.concat(lowercase);
  }
  if (upperc) {
    possible = possible.concat(uppercase);
  }
  if (numbers) {
    possible = possible.concat(numberlist);
  }
  if (symbols) {
    possible = possible.concat(symbollist);
  }

  // Initialize password.
  var finalpassword = "";

  // Iterate based on length chosen.
  for (let i = 1; i <= length; i++) {
    finalpassword += possible[Math.floor(Math.random() * possible.length)];
  }
  return finalpassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button.

generateBtn.addEventListener("click", writePassword);
