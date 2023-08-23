// Assignment code here


//button click - starts the prompts 

//asks password length (I choose a length of at least 8 characters and no more than 128 characters)

//asks character type preferences (I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters)

//input should be validated and at least one character type should be selected

//generates password and puts it in either prompt or on the screen

var promptIssues 


function generatePassword() {
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()";
  
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
