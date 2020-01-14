var promptLength = prompt("How long would you like your password to be? Must be between 8-128 characters")
var confSpecialChar = confirm("Do you want special characters?")
var confNumbers = confirm("Would you like numbers?")
var confUppercase = confirm("Would you like uppercase characters?")
var conLowercase = confirm("and/or lowercase?")

function random_password_generate(max,min)
{
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";

    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;

    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}

document.getElementById("generatePassword").addEventListener("click", function(){
    random_password = random_password_generate(16,8);
    document.getElementById("randomPassword").value = random_password;
});

function myFunction() {

    var copyText = document.getElementById("randomPassword");

    copyText.select();
  
  
    document.execCommand("copy");


    alert("Copied the text: " + copyText.value);
  }

