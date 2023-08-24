// Assignment code here

//button click - starts the prompts

//asks password length (I choose a length of at least 8 characters and no more than 128 characters)

//asks character type preferences (I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters)

//input should be validated and at least one character type should be selected

//generates password and puts it in either prompt or on the screen

var passwordLength = function () {
  var userLength = window.prompt(
    "How many characters does your password need to be? (must be above 8 characters)"
  );
  console.log(userLength);
  if (userLength >= 8 && userLength < 128) {
    passwordPref();
  } else if (userLength > 128) {
    window.prompt(
      "Sorry, the password must be more than 8 characters. Try Again"
    );
  } else !userLength;
  return;
};

var passwordPref = function () {
  var userPref = window.prompt(
    "Does it need to include Upper Case Letters? y or n"
  );
};
//var YesNo =
//define yes as true and no as false boollean
if (userPref === y) {
  generatePassword();
} else if (userPref === n) {
}
console.log(userPref);

function generatePassword() {
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()";

  var password = "";

  for (var i = 0; i <= passwordLength; i++) {

    var randomCharacter = Math.floor(Math.random() * specialCharacters.length);
    password += specialCharacters.substring(randomCharacter, randomCharacter + 1);

    var randomLower = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase.substring(randomLower, randomLower + 1);

    var randomUpper = Math.floor(Math.random() * upperCase.length);
    password += upperCase.substring(randomUpper, randomUpper + 1);

    var randomNumber = Math.floor(Math.random() * numbers.length);
    password += numbers.substring(randomNumber, randomNumber + 1);


  }
}

password += upperCase.substring(randomNumber, randomNumber + 1);

passwordLength();

// // Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
