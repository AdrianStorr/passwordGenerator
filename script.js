// Assignment Code
// var generateBtn = document.getElementById("#generate");

// Write password to the #password input
// function writePassword() {
// var password = generatePassword();
// var passwordText = document.getElementById("#password");

// passwordText.value = password;



// Add event listener to generate button


//ask user
//  function userPreference() {


//user preference
//  var userChoice = "";

//alphabet lower case
//  var alphabets = "abcdefghijklmnopqrstuvwxyz";

//alphabet Upper case
//  var UpperCase

//special characters omit double or single quotes
//  var specialCharacters =  "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//numbers
const charaterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeSymbolsElement = document.getElementById('includeSymbols')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64),
  arrayFromLowToHigh(91, 96),
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
charaterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()

  passwordDisplay.innerText = generatePassword()
})

// Generates Password
function generatePassword() {
  let charCodes = []
  const passwordCharacters = []

  if (!includeUppercaseElement.checked &&
    !includeLowercaseElement.checked &&
    !includeNumbersElement.checked &&
    !includeSymbolsElement.checked) {
    return ''
  }

  if (includeUppercaseElement.checked)
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeLowercaseElement.checked)
    charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includeNumbersElement.checked)
    charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbolsElement.checked)
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  for (let i = 0; i < parseInt(characterAmountNumber.value); i++) {
    const characterCode = String.fromCharCode(randomElement(charCodes))
    passwordCharacters.push(characterCode)
  }

  return passwordCharacters.join('')
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }

  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  charaterAmountRange.value = value
}
