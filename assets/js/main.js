/*=============== SHOW MENU ===============*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */
const menu = document.getElementById('nav-menu'),
      menuClose = document.getElementById('nav-close'),
      openMenu = document.getElementById('nav-toggle')

if(menu) {
  openMenu.addEventListener('click', () => {
  menu.classList.add('show-menu');
  
  })
}

if(menuClose) {
  menuClose.addEventListener('click',() => {
    menu.classList.remove('show-menu');
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW CART ===============*/


/*===== CART SHOW =====*/
/* Validate if constant exists */
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')


/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartShop) {
  cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart')
  })
}

if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove('show-cart');
  });
}
/*=============== SHOW LOGIN ===============*/


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
const login = document.getElementById('login'),
      loginToggle = document.getElementById('login-toggle'),
      loginClose = document.getElementById('login-close')

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */

if(loginToggle) {
  loginToggle.addEventListener('click', () => {
  login.classList.add("show-login");
  });
}

if(loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove('show-login');
  });
}

/*=============== HOME SWIPER ===============*/
var Homeswiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    Loop:'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollheader() {
  const header = document.getElementById('header')
  // when the scroll is greater than 50 viewprot height, add the scroll-header class tot he header
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollheader) 

/*=============== NEW SWIPER ===============*/
var swiperPopular = new Swiper(".new__content-swiper", {
  loop:true,
  spaceBetween: 16,
  centeredSlides: 'true',
  slidesPerView:'auto',
  grabCursor: true,

 

});
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is higher than 350 viewport heihgt, add the show-scroll class to a tag eith scrollup

  if(this.scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/