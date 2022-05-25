import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";

new MobileMenu();

// prevents elements with transisition from appearing on page load.
document.addEventListener("DOMContentLoaded",function(){
  let node = document.querySelector('.preload-transitions');
  node.classList.remove('preload-transitions');
});


// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if (module.hot) {
  module.hot.accept();
}
