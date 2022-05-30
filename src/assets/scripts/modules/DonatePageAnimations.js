import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class DonatePageAnimations {
  constructor() {
    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline({
      scrollTrigger: {
        trigger: "#donate-page-second-section",
        start: "top center"
      }
    });

    this.footer = gsap.timeline({
      scrollTrigger: {
        trigger: "#donate-page-footer",
        start: "top 80%"
      }
    });

    this.events();
  }

  events() {
    window.addEventListener("load", () => this.DonatePage());
  }

  DonatePage() {
    // hero section
    this.hero.to("#donate-page-hero-title", { opacity: 1 }, 0.5);

    // second section
    this.secondSection.to("#donate-page-second-section", { opacity: 1, duration: 1 });

    // footer section
    this.footer.from("#donate-page-footer", { opacity: 0 });
  }
}

new DonatePageAnimations();
