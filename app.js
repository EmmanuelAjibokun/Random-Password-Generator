const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordDiv1 = document.querySelector(".password_div1");
const passwordDiv2 = document.querySelector(".password_div2");

const passwordButton = document.querySelector(".password_button");
passwordButton.addEventListener('click', () => {
  passwordDiv1.textContent = generateRandomPassword();
  passwordDiv2.textContent = generateRandomPassword();
})

function generateRandomPassword() {
  let newPassword = "";
  for(let i = 0; i < 15; i++) {
    let randomCharacter = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomCharacter]
  }
  return newPassword
}