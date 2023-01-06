
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
 var characterOptions = [];

// Function to prompt user for password options
function getPasswordOptions() {

  var chosenLength = prompt("Please choose a password length between 10 and 64 ");
  if (chosenLength > 64 || chosenLength < 10) {
    chosenLength = prompt("Invalid selection, please choose a password length between 10 and 64 ");

  }


  var lowerCase = confirm("Would you like lower case characters");
   if(lowerCase === true ) {
    characterOptions.push(lowerCasedCharacters);
      console.log(characterOptions);
   }


  var upperCase = confirm("Would you like upper case characters");
  if(upperCase === true ) {
    characterOptions.concat(upperCasedCharacters);
      console.log(characterOptions);
   }


  var numeric = confirm("Would you like numerical characters");
  if(numeric === true ) {
    characterOptions.concat(numericCharacters);
      console.log(characterOptions);
   }


  var special = confirm("Would you like special characters");
  if(special === true ) {
    characterOptions.concat(specialCharacters);
      console.log(characterOptions);
   }

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  // if the user has asked for lowercase, then you need too 
  getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  //do the prompts here and save answers 

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);