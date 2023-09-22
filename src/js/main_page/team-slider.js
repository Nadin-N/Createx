import Splide from '@splidejs/splide';
// import '@splidejs/splide/dist/css/themes/splide.min.css';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const windowWidth = window.screen.width;

new Splide('.splide', {
  pagination: false,
  type: 'loop',
  fixedWidth: '285px',
  gap: '30px',
  speed: (number = 500),
  drag: 'free',
  focus: `${windowWidth > 1320 ? 1 : 'center'}`,
  // autoScroll: {
  //   speed: 0.5,
  // },
}).mount();
// }).mount({ AutoScroll });
