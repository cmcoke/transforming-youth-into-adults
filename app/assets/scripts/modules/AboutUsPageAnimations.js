import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class AboutUsPageAnimations {
  constructor() {
    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#about-us-page-second-section',
        start: 'top center'
      }
    }));

    this.thirdSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#about-us-page-third-section',
        start: 'top center'
      }
    }));

    this.fourthSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#about-us-page-fourth-section',
        start: 'top center'
      }
    }));

    this.events();
  }

  events() {
    window.addEventListener('load', () => this.AboutUsPage());
  }


  AboutUsPage(){

    // hero section
    this.hero.from('#about-us-page-hero-title', {opacity: 0}, .5);

    // second section
    this.secondSection.from('#about-us-page-second-section-first-text-content', {opacity: 0, duration: 1});
    this.secondSection.from('#about-us-page-second-section-second-text-content', {opacity: 0, duration: 1}, '+=1.4');

    // third section
    this.thirdSection.from('#about-us-page-third-section', {opacity:0, duration: 1});
    this.thirdSection.from('#about-us-page-third-section-heading', {opacity:0}, '<1');
    this.thirdSection.from('#about-us-page-third-section-first-content', {opacity:0, duration: .5, xPercent: 200});
    this.thirdSection.from('#about-us-page-third-section-second-content', {opacity:0, duration: .5, xPercent: -200}, '+=1');
    this.thirdSection.from('#about-us-page-third-section-third-content', {opacity:0, duration: .5, xPercent: 200}, '+=1');

    // fourth section
    this.fourthSection.from('#about-us-page-fourth-section', {opacity: 0, duration: 1});
    // footer
    this.fourthSection.from('#about-us-page-footer', {opacity: 0}, '<1.5');

  }
  
}

export default AboutUsPageAnimations;
