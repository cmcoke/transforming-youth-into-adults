class Modal {
  constructor() {
    this.profileContent = document.querySelector(".profile__content");
    this.modal = document.querySelector(".modal");
    this.closeButton = document.querySelector(".modal__close-button");
    this.overlay = document.querySelector(".overlay-bio");
    this.events();
  }

  events() {
    this.profileContent.addEventListener("click", () => this.openModal());
    this.closeButton.addEventListener("click", () => this.closeModal());
  }

  openModal() {
    if (!this.modal.classList.contains("modal--show")) {
      this.modal.classList.add("modal--show");
      this.overlay.classList.add("overlay-bio--is-open");
    } else {
      this.modal.classList.remove("modal--show");
      this.overlay.classList.remove("overlay-bio--is-open");
    }
  }

  closeModal() {
    this.modal.classList.remove("modal--show");
    this.overlay.classList.remove("overlay-bio--is-open");
  }
}

export default Modal;
