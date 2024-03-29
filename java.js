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
  
  // Creating the first function
function generateLength() { // function name
  let passwordLength = parseInt(prompt("How long would you like your password to be?")); // Creates a variable for the password length
  
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be a number between 8 and 128 characters. Please try again."); // while loop to ensure password length is between 8 and 128
    passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  }
  return passwordLength; // returns the password length
}
var passwordLength = generateLength(); // Creates a variable for the password length
console.log("Password Length:", passwordLength); // consol log for errors 


function generatePasswordLowerCase() {
 //This while loop will ensure a number is give for lower case, and cant be greater than the password length 
    let passwordLowerCase = parseInt(prompt("How many lowercase characters would you like your password to have?")); // Creates a variable for the password length
    while (passwordLowerCase < 1 || passwordLowerCase > passwordLength - 3|| isNaN(passwordLowerCase)) { //This while loop will ensure a number is give for lower case, and cant be greater than the password length
      alert("Lowercase character count must be a number between 1 and " + (passwordLength - 3) + ". Please try again."); // Alerts the user if the password length is not between 8 and 128 characters
      passwordLowerCase = parseInt(prompt("How many lowercase characters would you like your password to have?")); // Creates a variable for the password length again, making it a loop
    }
  
  let charset = lowerCasedCharacters;
  let password = "";
  
  for (let i = 0; i < passwordLowerCase; i++) { 
    let randomIndex = Math.floor(Math.random() * charset.length); //create a random password from the provided array 
    password += charset[randomIndex];
  }
  
  return password;
}

//variable for the result of the function, and the length into a number

var passwordLowerCase = generatePasswordLowerCase(); // Creates a variable for the result of the function
var generatePasswordLowerCaseNumber = passwordLowerCase.length; // Creates a variable for the length into a number
console.log("Lowercase Character Count:", generatePasswordLowerCaseNumber);
console.log("Lowercase Password:", passwordLowerCase);




function generatePasswordUpperCase() {
  //This while loop will ensure a number is give for upper case, and cant be greater than the password length 
    let passwordUpperCase = parseInt(prompt("How many uppercase characters would you like your password to have?"));  // Creates a variable for the password length
    while (passwordUpperCase < 1 || passwordUpperCase > passwordLength - generatePasswordLowerCaseNumber - 2 || isNaN(passwordUpperCase)) {  //This while loop will ensure a number is give for upper case, and cant be greater than the password length
      alert("Uppercase character count must be a number between 1 and " + (passwordLength - generatePasswordLowerCaseNumber - 2) + ". Please try again.");  // Alerts the user if the password length is not between 8 and 128 characters
      passwordUpperCase = parseInt(prompt("How many uppercase characters would you like your password to have?"));  // Creates a variable for the password length again, making it a loop
    }
   
   let charset = upperCasedCharacters;
   let password = "";
   
   for (let i = 0; i < passwordUpperCase; i++) {
     let randomIndex = Math.floor(Math.random() * charset.length);
     password += charset[randomIndex];
   }
   
   return password;
 }
 
 //variable for the result of the function, and the length into a number
 var passwordUpperCase = generatePasswordUpperCase();
 var generatePasswordUpperCaseNumber = passwordUpperCase.length;
console.log("Uppercase Character Count:", generatePasswordUpperCaseNumber);
console.log("Uppercase Password:", passwordUpperCase);


