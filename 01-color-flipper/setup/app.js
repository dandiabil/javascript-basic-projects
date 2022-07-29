const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const background = document.querySelector('main');
const colorText = document.querySelector('.color');

function randomize(){
  return Math.floor(Math.random() * 4);
}

function generateSimpleColor() {
  const randVal = randomize();
  background.style.backgroundColor = colors[randVal];
  colorText.innerText = colors[randVal];
}