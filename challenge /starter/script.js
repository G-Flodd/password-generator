
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
var chosenLength;

// Function to prompt user for password options
function getPasswordOptions() {

  chosenLength = prompt("Please choose a password length between 10 and 64 ");
  if (chosenLength > 64 || chosenLength < 10) {
    chosenLength = prompt("Invalid selection, please choose a password length between 10 and 64 ");

  }


  var lowerCase = confirm("Would you like lower case characters");
  if (lowerCase === true) {
    characterOptions = characterOptions.concat(lowerCasedCharacters);
    console.log(characterOptions);
  }


  var upperCase = confirm("Would you like upper case characters");
  if (upperCase === true) {
    characterOptions = characterOptions.concat(upperCasedCharacters);
    console.log(characterOptions);
  }


  var numeric = confirm("Would you like numerical characters");
  if (numeric === true) {
    characterOptions = characterOptions.concat(numericCharacters);
    console.log(characterOptions);
  }


  var special = confirm("Would you like special characters");
  if (special === true) {
    characterOptions = characterOptions.concat(specialCharacters);
    console.log(characterOptions);
  }

}



// Array shuffle aka lets shuffle 

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



// Function for getting a random element from an array
function getRandom(arr) {
  arrayShuffled = shuffle(arr);
  console.log(arrayShuffled);

  for(let i=0; i < chosenLength; i++)  

}

// Function to generate password with user input
function generatePassword() {
  // if the user has asked for lowercase, then you need too 
  getPasswordOptions();
  getRandom(characterOptions);

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