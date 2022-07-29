const closeButton = document.querySelector('.close-btn')
const toggleButton = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')

closeButton.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar')
})

toggleButton.addEventListener('click', function() {
  sidebar.classList.toggle('show-sidebar')
})