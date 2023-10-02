class TeamAbout {
  constructor() {
    this.refs = {
      slider: document.querySelector('.js-splide'),
      slideTrack: document.querySelector('.js-splide__track'),
      slideList: document.querySelector('.js-splide__list'),
      slideSlide: document.querySelector('.js-splide__slide'),
    };

    this.removeSliderClasses();
  }
  removeSliderClasses() {
    if (window.location.href.includes('about.html')) {
      this.refs.slider.classList.remove('splide');
      this.refs.slideTrack.classList.remove('splide__track');
      this.refs.slideList.classList.remove('splide__list');
      this.refs.slideSlide.classList.remove('splide__slide');
      this.refs.slideList.classList.add('team__list');
    }
  }
}
new TeamAbout();
