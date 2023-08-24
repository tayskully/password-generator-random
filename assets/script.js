//button click - starts the prompts
// // // Get references to the #generate element

var generateBtn = document.querySelector("#generate");

var passwordChoices = []; //place to hold generated password elements

// ask how long you want password
//check if pw is bt 1 & 128 characters
//if no ask again
//if yes then put them in the !! list of chosen character !!

var passwordLength = function () {
  var userLength = parseInt(
    window.prompt("How many characters does your password need to be?")
  );
  console.log(userLength);
  if (userLength >= 8 && userLength < 128) {
    console.log(userLength);
    return userLength;
  } else if (userLength < 8) {
    window.prompt(
      "Your password must be at least 8 characters, and no more than 128 characters.  Please try again."
    );
    passwordLength();
  } else if (userLength > 128) {
    window.prompt(
      "Your password must be less than 128 characters.  Please try again."
    );
    passwordLength();
  } else !userLength;
  return;
};

//ask if you we are using Upper Case?
//are we using lower case characters?
//are we using special characters?
//are we using numerical characters?
var passwordPref = function () {
  var userLowerCase = window.confirm("Are we using Lower Case characters?");
  var userUpperCase = window.confirm("Are we using Upper Case characters?");
  var userNumbers = window.confirm("Are we using Numbers?");
  var userSpecicalChar = window.confirm("Are we using special characters?");
  if (!userLowerCase || !userUpperCase || !userNumbers || !userSpecicalChar) {
    window.alert("Hey! you done did it wrong!");
    return passwordPref();
  }
  //didn't choose any, alert did something wrong, start function all over again

  console.log(userLowerCase, userUpperCase, userNumbers, userSpecicalChar);
  return {
    userLowerCase, //these are key value pairs that re inside of an object
    userUpperCase,
    userNumbers,
    userSpecicalChar,
  };
};

function generatePassword() {
  console.log(password); //testing button

  //   //based on chosen length, select random characters from the chosen character set and put them in the password

  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()!@#$%^&*()!@#$%^&*()"; //increased the probability of choosing a special character 
  var length = passwordLength();
  var pref = passwordPref();
  var possibilities = ""; //bin with all the chosen option 
  
  if (pref.userLowerCase) { 
    possibilities += lowerCase  //---this means possibilities equals possibilities plus lowerCase 
  } 
 if (pref.userUpperCase){
  possibilities += upperCase
 }
 if (pref.userNumbers){
  possibilities += numbers
 }
  if (pref.userSpecicalChar){
    possibilities += specialCharacters
  };

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * possibilities.length);
    password += possibilities[randomNumber]
  

  }

  return password;
}

// //asks character type preferences (I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters)

// //input should be validated and at least one character type should be selected

// //generates password and puts it in either prompt or on the screen

// // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
