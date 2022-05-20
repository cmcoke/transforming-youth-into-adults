class DonationForm {
  constructor() {
    this.selected = document.querySelectorAll('.selected');
    this.donationValue = document.querySelector('.donate__value');
    this.donateButton = document.querySelector('.donate__submit');
    this.events();
  }

  events() {

    this.selected.forEach(amount => {
      amount.addEventListener('click', () => this.result(amount))
    })

    this.donateButton.addEventListener('click', (e) => this.submitDonation(e))

  }

  result(amount){
    this.donationValue.value = amount.value;
  }

  submitDonation(e){
    e.preventDefault();
    this.donationValue.value = '';
  }

}

export default DonationForm;
