// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [0,1,2,3,4,5,6,7,8,9]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = lower.map(lower => lower.toUpperCase())
var special = ["`","`","!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","}","]",":",";","'","<",",",">",".","/","?","|","\\","\""]

function lengthCheck() {
  passLength >= 8 && passLength <= 128;
}

function generatePassword() {
  passLength = prompt("How long would you like your password to be? (Must be between 8 and 128 characters.)", 12);
  passLength = Number(passLength);
  if(Number.isInteger(passLength) && lengthCheck() == true) {
    console.log("yay")
  } else {
    console.log("boo")
  }
}
  // Number.isInteger(passLength)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
