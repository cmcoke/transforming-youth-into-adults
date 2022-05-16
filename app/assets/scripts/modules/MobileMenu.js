class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".header__menu-icon");
    this.overlay = document.querySelector(".header__overlay");
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuIcon.classList.toggle("header__menu-icon--close-x");

    if (!this.overlay.classList.contains("header__overlay--open")) {
      this.overlay.classList.add("header__overlay--open");
      this.overlay.classList.remove("header__overlay--close");
    } else {
      this.overlay.classList.remove("header__overlay--open");
      this.overlay.classList.add("header__overlay--close");
    }
  }
}

export default MobileMenu;
