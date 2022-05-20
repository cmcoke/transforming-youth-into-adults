import "../styles/styles.css";
import "lazysizes";
import "picturefill";
import MobileMenu from "./modules/MobileMenu";
import DonationForm from "./modules/DonationForm";

new MobileMenu();
new DonationForm();

// performs a code split for the modal.js file
let modal;
document.querySelector(".profile__content").addEventListener("click", () => {
  if (typeof modal == "undefined") {
    import(/* webpackChunkName: "modal" */ "./modules/Modal")
      .then(x => {
        modal = new x.default();
        setTimeout(() => modal.openModal(), 20);
      })
      .catch(() => console.log("there was a problem."));
  } else {
    modal.openModal();
  }
});

// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if (module.hot) {
  module.hot.accept();
}
