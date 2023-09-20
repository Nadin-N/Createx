class BenefitsTabs {
  constructor() {
    this.refs = {
      benefitGroups: document.querySelectorAll('.js-benefits-item'),
      tabButtons: document.querySelectorAll('.js-tab-button'),
    };

    this.addListeners();
  }

  addListeners() {
    this.refs.tabButtons.forEach(button =>
      button.addEventListener('click', this.selectBenefitGroup.bind(this))
    );
  }

  selectBenefitGroup(event) {
    const clickedButton = event.target.closest('.js-tab-button');
    this.refs.tabButtons.forEach(button => {
      clickedButton.name !== button.name
        ? button.classList.remove(`clicked`)
        : button.classList.add(`clicked`);
    });

    this.refs.benefitGroups.forEach(group => {
      clickedButton.name === group.dataset.name
        ? group.classList.remove('is-hidden')
        : group.classList.add('is-hidden');
    });
  }
}

new BenefitsTabs();