function generatePasswordNumeric() {
    //This while loop will ensure a number is give for numeric, and cant be greater than the password length
    let passwordNumeric = parseInt(prompt("How many numeric characters would you like your password to have?"));  // Creates a variable for the password length
    while (passwordNumeric < 1 || passwordNumeric > passwordLength - generatePasswordLowerCaseNumber - generatePasswordUpperCaseNumber - 1 || isNaN(passwordNumeric)) {  //This while loop will ensure a number is give for numeric, and cant be greater than the password length
      alert("Numeric character count must be a number between 1 and " + (passwordLength - generatePasswordLowerCaseNumber - generatePasswordUpperCaseNumber - 1) + ". Please try again.");  // Alerts the user if the password length is not between 8 and 128 characters
      passwordNumeric = parseInt(prompt("How many numeric characters would you like your password to have?"));  // Creates a variable for the password length again, making it a loop
    }
   
   let charset = numericCharacters;
   let password = "";
   
   for (let i = 0; i < passwordNumeric; i++) {
     let randomIndex = Math.floor(Math.random() * charset.length);
     password += charset[randomIndex];
   }
   
   return password;
 }

 //variable for the result of the function, and the length into a number
 
 var passwordNumeric = generatePasswordNumeric();
 var generatePasswordNumericNumber = passwordUpperCase.length;
console.log("Numeric Character Count:", generatePasswordNumericNumber);
console.log("Numeric Character Count password:", passwordNumeric);
 

function generatePasswordSpecial() {
        // This loop will ensure that the special characters are not greater than the password length
      var passwordSpecial = parseInt(prompt("How many special characters would you like your password to have?(The Remaining characters will be randomly generated)")); // Creates a variable for the password length
    while (passwordSpecial < 1 || passwordSpecial > passwordLength - generatePasswordLowerCaseNumber - generatePasswordUpperCaseNumber - generatePasswordNumericNumber || isNaN(passwordSpecial)) { //This loop will ensure that the special characters are not greater than the password length
      alert("Special character count must be a number between 1 and " + (passwordLength - generatePasswordLowerCaseNumber - generatePasswordUpperCaseNumber - generatePasswordNumericNumber) + ". Please try again."); // Alerts the user if the password length is not between 8 and 128 characters
      passwordSpecial = parseInt(prompt("How many special characters would you like your password to have?(The Remaining characters will be randomly generated)"));
    }
 
 let charset = specialCharacters;
 let password = "";
 
 for (let i = 0; i < passwordSpecial; i++) {
   let randomIndex = Math.floor(Math.random() * charset.length);
   password += charset[randomIndex];
 }
 
 return password;
}

//variable for the result of the function, and the length into a number

var passwordSpecial = generatePasswordSpecial();
var generatePasswordSpecialNumber = passwordSpecial.length;
console.log("Special Character Count:", generatePasswordSpecialNumber);
console.log("Special Character Count password:", passwordSpecial);

// funtion to randomly generate remaining characters, and do the calcualtions to ensure that the remaining characters are not greater than the password length

function generateRemaining() {
  var remainingCharacters = passwordLength - generatePasswordLowerCaseNumber - generatePasswordUpperCaseNumber - generatePasswordNumericNumber - generatePasswordSpecialNumber;
let charset = numericCharacters + lowerCasedCharacters + upperCasedCharacters + specialCharacters;
let password = "";

for (let i = 0; i < remainingCharacters; i++) {
let randomIndex = Math.floor(Math.random() * charset.length);
password += charset[randomIndex];
}

return password;
}

var remainingPassword = generateRemaining();
var randomPassword = passwordLowerCase + passwordUpperCase + passwordNumeric + passwordSpecial + remainingPassword;
var remainingCharacters = passwordLength - generatePasswordLowerCaseNumber - generatePasswordUpperCaseNumber - generatePasswordNumericNumber - generatePasswordSpecialNumber;
console.log("Remaining Characters:", remainingCharacters);
console.log("Remaining Password:", remainingPassword);
console.log("Random Password:", randomPassword);

//Link the button and the comment which needs to be replaced

function replaceComment() {
  var commentElement = document.getElementById('password');

  if (commentElement) {
      // Replace the comment with new content
      commentElement.innerHTML = randomPassword;
  }
}


//Trial code which was changed, but keeping it in case we need it again.

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



// function generatePasswords() { // Creating the function that will generate the password

