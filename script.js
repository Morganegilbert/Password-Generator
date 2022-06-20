// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var character = a
// const random =

// var banana = Array[randomNumber];
// var randomNumber = function(length) {
//   var value = Math.floor(math.random() * 21) + 40;
// };
function generatePassword() {
  var length = prompt('How long?')
  console.log(length);
  if (length < 8 || length > 128) {
      alert('Password must be between 8 and 128 characters.');
      return generatePassword();
  }
  if (length >= 8 || length < 128) {
    var confirmSpecial = window.confirm('Would you like to include special characters?');
    if (confirmSpecial) {
      // passwordText.value = ;
      // passwordText.vaue = randomNumber;
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
      
      let str = '';
      for (let i = 0; i < length; i++) {
        str += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return str;
    }
    else {
      var confirmNumbers = window.confirm("Would you like to include numbers?");
      if (confirmNumbers) {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
      
        let str = '';
        for (let i = 0; i < length; i++) {
          str += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return str;
      }
      else {

        // alert('Password does not include special characters.');
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      
        let str = '';
        for (let i = 0; i < length; i++) {
          str += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return str;
      }

    }
  }
  return "password";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
