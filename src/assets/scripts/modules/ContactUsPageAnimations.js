import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class ContactUsPageAnimations {
  constructor() {
    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact-us-page-second-section",
        start: "top center"
      }
    });

    this.events();
  }

  events() {
    window.addEventListener("load", () => this.ContactUsPage());
  }

  ContactUsPage() {
    // hero section
    this.hero.to("#contact-us-page-hero-title", { opacity: 1 }, 0.5);

    // second section
    this.secondSection.to("#contact-us-page-second-section", { opacity: 1, duration: 1 });

    // footer section
    this.secondSection.from("#contact-us-page-footer", { opacity: 0 }, "<1.2");
  }
}

new ContactUsPageAnimations();
