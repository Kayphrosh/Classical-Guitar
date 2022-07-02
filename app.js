const readmoreToggle = document.querySelectorAll('.read-more-btn')

readmoreToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle ('read-active')
  })
})