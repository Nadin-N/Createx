import { throttle } from 'throttle-debounce';

class AnimateCards {
  constructor() {
    this.refs = {
      coursesList: document.querySelector('.courses-preview__box'),
      coursesCards: document.querySelectorAll('.card-courses__img img'),
    };

    this.addListener();
    // this.isInViewport();
    // this.animate();
    // this.getRect();
  }

  addListener() {
    // document.addEventListener(
    //   'scroll',
    //   throttle(1000, this.isInViewport.bind(this))
    // );
    throttle(1000, this.isInViewport.bind(this));
  }

  isInViewport() {
    const rect = this.refs.coursesList.getBoundingClientRect();
    const isVisible =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    console.log(isVisible);

    let timerId = null;

    // if (isVisible) {
    //   if (timerId) {
    //     return;
    //   } else {
    //     timerId = setInterval(() => this.animate(), 1000);
    //     console.log('timerId set:', timerId);
    //   }
    // } else {
    //   console.log('timerId clear:', timerId);
    //   clearInterval(timerId);
    // }

    isVisible
      ? (timerId = setInterval(() => this.animate(), 1000))
      : clearInterval(timerId);
  }

  getRect() {
    let rect = this.refs.coursesList.getBoundingClientRect();
    console.log(rect.top);
    // if (rect.top < 0) {
    //   return;
    // }

    // let timerId = null;

    // rect.top > 0
    //   ? (timerId = setInterval(() => this.animate(), 1000))
    //   : clearInterval(timerId);

    // if (rect.top > 0) {
    //   if (timerId) {
    //     return;
    //   } else {
    //     timerId = setInterval(() => this.animate(), 1000);
    //   }
    // } else {
    //   clearInterval(timerId);
    // }

    // console.log(rect.top);
    // if (rect.top > 0) {
    //   this.animate();
    // }
  }

  // }
  animate() {
    // console.log('scrolling...');
    // let rect = this.refs.coursesList.getBoundingClientRect();
    // console.log('The bounding Rect of element is ', rect);
    // if (rect.top > 0) {
    console.log(Math.floor(Math.random() * this.refs.coursesCards.length));
    // console.log(this.refs.coursesCards.length);

    const numberOfCardToAnimate = Math.floor(
      Math.random() * this.refs.coursesCards.length
    );

    // this.refs.coursesCards.forEach(card => {
    // 	console.log();
    // })
    // this.animate()
    this.refs.coursesCards[numberOfCardToAnimate].classList.add(
      'scale-animated'
    );

    setTimeout(() => {
      this.refs.coursesCards[numberOfCardToAnimate].classList.remove(
        'scale-animated'
      );
      // this.animate();
    }, 1000);
  }
  // }
}

new AnimateCards();

class ShowCards {
  constructor() {
    this.refs = {
      coursesList: document.querySelector('.courses-preview__box'),
      coursesCards: document.querySelectorAll('.card-courses'),
    };

    this.showNthCards();
  }

  showNthCards() {
    console.log(this.refs.coursesCards);
    // const newCardsArray = [];
    // this.refs.coursesCards.forEach(card => {
    //   newCardsArray.push(card);
    // });
    // const newCardsArray = Array.from(this.refs.coursesCards);
    // const newCardsArray = Array.from(this.refs.coursesCards);
    // console.log(newCardsArray);

    // const newMark = this.refs.coursesCards.splice(3, 3).join(',');
    // console.log(newMark);
    // this.refs.coursesList.innerHTML = newMark;
    // this.refs.coursesCards.forEach(card => )
    for (let i = 3; i < this.refs.coursesCards.length; i += 1) {
      // if (i > 2) {
      console.log(this.refs.coursesCards[i]);
      this.refs.coursesCards[i].classList.add('is-hidden');
      // }
    }
  }
}

// new ShowCards();
