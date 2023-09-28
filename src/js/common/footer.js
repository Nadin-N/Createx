class NewsLetterForm {
  constructor() {
    this.refs = {
      newsLetterForm: document.querySelector('.js-newsletter-form'),
      newsLetterFormMailInput: document.querySelector(
        '.js-newsletter-form-input[name="newsEmail"]'
      ),
    };

    this.outputNewsLetterFormObject = {};

    this.addListeners();
  }

  addListeners() {
    this.refs.newsLetterForm.addEventListener(
      'submit',
      this.onSubmit.bind(this)
    );
  }

  onSubmit(event) {
    event.preventDefault();

    const form = new FormData(this.refs.newsLetterForm);

    for (let [name, value] of form) {
      this.outputNewsLetterFormObject[name] = value;
    }

    console.log(this.outputNewsLetterFormObject);

    event.target.reset();
  }
}

new NewsLetterForm();
