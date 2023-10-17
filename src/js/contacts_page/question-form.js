export default class QuestionForm {
  constructor() {
    this.refs = {
      questionForm: document.querySelector('.js-questions-form'),
      questionFormSubmit: document.querySelector('.js-questions-button'),
      errorMessages: document.querySelectorAll('.js-questions-error-message'),
    };

    this.outputQuestionForm = {};
    this.addListeners();
  }

  addListeners() {
    this.refs.questionForm.addEventListener('submit', this.onSubmit.bind(this));
    this.refs.questionForm.addEventListener('change', this.onChange.bind(this));
  }

  onChange(event) {
    const { value, name } = event.target;

    switch (name) {
      case 'email':
        console.log();
        this.validateEmail(event, value);
        break;
      case 'phone':
        this.validatePhone(event, value);
        break;
      case 'firstName':
        this.validateName(event, value);
        break;
      case 'lastName':
        this.validateName(event, value);
        break;
    }
    this.disableWhenError();
  }

  onSubmit(event) {
    event.preventDefault();

    const form = new FormData(this.refs.questionForm);

    for (let [name, value] of form) {
      this.outputQuestionForm[name] = value;
    }

    console.log(this.outputQuestionForm);

    event.target.reset();
  }

  disableWhenError() {
    const errorMessageArr = [...this.refs.errorMessages];

    errorMessageArr.every(el => !el.textContent)
      ? this.refs.questionFormSubmit.removeAttribute('disabled')
      : this.refs.questionFormSubmit.setAttribute('disabled', '');
  }

  validateEmail(event, email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const result = emailRegex.test(email);
    const message = 'Please enter a valid email address';

    this.insertMessage(result, event, message);
  }

  validatePhone(event, phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{2}-\d{2}$/; //Phone in format: XXX-XXX-XX-XX
    let result = phoneRegex.test(phone) || !event.target.value; // "|| !event.target.value" in case if phone is not required
    const message = 'Please enter a valid phone number';

    this.insertMessage(result, event, message);
  }

  validateName(event, name) {
    const nameRegex = /^[A-Za-z\s\-]+$/; // Allow letters, spaces, and hyphens
    const result = name.trim() && nameRegex.test(name); // "name.trim()"  if user enters " "(space only)
    const message = 'Please enter a valid name (letters with spaces, hyphens)';

    this.insertMessage(result, event, message);
  }

  insertMessage(result, event, message) {
    event.target.closest('.js-input-wrap').lastElementChild.textContent = result
      ? ''
      : message;
  }
}

new QuestionForm();
