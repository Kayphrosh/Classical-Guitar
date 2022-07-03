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
