const readmoreToggle = document.querySelectorAll('.read-more-btn')

readmoreToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle ('read-active')
  })
})


function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('youtube-video', {
    videoId: 'wsALfL4BYAE',
    playerVars: {
      autoplay: 1,        
      controls: 0,    
      showinfo: 1,
      modestbranding: 0, 
      loop: 1,  
      fs: 0,
      cc_load_policy: 0,
      iv_load_policy: 3, 
      autohide: 1,  
      mute:1
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
 }




let toggleNavstatus = false;
const navbar = document.querySelector('.nav-active');
const topbar = document.querySelector('.navbar');
const opennav = document.querySelector('.hamburger #open');
const closeNav = document.querySelector('.hamburger #close');
let toggleNav = function () {
  if (toggleNavstatus === false) {
    topbar.style.height = '80vh';
    navbar.style.display = 'flex';
    navbar.style.transform = 'translate(0%)';
    opennav.style.display = 'none';
    closeNav.style.display = 'flex';
    navbar.style.animation = 'animateNav 0.8s ease forwards 1'
    navbar.style.animationDelay = '0.1s'
    toggleNavstatus = true;
    
  } else if (toggleNavstatus === true) {
    // navbar.style.display = 'flex';
    topbar.style.height = '8vh';
    navbar.style.transform = 'translate(-100%)';
    closeNav.style.display = 'none';
    opennav.style.display = 'flex';
    toggleNavstatus = false;
  }
};