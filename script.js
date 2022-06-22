// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generatePassword function
function generatePassword() {
  var length = prompt('How long?')
  console.log(length);

  // if the length is less than 8 or greater than 128, will return to ask How long?
  if (length < 8 || length > 128) {
      alert('Password must be a number of at least 8 and less than 128 characters.');
      return generatePassword();
  }

  // if the length is at least 8 and less than 128, will continue to confirm special characters
//   if (length >= 8 || length < 128) {
//     var confirmSpecial = window.confirm('Would you like to include special characters?');
//     if (confirmSpecial) {
//       let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
      
//       let str = '';
//       for (let i = 0; i < length; i++) {
//         str += characters.charAt(Math.floor(Math.random() * characters.length));
//       }
//       return str;
//     }
//     else {
//       var confirmNumbers = window.confirm("Would you like to include numbers?");
//       if (confirmNumbers) {
//         let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
      
//         let str = '';
//         for (let i = 0; i < length; i++) {
//           str += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         return str;
//       }
//       else {

//         // alert('Password does not include special characters.');
//         let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      
//         let str = '';
//         for (let i = 0; i < length; i++) {
//           str += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         return str;
//       }

//     }
//   }
//   return "password";
// }


  if (length >= 8 || length < 128) {
    var confirmSpecial = window.confirm('Would you like to include special characters?');
    if (confirmSpecial) {
      var confirmNumbers = window.confirm('Would you like to include numbers?');
      if (confirmNumbers) {
          return passwordDetermination("Would you like to include Uppercase?", 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()', 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()', length);
      }
      else {
        return passwordDetermination("Would you like to include Uppercase?", 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()', 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()', length);
      }
    }

    else {
      var confirmNumbers = window.confirm('Would you like to include numbers?');
        if (confirmNumbers) {
            return passwordDetermination("Would you like to include Uppercase?", 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890', 'abcdefghijklmnopqrstuvwxyz1234567890', length);
        }
        else {
            return passwordDetermination("Would you like to include Uppercase?", 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz', length);
        } 
    }
  }

return "password";
}

function selectPassword(passwordString, selectedLength) {
  // alert('Password does not include special characters.');
  let characters = passwordString;
  console.log("This is my length.", selectedLength)

      
  let str = '';
  for (let i = 0; i < selectedLength; i++) {
    str += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log("This is my password.", str)
  return str;
}

function passwordDetermination(confirmationString, confirmedPassword, canceledPassword, selectedLength) {
  var confirmNumbers = window.confirm(confirmationString);
  if (confirmNumbers) {
    console.log("This is my password?", confirmedPassword)
    return selectPassword(confirmedPassword, selectedLength);

  }
  else {

    // alert('Password does not include special characters.');
    console.log("This is my password..", canceledPassword)
    return selectPassword(canceledPassword, selectedLength);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
