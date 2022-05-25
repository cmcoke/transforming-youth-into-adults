class MobileMenu {
  constructor() {
    this.overlay = document.querySelector(".overlay");
    this.mainNav = document.querySelector(".main-nav");
    this.menuIcon = document.querySelector(".header__menu-icon");
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuIcon.classList.toggle("header__menu-icon--close-x");

    if (!this.overlay.classList.contains("overlay--is-open")) {
      document.body.style.overflow = "hidden";
      this.overlay.classList.add("overlay--is-open");
      this.mainNav.style.display = "block";
    } else {
      document.body.style.overflow = "visible";
      this.overlay.classList.remove("overlay--is-open");
      this.mainNav.style.display = "none";
    }
  }
}

export default MobileMenu;
