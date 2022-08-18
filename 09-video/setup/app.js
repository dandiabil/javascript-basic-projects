// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preloader = document.querySelector('.preloader')
const switchBtn = document.querySelector('.switch-btn');
const videoPlayer = document.querySelector('.video-container')

window.addEventListener('DOMContentLoaded', function() {
  preloader.classList.add('hide-preloader')
})

switchBtn.addEventListener('click', function(e) {
  switchBtn.classList.toggle('slide');
  if(e.currentTarget.classList.contains('slide')){
    videoPlayer.pause();
  }else{
    videoPlayer.play();
  }
  
})