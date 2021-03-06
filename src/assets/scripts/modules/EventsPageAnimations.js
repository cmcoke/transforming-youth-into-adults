import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class EventsPageAnimations {
  constructor() {
    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline({
      scrollTrigger: {
        trigger: "#events-page-second-section",
        start: "top center"
      }
    });

    this.thirdSection = gsap.timeline({
      scrollTrigger: {
        trigger: "#events-page-third-section",
        start: "top center"
      }
    });

    this.events();
  }

  events() {
    window.addEventListener("load", () => this.EventsPage());
  }

  EventsPage() {
    // hero section
    this.hero.to("#events-page-hero-title", { opacity: 1 }, 0.5);

    // second section
    this.secondSection.to("#events-page-second-section", { opacity: 1, duration: 1 });

    // third section
    this.thirdSection.from("#events-page-third-section", { opacity: 0, duration: 1 });
    this.thirdSection.from("#events-page-cards", { opacity: 0, y: 30 }, 1);
    // footer section
    this.thirdSection.from("#events-page-footer", { opacity: 0 }, "<1.4");
  }
}

new EventsPageAnimations();
