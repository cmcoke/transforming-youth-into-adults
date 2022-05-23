import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class DonatePageAnimations {
  constructor() {
    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#donate-page-second-section',
        start: 'top center'
      }
    }));

    this.thirdSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#donate-page-third-section',
        start: 'top center',
      }
    }));

    this.footer = gsap.timeline(({
      scrollTrigger: {
        trigger: '#donate-page-footer',
        start: 'top 80%',
      }
    }));

    this.events();
  }

  events() {
    window.addEventListener('load', () => this.DonatePage());
  }


  DonatePage(){

    // hero section
    this.hero.from('#donate-page-hero-title', {opacity: 0}, .5);

    // second section
    this.secondSection.from('#donate-page-second-section', {opacity: 0, duration: 1});
    this.secondSection.from('#donate__form', {opacity: 0, y: 60}, '<.5');

    // third section
    this.thirdSection.from('#donate-page-third-section', {opacity: 0, duration: 1});
   
    // footer section
    this.footer.from('#donate-page-footer', {opacity: 0});

  }
  
}

export default DonatePageAnimations;
