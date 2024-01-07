// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  
// var passwordLength = prompt("How many characters would you like your password to be?");
  
//   // Function to prompt user for password options
//   function generatePasswordLength() {
//     var passwordLength = prompt("How many characters would you like your password to be?");
//     if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
//       alert("Password length must be a number between 8 and 128 characters. Please try again.");
//       generatePasswordLength();
//     }
//   }
//   generatePasswordLength();

  // function generatePasswordUpperCase(passwordLength) {
  //   var passwordUpperCase = prompt("How many uppercase characters would you like your password to have?");
  //   if (passwordUpperCase < 1 || passwordUpperCase > passwordLength - 4 || isNaN(passwordUpperCase)) {
  //     alert("Uppercase character count must be a number between 1 and " + (length - 4) + ". Please try again.");
  //     generatePasswordUpperCase(length);
  //   } else {
     
  //   generatePasswordLowerCase(parseInt(passwordUpperCase, 10));
  //   }
  // }

  // function generatePasswordLowerCase(length, Uppercase) {
  //   var passwordLowerCase = prompt("How many lowercase characters would you like your password to have?");
  //   if (passwordLowerCase < 1 || passwordLowerCase > (length - Uppercase) || isNaN(passwordLowerCase)) {
  //     alert("Lowercase character count must be a number between 1 and " + (length - 4) + ". Please try again.");
  //     generatePasswordLowerCase(length);
  //   } 

  // }

  
  // // Function for getting a random element from an array
  // function getRandom(arr) {
  
  // }
  
  // // Function to generate password with user input
  // // function generatePassword() {
  
  // // }
  
  // // Get references to the #generate element
  // var generateBtn = document.querySelector('#generate');
  
  // // Write password to the #password input
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector('#password');
  
  //   passwordText.value = password;
  // }
  
  // // Add event listener to generate button
  // generateBtn.addEventListener('click', writePassword);

  
// create the fucntion that will generate the password
  function generatePasswords() {

//The while loop will ensure that the password length is between 8 and 128 characters
let passwordLength = parseInt(prompt("How long would you like your password to be?"));
while (passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be a number between 8 and 128 characters. Please try again.");
  passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
}

//This while loop will ensure a number is give for lower case, and cant be greater than the password length
    let passwordLowerCase = parseInt(prompt("How many lowercase characters would you like your password to have?"));
    while (passwordLowerCase < 1 || passwordLowerCase > passwordLength - 4 || isNaN(passwordLowerCase)) {
      alert("Lowercase character count must be a number between 1 and " + (passwordLength - 4) + ". Please try again.");
      passwordLowerCase = parseInt(prompt("How many lowercase characters would you like your password to have?"));
    }

//This while loop will ensure a number is give for upper case, and cant be greater than the password length
    let passwordUpperCase = parseInt(prompt("How many uppercase characters would you like your password to have?"));
    while (passwordUpperCase < 1 || passwordUpperCase > passwordLength - 4 || isNaN(passwordUpperCase)) {
      alert("Uppercase character count must be a number between 1 and " + (passwordLength - passwordLowerCase - 4) + ". Please try again.");
      passwordUpperCase = parseInt(prompt("How many uppercase characters would you like your password to have?"));
    }

//This while loop will ensure a number is give for numeric, and cant be greater than the password length
    let passwordNumeric = parseInt(prompt("How many numeric characters would you like your password to have?"));
    while (passwordNumeric < 1 || passwordNumeric > passwordLength - 4 || isNaN(passwordNumeric)) {
      alert("Numeric character count must be a number between 1 and " + (passwordLength - passwordLowerCase - passwordUpperCase - 4) + ". Please try again.");
      passwordNumeric = parseInt(prompt("How many numeric characters would you like your password to have?"));
    }



      let passwordSpecial = parseInt(prompt("How many special characters would you like your password to have?(The Remaining characters will be randomly generated)"));
    while (passwordSpecial < 1 || passwordSpecial > passwordLength - 4 || isNaN(passwordSpecial)) {
      alert("Special character count must be a number between 1 and " + (passwordLength - passwordLowerCase - passwordUpperCase - passwordNumeric - 4) + ". Please try again.");
      passwordSpecial = parseInt(prompt("How many special characters would you like your password to have?"));
    }
        console.log("Password Length: " + passwordLength);
      console.log("Lowercase: " + passwordLowerCase);
      console.log("Uppercase: " + passwordUpperCase);
      console.log("Numeric: " + passwordNumeric);
      console.log("Special: " + passwordSpecial);
  }
generatePasswords();
  