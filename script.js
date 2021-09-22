// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [0,1,2,3,4,5,6,7,8,9]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = lower.map(lower => lower.toUpperCase())
var special = ["`","`","!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","}","]",":",";","'","<",",",">",".","/","?","|","\\","\""]

function generatePassword() {
  var charSet = []
  passLength = prompt("How long would you like your password to be? (Must be between 8 and 128 characters.)", 12);
  passLength = Number(passLength);
  if(Number.isInteger(passLength) && passLength <= 128 && passLength >= 8) {
    lowerYN = confirm("Do you want lowercase letters?")
    upperYN = confirm("Do you want uppercase letters?")
    numYN = confirm ("Do you want numbers?")
    specialYN = confirm("Do you want special characters?")
    if(lowerYN || upperYN || numYN || specialYN) {
      if(lowerYN) {
        charSet = lower.concat(charSet)
      }
      if(upperYN) {
        charSet = upper.concat(charSet)
      }
      if(numYN) {
        charSet = num.concat(charSet)
      }
      if(specialYN) {
        charSet = special.concat(charSet)
      }
      password="";
      for (var i = 0; i < passLength; ++i) {
        password += charSet[Math.floor(Math.random()*charSet.length)];
      }
    return password;

    }
    else  {
      alert("Sorry, you must select at least one kind of character")
    }
  } else {
    alert("Sorry, your answer was not within the parameters")
  }
  console.log(charSet)
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
