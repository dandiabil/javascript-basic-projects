const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const background = document.querySelector('main');
const colorText = document.querySelector('.color');

function randomize(){
  return Math.floor(Math.random() * 16);
}

function generateHex(){
  let hexCode = '';
  for(let i = 0; i < 6; i++){
    const randVal = randomize();
    hexCode += hex[randVal]
  }
  background.style.backgroundColor = `#${hexCode}`;
  colorText.innerText = `#${hexCode}`;
}