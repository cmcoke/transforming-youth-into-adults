import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class ServicesPageAnimations {
  constructor() {
    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-page-second-section",
        start: "top center"
      }
    });

    this.thirdSection = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-page-third-section",
        start: "top center"
      }
    });

    this.footer = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-page-footer",
        start: "bottom 30%"
      }
    });

    this.events();
  }

  events() {
    window.addEventListener("load", () => this.ServicesPage());
  }

  ServicesPage() {
    // hero section
    this.hero.to("#services-page-hero-title", { opacity: 1 }, 0.5);

    // second section
    this.secondSection.to("#services-page-second-section", { opacity: 1, duration: 1 });

    // third section
    this.thirdSection.from("#services-page-third-section", { opacity: 0, duration: 1 });
    this.thirdSection.from("#services-page-cards", { opacity: 0, y: 30 }, 1);

    // footer section
    this.footer.from("#services-page-footer", { opacity: 0 }, 1.2);
  }
}

new ServicesPageAnimations();
