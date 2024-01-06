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
  
   
  
  // Function to prompt user for password options
  function generatePasswordLength() {
    var passwordLength = prompt("How many characters would you like your password to be?");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Password length must be a number between 8 and 128 characters. Please try again.");
      generatePasswordLength();
    } else {
      generatePasswordUpperCase(parseInt(passwordLength, 10));
    }
  }
  
  function generatePasswordUpperCase(length) {
    var passwordUpperCase = prompt("How many uppercase characters would you like your password to have?");
    if (passwordUpperCase < 1 || passwordUpperCase > (length - 4) || isNaN(passwordUpperCase)) {
      alert("Uppercase character count must be a number between 1 and " + (length - 4) + ". Please try again.");
      generatePasswordUpperCase(length);
    } else {
      // Generate the password using the specified length and uppercase count
      generatePassword(length, parseInt(passwordUpperCase, 10));
    }
  }

  
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

  generatePasswordLength();