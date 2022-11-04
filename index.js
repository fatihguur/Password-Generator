const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("firstPasswordButton");
let secondPasswordEl = document.getElementById("secondPasswordButton");

let generatedPasswordOne = "";
let generatedPasswordTwo = "";
let passwordLenght = 15;

function generatePassword1() {
    let randomCharacter = characters[Math.floor((Math.random() * characters.length))];  
    generatedPasswordOne += randomCharacter;   
    }

    function generatePassword2() {
        let randomCharacter = characters[Math.floor((Math.random() * characters.length))];  
        generatedPasswordTwo += randomCharacter;   
        }


function Generate() {
    generatedPasswordOne = "";
    generatedPasswordTwo = "";

    secondPasswordEl.textContent = "";
    for (let i = 0; i < passwordLenght; i++) {
        generatePassword1();
        generatePassword2(); 
        
        if (i === 14) {
            firstPasswordEl.textContent = generatedPasswordOne;
            secondPasswordEl.textContent = generatedPasswordTwo;
        }
    }

function CopyButtonOne() { 
    let copiedPassword = firstPasswordEl.textContent;
    navigator.clipboard.writeText(copiedPassword);
}
}  



