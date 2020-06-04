var select = document.querySelector('#options-animation-timing-func-select')

var glide = new Glide('.glide', {
  animationTimingFunc: 'ease-in-out',
  animationDuration: 800,
  autoplay: 3000,
  hoverpause: false,
  perView: 1,
  type: 'carousel'
})

select.addEventListener('change', function (event) {
  glide.update({
    animationTimingFunc: event.target.value
  })
})

glide.mount()

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});