
const swiperOb = new Swiper(".swiper-container",{
    speed:400,
    spaceBetween:100,
    effect:"flip",
    fadeEffect: {
        crossFade: true
      },
    slidesPerView: 1,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-next"
    }
    
});

const swiper = document.querySelector(".swiper-container").swiper;
window.swiper = swiper; 
console.log('swiper-container');

