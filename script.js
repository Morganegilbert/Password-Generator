// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generatePassword function
function generatePassword() {
  var length = prompt('How long would you like the password? Please choose a number of at least 8 and less than 128.')
  // console.log(length);

  // If the length is less than 8 or greater than 128, will return to ask How long?
  if (length < 8 || length > 128) {
      alert('Password must be a number of at least 8 and less than 128 characters.');
      return generatePassword();
  }

  // Adding criteria for true/false statements and outcomes
  if (length >= 8 || length < 128) {
    // Variables for special, number, uppercase, and lowercase character criteria
    var confirmSpecial = window.confirm('Would you like to include special characters?');
    var confirmNumbers = window.confirm('Would you like to include numbers?');
    var confirmUpper = window.confirm(' Would you like to include uppercase letters?');
    var confirmLower = window.confirm('Would you like to include lowercase letters?');

    // Outcomes depending on True/False scenerios for character criteria selections
    if (confirmSpecial && confirmNumbers && confirmUpper && confirmLower) {
      return selectPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()', length); 
    }
    if (confirmSpecial && confirmNumbers && confirmUpper && !confirmLower) {
      return selectPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()', length); 
    }
    if (confirmSpecial && confirmNumbers && !confirmUpper && !confirmLower) {
      return selectPassword('1234567890!@#$%^&*()', length); 
    }
    if (confirmSpecial && !confirmNumbers && !confirmUpper && !confirmLower) {
      return selectPassword('!@#$%^&*()', length); 
    }
    if (!confirmSpecial && !confirmNumbers && !confirmUpper && !confirmLower) {
      alert('Password must include at least one criteria!');
      return generatePassword();    
    }
    if (!confirmSpecial && !confirmNumbers && !confirmUpper && confirmLower) {
      return selectPassword('abcdefghijklmnopqrstuvwxyz', length); 
    }
    if (!confirmSpecial && confirmNumbers && !confirmUpper && !confirmLower) {
      return selectPassword('1234567890', length); 
    }
    if (!confirmSpecial && confirmNumbers && confirmUpper && !confirmLower) {
      return selectPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', length); 
    }
    if (confirmSpecial && !confirmNumbers && confirmUpper && !confirmLower) {
      return selectPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()', length); 
    }
    if (confirmSpecial && confirmNumbers && !confirmUpper && confirmLower) {
      return selectPassword('abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()', length); 
    }
    if (confirmSpecial && !confirmNumbers && !confirmUpper && confirmLower) {
      return selectPassword('abcdefghijklmnopqrstuvwxyz!@#$%^&*()', length); 
    }
    if (!confirmSpecial && !confirmNumbers && confirmUpper && !confirmLower) {
      return selectPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZab', length); 
    }
    if (!confirmSpecial && !confirmNumbers && !confirmUpper && confirmLower) {
      return selectPassword('abcdefghijklmnopqrstuvwxyz', length); 
    }
    if (!confirmSpecial && confirmNumbers && confirmUpper && confirmLower) {
      return selectPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890', length); 
    }
    if (!confirmSpecial && !confirmNumbers && confirmUpper && confirmLower) {
      return selectPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', length); 
    }
    if (confirmSpecial && !confirmNumbers && confirmUpper && confirmLower) {
      return selectPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()', length); 
    }
    if (!confirmSpecial && confirmNumbers && !confirmUpper && confirmLower) {
      return selectPassword('abcdefghijklmnopqrstuvwxyz1234567890', length); 
    }
  }

return "password";
}



// Function parameters for above generatePassword. 
function selectPassword(passwordString, selectedLength) {
  let characters = passwordString;

  // Creates string outcome, random generation through return selectPassword above which utilizes the string parametwer provided
  let str = '';
  for (let i = 0; i < selectedLength; i++) {
    str += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return str;
}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
