//determine password length from user input. set parameters  - less than 8 or more than 128 doesn't work.
function passwordLength() {
  var userLength = parseInt(
    window.prompt("How many characters does your password need to be?")
  );
  if (userLength >= 8 && userLength < 128) {
    return userLength;
  } else if (userLength < 8) {
    console.log("ran through small number");
  } else if (userLength > 128) {
    console.log("ran through big number");
  } else userLength === null;
  console.log("ran through last else");
  return (
    window.alert(
      "Your password must be more than 8 characters, or less than 128 characters. Try Again!"
    ),
    window.preventDefault()
  );
}
//function provides lenght of characters

//find out further preferences
//ask if you we are using upper case, lower case, numbers, and/or special characters

function passwordPref() {
  var userLowerCase = window.confirm("Are we using Lower Case characters?");
  var userUpperCase = window.confirm("Are we using Upper Case characters?");
  var userNumbers = window.confirm("Are we using Numbers?");
  var userSpecicalChar = window.confirm("Are we using Special Characters?");
  if (!userLowerCase && !userUpperCase && !userNumbers && !userSpecicalChar) {
    window.alert("Hey! You done did it wrong!"), window.preventDefault();
    return passwordPref();
  } else if (
    !userLowerCase ||
    !userUpperCase ||
    !userNumbers ||
    !userSpecicalChar
  ) {
  }
  //returns the preferences, unless none were chosen, then it alerts error.

  //log the boolean values for fun
  console.log(userLowerCase, userUpperCase, userNumbers, userSpecicalChar);
  return {
    userLowerCase, //these are key value pairs that re inside of an object, return as true of false
    userUpperCase,
    userNumbers,
    userSpecicalChar,
  };
}

//based on chosen length, select random characters from the chosen character set and put them in the password
function generatePassword() {
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()!@#$%^&*()!@#$%^&*()"; //increased the probability of choosing a special character
  var length = passwordLength();
  var pref = passwordPref();
  var possibilities = ""; //bin with all the chosen option

  if (pref.userLowerCase) {
    possibilities += lowerCase; //---this means possibilities equals possibilities plus lowerCase
  }
  if (pref.userUpperCase) {
    possibilities += upperCase;
  }
  if (pref.userNumbers) {
    possibilities += numbers;
  }
  if (pref.userSpecicalChar) {
    possibilities += specialCharacters;
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * possibilities.length);
    password += possibilities[randomNumber];
  }

  return password;
}
//selects element and assigns it to variable

var generateBtn = document.querySelector("#generate");

// Writes password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Adds event listener to generate button

generateBtn.addEventListener("click", writePassword);
