class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.closeButton = document.querySelector(".modal__close-button");
    this.overlay = document.querySelector(".overlay-bio");
    this.events();
  }

  events() {
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

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <div class="modal">

            <!-- position relative modal close button & content -->
            <div class="modal__container">

              <!-- close button -->
              <div class="modal__close-button"></div>

              <!-- modal content -->
              <div class="modal__content">

                <div class="modal__member-photo">
                  <img src="assets/images/profile-icon.png" alt="profile picture of broad member">
                </div>

                <div class="modal__member-bio">

                  <h5 class="modal__member-title">EXECUTIVE DIRECTOR</h5>
                  <h1 class="modal__member-name">Kareen Hill</h1>

                  <p class="paragraph paragraph--small paragraph__mb">
                    Kareen Abdul Jabar Hill has served the Baltimore community for over 20 years since beginning his
                    career as a Baltimore Police Officer in 1998. During his 13 years on the force, he patrolled and
                    ensured public safety in high crime areas of the city, participating in approximately 2,500
                    narcotic arrests and receiving Commendatory Performance Awards for four high profile narcotic
                    seizures. In 2011 he was forced to retire after an injury in the line of duty. Still wishing to
                    serve his community, Hill decided to pursue a career in social work and earned a Bachelor of
                    Social Work, with an emphasis in mental health, from Morgan State University and a Master of
                    Social Work from the University of Maryland, Baltimore. During this period, Hill interned as an
                    Independent Living Specialist for King Edwards Inc., where he helped youths and young adults
                    find
                    employment and located resources that helped improve their quality of life.
                  </p>

                  <p class="paragraph paragraph--small paragraph__mb">
                    Hill's work with King Edwards Inc. opened his eyes to the services foster care youths continue
                    to
                    need once they age out of the foster system. This inspired him to create the non-profit
                    Transforming Youths Into Adults (TYIA) in 2019, where he serves as the Executive Director. In
                    this
                    role, Hill oversees company operations and ensures TYIA employees and business practices comply
                    with regulatory and legal requirements. He also identifies potential sources of investment and
                    organizes fundraising efforts, all while managing employees from diverse backgrounds in every
                    department—from public relations and fundraising to administration and accounting. The most
                    rewarding part of his work with TYIA has been supporting foster care youth that identify as
                    LGBTQ+
                    with safe houses that address their daily needs, and the development of the After Youth Program.
                    This unique program will help current and former foster youths purchase newly renovated
                    low-income
                    houses at low or 0% interest rates.
                  </p>

                  <p class="paragraph paragraph--small paragraph__mb">
                    Hill also expanded TYIA's therapy services by developing the Psychiatric Rehabilitation Program
                    (PRP), which supports the psychotherapeutic aspect of an individual's mental health treatment by
                    addressing what happens internally, mentally, and emotionally. Overall, the services Hill has
                    created at TYIA help children and adults become as independent as possible in the living,
                    learning, working and social environments of their choice. Outside of his work with TYIA, Hill
                    is
                    a licensed realtor in Maryland, Pennsylvania and Washington D.C. He spends his free time with
                    his
                    family and enjoys traveling, fishing, cooking and watching sporting events.
                  </p>

                </div>

              </div>

            </div>

          </div>
    `
    );
  }
}

export default Modal;
