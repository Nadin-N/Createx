// import Swiper, { Pagination } from 'swiper';
// // import Swiper from 'swiper';
// // import { Navigation, Pagination } from 'swiper/modules';
// // import { Pagination } from 'swiper';

// // const windowWidth = window.screen.width;
const swiperReviews = new Swiper('.js-testimonials-swiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// const swiper = new Swiper('.swiper', {
//   modules: [Pagination],
//   direction: 'horizontal',
//   loop: true,
//   spaceBetween: 20,

//   pagination: {
//     el: '.js-testimonials-swiper-pagination',
//     clickable: true,
//   },
// });
// import Swiper from 'swiper';

// import { Navigation, Pagination } from 'swiper';
// import 'swiper/swiper-bundle.min';
// import { Navigation, Pagination } from 'swiper/modules';

// new Swiper('.swiper', {
//   // modules: [Navigation, Pagination],
//   // direction: 'vertical',
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
