import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class ServicesPageAnimations {
  constructor() {
    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#services-page-second-section',
        start: 'top center'
      }
    }));

    this.thirdSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#services-page-third-section',
        start: 'top center',
      }
    }));

    this.footer = gsap.timeline(({
      scrollTrigger: {
        trigger: '#footer',
        start: "bottom 30%",
      }
    }));

    this.events();
  }

  events() {
    window.addEventListener('load', () => this.ServicesPage());
  }


  ServicesPage(){

    // hero section
    this.hero.from('#services-page-hero-title', {opacity: 0}, .5);

    // second section
    this.secondSection.from('.paragraph--large', {opacity: 0, duration: 1});

    // third section
    this.thirdSection.from('#services-page-third-section', {opacity: 0, duration: 1});
    this.thirdSection.from('#services-page-cards', {opacity: 0, y: 60}, 1);

    // footer section
    this.footer.from('#footer', {opacity: 0});
   
  }
  
}

export default ServicesPageAnimations;
