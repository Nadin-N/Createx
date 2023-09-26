import Splide from '../../../node_modules/@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const windowWidth = window.screen.width;

new Splide('.splide', {
  pagination: false,
  type: 'loop',
  fixedWidth: '285px',
  gap: `${windowWidth > 1320 ? '30px' : '20px'}`,
  speed: 500,
  focus: `${windowWidth > 1320 ? 1 : 'center'}`,
  autoScroll: {
    speed: 0.3,
  },
  // }).mount();
}).mount({ AutoScroll });
