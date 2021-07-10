function generatePassword() {

  // Array
  var nos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "|", "{", "}", "[", "]", ":", "<", ">", ".", "?"];
  var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var storage = [""];
  var finalPassword = [""];

  //Generate Prompt
  var passwordLength = prompt("How long would you like your password to be? The password must be between 8 to 128 characters long.");
  while (passwordLength <8 || passwordLength >128 || isNaN(passwordLength)){
    alert("invalid data entry");
    passwordLength = prompt("How long would you like your password to be? The password must be between 8 to 128 characters long.");
  };
  var nosNumber = confirm("Would you like to add numbers?");
  if (nosNumber){
    storage += nos;
  }

  var lowerLetter = confirm("Would you like to add lowercased letters?");
  if (lowerLetter){
    storage += lowerLetter;
  }

  var upperLetter = confirm("Would you like to add uppercased letters?");
  if (upperLetter){
    storage += upperLetter;
  }

  var specialCharacter = confirm("Would you like to add special characters?");
  if (specialCharacter){
    storage += special;
  }
  for (var i = 0; i < passwordLength; i++) {
    password = storage[Math.floor(Math.random() * storage.length)]
  }
}
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  
}
  // Add event listener to generate button

    generateBtn.addEventListener ("click", writePassword)
