const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12
let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")
let messageEl = document.getElementById("message")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

function checkLength() {
    let corta = document.getElementById("eight")
    let normal = document.getElementById("twelve")
    let larga = document.getElementById("sixteen")
    if (corta.checked) {
        passwordLength = 8
    } else if (larga.checked) {
        passwordLength = 16
    } else if (normal.checked) {
        passwordLength = 12
    }
}

function handler_click() {
    checkLength()
    const generatedPasswordOne = generateRandomPassword()
    passwordOneEl.textContent = generatedPasswordOne
    //console.log("Here is a random password: ", generatedPasswordOne)
    const generatedPasswordTwo = generateRandomPassword()
    passwordTwoEl.textContent = generatedPasswordTwo
}

function copy(option) {
    if (option === 'One') {
        navigator.clipboard.writeText(passwordOneEl.textContent)
    } else {
        navigator.clipboard.writeText(passwordTwoEl.textContent)
    }
    console.log(option)
    messageEl.classList.add("message")
    messageEl.textContent = "copiado!"
    setTimeout(() => { 
        messageEl.textContent=""
        messageEl.classList.remove("message")
    }, 500)
}
