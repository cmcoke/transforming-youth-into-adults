import "../styles/styles.css";
import "lazysizes";
import "picturefill";
import MobileMenu from "./modules/MobileMenu";
// import Modal from "./modules/Modal";

let mobileMenu = new MobileMenu();
// let modal = new Modal();

// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if (module.hot) {
  module.hot.accept();
}