// //The while loop will ensure that the password length is between 8 and 128 characters
// let passwordLength = parseInt(prompt("How long would you like your password to be?")); // Creates a variable for the password length
// while (passwordLength < 8 || passwordLength > 128) { // The while loop will ensure that the password length is between 8 and 128 characters
//   alert("Password length must be a number between 8 and 128 characters. Please try again."); // Alerts the user if the password length is not between 8 and 128 characters
//   passwordLength = parseInt(prompt("How many characters would you like your password to be?")); // Creates a variable for the password length again, making it a loop
// }



// //This while loop will ensure a number is give for lower case, and cant be greater than the password length 
//     let passwordLowerCase = parseInt(prompt("How many lowercase characters would you like your password to have?")); // Creates a variable for the password length
//     while (passwordLowerCase < 1 || passwordLowerCase > passwordLength - 3|| isNaN(passwordLowerCase)) { //This while loop will ensure a number is give for lower case, and cant be greater than the password length
//       alert("Lowercase character count must be a number between 1 and " + (passwordLength - 3) + ". Please try again."); // Alerts the user if the password length is not between 8 and 128 characters
//       passwordLowerCase = parseInt(prompt("How many lowercase characters would you like your password to have?")); // Creates a variable for the password length again, making it a loop
//     }



// //This while loop will ensure a number is give for upper case, and cant be greater than the password length 
//     let passwordUpperCase = parseInt(prompt("How many uppercase characters would you like your password to have?"));  // Creates a variable for the password length
//     while (passwordUpperCase < 1 || passwordUpperCase > passwordLength - passwordLowerCase - 2 || isNaN(passwordUpperCase)) {  //This while loop will ensure a number is give for upper case, and cant be greater than the password length
//       alert("Uppercase character count must be a number between 1 and " + (passwordLength - passwordLowerCase - 2) + ". Please try again.");  // Alerts the user if the password length is not between 8 and 128 characters
//       passwordUpperCase = parseInt(prompt("How many uppercase characters would you like your password to have?"));  // Creates a variable for the password length again, making it a loop
//     }



// //This while loop will ensure a number is give for numeric, and cant be greater than the password length
//     let passwordNumeric = parseInt(prompt("How many numeric characters would you like your password to have?"));  // Creates a variable for the password length
//     while (passwordNumeric < 1 || passwordNumeric > passwordLength - passwordLowerCase - passwordUpperCase - 1 || isNaN(passwordNumeric)) {  //This while loop will ensure a number is give for numeric, and cant be greater than the password length
//       alert("Numeric character count must be a number between 1 and " + (passwordLength - passwordLowerCase - passwordUpperCase - 1) + ". Please try again.");  // Alerts the user if the password length is not between 8 and 128 characters
//       passwordNumeric = parseInt(prompt("How many numeric characters would you like your password to have?"));  // Creates a variable for the password length again, making it a loop
//     }


 
    

//       // This loop will ensure that the special characters are not greater than the password length
//       var passwordSpecial = parseInt(prompt("How many special characters would you like your password to have?(The Remaining characters will be randomly generated)")); // Creates a variable for the password length
//     while (passwordSpecial < 1 || passwordSpecial > passwordLength - passwordLowerCase - passwordUpperCase - passwordNumeric || isNaN(passwordSpecial)) { //This loop will ensure that the special characters are not greater than the password length
//       alert("Special character count must be a number between 1 and " + (passwordLength - passwordLowerCase - passwordUpperCase - passwordNumeric) + ". Please try again."); // Alerts the user if the password length is not between 8 and 128 characters
//       passwordSpecial = parseInt(prompt("How many special characters would you like your password to have?(The Remaining characters will be randomly generated)"));
//     }



//     // Consol log for bug fixing
//        console.log("Password Length: " + passwordLength); // Consol log for bug fixing LENGTH
//       console.log("Lowercase: " + passwordLowerCase); // Consol log for bug fixing Lowercase
//       console.log("Uppercase: " + passwordUpperCase); // Consol log for bug fixing Uppercase
//       console.log("Numeric: " + passwordNumeric);// Consol log for bug fixing Numeric
//       console.log("Special: " + passwordSpecial);// Consol log for bug fixing Special
//   }
// generatePasswords();
