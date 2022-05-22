import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class JoinUsPageAnimations {
  constructor() {
    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#join-us-page-second-section',
        start: 'top center'
      }
    }));

    this.thirdSectionHeding = gsap.timeline(({
      scrollTrigger: {
        trigger: '#join-us-page-third-section-heading',
        start: 'top center'
      }
    }));

    this.thirdSectionProfile = gsap.timeline(({
      scrollTrigger: {
        trigger: '#join-us-page-third-section-profile',
        start: 'top center'
      }
    }));


    this.events();
  }

  events() {
    window.addEventListener('load', () => this.JoinUsPage());
  }


  JoinUsPage(){

    // hero section
    this.hero.from('#join-us-page-hero-title', {opacity: 0}, .5);

    // second section
    this.secondSection.from('#join-us-page-second-section', {opacity: 0, duration: 1});

    // third section heading
    this.thirdSectionHeding.from('#join-us-page-third-section-heading', {opacity: 0, duration: 1});

    // third section profile
    this.thirdSectionProfile.from('#join-us-page-third-section-profile', {opacity: 0, duration: 1});
    // footer
    this.thirdSectionProfile.from('#footer', {opacity: 0}, '<1');
   
  }
  
}

export default JoinUsPageAnimations;