var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var numberSelection; 
var specialcharacterSelection;
var uppercaseSelection; 
var lowercaseSelection; 

specialcharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};
uppercaseSelection = letterChoice.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function generatePassword() {
    userInput = parseInt(prompt("Choose between 12 and 50 characters for your password"));
    if (!userInput) {
        alert("This needs a value");
    } else if (userInput < 12 || userInput > 50) {
        userInput = parseInt(prompt("You must choose between 12 and 50"));

    } else {
    
        numberSelection = confirm("Do you want numbers?");
        specialcharacterSelection = confirm("Do you want special characters?");
        uppercaseSelection = confirm("Do you want Uppercase letters?");
        lowercaseSelection = confirm("Do you want Lowercase letters?");
    };


    if (!characterSelection && !numberSelection && !uppercaseSelection && !lowercaseSelection) {
        choices = alert("Must choose a criteria");

    }
  
    else if (specialcharacterSelection && numberSelection && uppercaseSelection && lowercaseSelection) {

        choices = character.concat(number, letterChoice, uppercaseSelection);
    }
   
    else if (specialcharacterSelection && numberSelection && uppercaseSelection) {
        choices = character.concat(number, uppercaseSelection);
    }
    else if (specialcharacterSelection && numberSelection && lowercaseSelection) {
        choices = character.concat(number, letterChoice);
    }
    else if (specialcharacterSelection && lowercaseSelection && uppercaseSelection) {
        choices = character.concat(letterChoice, uppercaseSelection);
    }
    else if (numberSelection && lowercaseSelection && uppercaseSelection) {
        choices = number.concat(letterChoice, uppercaseSelection);
    }
  
    else if (specialcharacterSelection &&  numberSelection) {
        choices = character.concat(number);

    } else if (specialcharacterSelection && lowercaseSelection) {
        choices = character.concat(letterChoice);

    } else if (specialcharacterSelection && uppercaseSelection) {
        choices = character.concat(uppercaseSelection);
    }
    else if (lowercaseSelection && numberSelection) {
        choices = letterChoice.concat(number);

    } else if (lowercaseSelection && uppercaseSelection) {
        choices = letterChoice.concat(uppercaseSelection);

    } else if (numberSelection && uppercaseSelection) {
        choices = number.concat(uppercaseSelection);
    }
  
    else if (specialcharacterSelection) {
        choices = character;
    }
    else if (numberSelection) {
        choices = number;
    }
    else if (lowercaseSelection) {
        choices = letterChoice;
    }
   
    else if (uppercaseSelection) {
        choices = space.concat(uppercaseSelection);
    };


    var password = [];
    for (var i = 0; i < userInput; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}