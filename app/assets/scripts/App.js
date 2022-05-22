import "../styles/styles.css";
import "lazysizes";
import "picturefill";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MobileMenu from "./modules/MobileMenu";
// import DonationForm from "./modules/DonationForm";
// import HomePageAnimations from './modules/HomePageAnimations';
// import AboutUsPageAnimations from './modules/AboutUsPageAnimations';
// import JoinUsPageAnimations from './modules/JoinUsPageAnimations';
// import ServicesPageAnimations from './modules/ServicesPageAnimations';
// import EventsPageAnimations from './modules/EventsPageAnimations';
import DonatePageAnimations from './modules/DonatePageAnimations';

new MobileMenu();
// new DonationForm();
// new HomePageAnimations();
// new AboutUsPageAnimations();
// new JoinUsPageAnimations();
// new ServicesPageAnimations();
// new EventsPageAnimations();
new DonatePageAnimations();

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
