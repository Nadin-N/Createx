const swiperReviews = new Swiper('.js-testimonials-swiper', {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 10,
    stretch: 100,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.js-testimonials-swiper-pagination',
    clickable: true,
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
