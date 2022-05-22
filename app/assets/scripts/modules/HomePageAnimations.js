import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class HomePageAnimations {
  constructor() {

    this.hero = gsap.timeline();

    this.secondSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#homepage-second-section',
        start: 'top center'
      }
    }));


    this.thirdSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#homepage-third-section',
        start: 'top center'
      }
    }));

    this.fourthSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#homepage-fourth-section',
        start: 'top center'
      }
    }));

    this.fifthSection = gsap.timeline(({
      scrollTrigger: {
        trigger: '#homepage-fifth-section',
        start: 'top center'
      }
    }));

    this.events();
  }

  events() {
    window.addEventListener('load', () => this.homePage());
  }


  homePage(){

    // hero section
    this.hero.from('#homepage-hero-small-title', {opacity: 0, duration: 2});
    this.hero.from('#homepage-hero-large-title', {y: 90, opacity: 0}, '<1');
    this.hero.from('#homepage-hero-description', {opacity: 0});
    this.hero.from('#homepage-hero-button', {opacity: 0});

    // second section
    this.secondSection.from('#homepage-second-section-first-text-content', {opacity: 0, duration: 1});
    this.secondSection.from('#homepage-second-section-second-text-content', {opacity: 0, duration: 1}, '+=1');

    // third section
    this.thirdSection.from('#homepage-third-section', {xPercent: -100});
    this.thirdSection.from('#homepage-third-section-image', {y: 60, opacity: 0});
    this.thirdSection.from('#homepage-third-section-house-icon', {opacity: 0});
    this.thirdSection.from('#homepage-third-section-text-content', {opacity: 0});

    // fourth section
    this.fourthSection.from('#homepage-fourth-section-heart-icon', {opacity:0});
    this.fourthSection.from('#homepage-fourth-section-text-content', {opacity:0});
    this.fourthSection.from('#homepage-fourth-section-image', {y: 60, opacity: 0});

    // fifth section
    this.fifthSection.from('#homepage-fifth-section', {xPercent: -100});
    this.fifthSection.from('#homepage-fifth-section-image',{y: 60, opacity: 0});
    this.fifthSection.from('#homepage-fifth-section-book-icon',{opacity: 0});
    this.fifthSection.from('#homepage-fifth-section-text-content',{opacity: 0});
    // footer
    this.fifthSection.from('#footer', {opacity:0}, '<1.5')

  }
  
}

export default HomePageAnimations;
