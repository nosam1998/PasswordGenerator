// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    let lwr = "abcdefghijklmnopqrstuvwxyz";
    let upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "1234567890";
    let specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let passwordStr = "";
    let passwordCharStr = "";
    let randInt;

    let pwdLen = parseInt(prompt("How long do you want your password? Please type a number between 8 and 128!"));

    if (pwdLen >= 8 && pwdLen <= 128) {
        let lwrChoice = confirm("Click OK if you want lower")
        let uprChoice = confirm("Do you want upper case characters in your password? Type 'y' or 'n'")
        let numChoice = confirm("Do you want numbers in your password? Type 'y' or 'n'")
        let spclChoice = confirm("Do you want special characters in your password? Type 'y' or 'n'")

        if (lwrChoice) {
            passwordCharStr += lwr;
        }

        if (uprChoice) {
            passwordCharStr += upr;
        }

        if (numChoice) {
            passwordCharStr += nums;
        }

        if (spclChoice) {
            passwordCharStr += specialChars;
        }

        if (passwordCharStr.length !== 0) {
            for (let i = 0; i < pwdLen; i++) {
                randInt = Math.floor(Math.random() * passwordCharStr.length);
                passwordStr += passwordCharStr[randInt];
            }
        } else {
            alert("Please select at least one option!");
        }
    } else if (userChoices.length === 0) {
        alert("Please select at least one option!");
    } else if (pwdLen < 8 || pwdLen > 128) {
        alert("Please enter a number between 8 and 128!");
    } else {
        alert("Something went wrong!");
    }

    if (passwordStr.length === 0) {
        return "";
    } else {
        return passwordStr;
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);