/*=============== SHOW MENU ===============*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW CART ===============*/


/*===== CART SHOW =====*/
/* Validate if constant exists */


/*===== CART HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW LOGIN ===============*/


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */


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

  // pagination: {
  //   el: ".swiper-pagination",
  //   dynamicBullets: true,
  // },

  breakpoints: {

      768: {
        slidesPerView: 3,
        spaceBetween: 0,

      },
      1024: {
        spaceBetween: 16,
      },
  },

});
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/