class Header {
  static CLOSE_MODAL_MENU_BTN_CODE = 'Escape';

  constructor() {
    this.refs = {
      openMenuBtn: document.querySelector('.js-menu-open'),
      closeMenuBtn: document.querySelector('.js-menu-close'),
      menu: document.querySelector('.js-modal-menu'),
      modalMenuItems: document.querySelectorAll('.js-modal-item'),
      body: document.querySelector('body'),
    };

    this.addListeners();
    this.defineModalCurrentPageLink();
  }

  addListeners() {
    this.refs.openMenuBtn.addEventListener('click', this.openMenu.bind(this));
  }

  openMenu() {
    this.refs.menu.classList.remove('is-hidden');
    this.refs.body.classList.add('no-scroll');
    this.refs.closeMenuBtn.addEventListener('click', this.closeMenu.bind(this));
    document.addEventListener('keydown', this.closeMenuWithBtn.bind(this));
    document.addEventListener(
      'click',
      this.closeMenuWithClickOutside.bind(this)
    );
  }

  closeMenu() {
    this.refs.menu.classList.add('is-hidden');
    this.refs.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', this.closeMenuWithBtn.bind(this));
    document.removeEventListener(
      'click',
      this.closeMenuWithClickOutside.bind(this)
    );
    this.refs.closeMenuBtn.removeEventListener(
      'click',
      this.closeMenu.bind(this)
    );
  }

  closeMenuWithBtn(event) {
    if (event.code !== Header.CLOSE_MODAL_MENU_BTN_CODE) {
      return;
    }
    this.closeMenu();
  }

  closeMenuWithClickOutside(event) {
    if (
      event.target.closest('.js-modal-menu') ||
      event.target.closest('.js-menu-open')
    ) {
      return;
    }
    this.closeMenu();
  }

  defineModalCurrentPageLink() {
    const dataPathArr = [];

    this.refs.modalMenuItems.forEach(item => {
      let itemName = item.dataset.path;

      dataPathArr.push(itemName);

      window.location.href.includes(itemName)
        ? item.classList.add('current-page-main')
        : item.classList.remove('current-page-main');
    });

    // const isIncludeAnyLink = dataPathArr.some(item =>
    //   window.location.href.includes(item)
    // );

    // if (!isIncludeAnyLink) {
    //   this.refs.defaultModalLink.classList.add('current-page-main');
    // }
  }
}
new Header();
