let burger = document.querySelector('.mobile-burger')
let burgerMenu = document.querySelector('.burger__menu')
let bodyOpacity = document.querySelector('.body__opacity')

burger.addEventListener('click', (event)=>{
  event.preventDefault()

  burger.classList.toggle('burger-active')
  burgerMenu.classList.toggle('menu__on')
  bodyOpacity.classList.toggle('opacity__on')
})

bodyOpacity.addEventListener('click', (event)=>{
  event.preventDefault()

  bodyOpacity.classList.remove('opacity__on')
  burger.classList.remove('burger-active')
  burgerMenu.classList.remove('menu__on')
})


const swiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  // effect: "fade",
  autoplay: {
    delay: 2500,
    // disableOnInteraction: true,
  },
  
});

let lang = document.querySelector('.header-lang')
let langMenu = document.querySelector('.header-lang__menu')
lang.addEventListener('mouseover', (event)=> {
  event.preventDefault()

  langMenu.classList.add('lang__menu-active')
})
lang.addEventListener('mouseout', (event)=> {
  event.preventDefault()

  langMenu.classList.remove('lang__menu-active')
})