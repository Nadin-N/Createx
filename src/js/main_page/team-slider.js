// import Splide from '@splidejs/splide';
import Splide from '../../../node_modules/@splidejs/splide';

const windowWidth = window.screen.width;

new Splide('.splide', {
  pagination: false,
  type: 'loop',
  fixedWidth: '285px',
  gap: '30px',
  speed: 500,
  drag: 'free',
  focus: `${windowWidth > 1320 ? 1 : 'center'}`,
  // autoScroll: {
  //   speed: 0.5,
  // },
}).mount();
// }).mount({ AutoScroll });
