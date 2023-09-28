class AdvertForm {
  constructor() {
    this.refs = {
      advertForm: document.querySelector('.js-advert-form'),
      advertFormMailInput: document.querySelector(
        '.js-advert-form-input[name="advertEmail"]'
      ),
    };

    this.outputAdvertFormObject = {};

    this.addListeners();
  }

  addListeners() {
    this.refs.advertForm.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();

    const form = new FormData(this.refs.advertForm);

    for (let [name, value] of form) {
      this.outputAdvertFormObject[name] = value;
    }

    console.log(this.outputAdvertFormObject);

    event.target.reset();
  }
}

new AdvertForm();
