//using selectors inside the element
const expandBtn = document.querySelectorAll('.question-btn');
const questionText = document.querySelectorAll('.question-text');
// traversing the dom

expandBtn.forEach(function(button, idx) {
  return button.addEventListener('click', function(e) {
    questionText[idx].classList.toggle('show-text')
    e.currentTarget.innerHTML = e.currentTarget.children[0].classList.contains('plus-icon') ? 
      '<span class="minus-icon"><i class="far fa-minus-square"></i></span>' : 
      '<span class="plus-icon"><i class="far fa-plus-square"></i></span>'
  })
})
