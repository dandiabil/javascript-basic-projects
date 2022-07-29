const buttons = document.querySelectorAll('.btn');
const value = document.getElementById('value');

buttons.forEach(function(button) {
  return button.addEventListener('click', function(evt) {
    if(evt.target.innerText.toLowerCase() === 'decrease') {
      refreshUI(parseInt(value.innerText) - 1);
    }
    if(evt.target.innerText.toLowerCase() === 'increase') {
      refreshUI(parseInt(value.innerText) + 1);
    }
    if(evt.target.innerText.toLowerCase() === 'reset') {
      value.innerText = "0";
      value.style.color = "var(--clr-grey-5)";
    }
  })
})

function refreshUI(val){
  if(val < 0){
    value.style.color = "red";
  }
  else if(val > 0){
    value.style.color = "green";
  }
  else value.style.color = "var(--clr-grey-5)";
  value.innerText = val.toString();
}