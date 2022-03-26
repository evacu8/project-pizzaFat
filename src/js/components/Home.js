import { select, templates } from '../settings.js';
import Carousel from './Carousel.js';

class Home{
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homePage();
    thisHome.dom = {};

    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    // console.log(thisHome.dom.wrapper);
    // console.log(thisHome.dom.wrapper.innerHTML);
  }

  initWidgets(){
    const thisHome = this;

    thisHome.dom.carouselWrapper = document.querySelector(select.containerOf.carousel);
    thisHome.carouselWidget = new Carousel(thisHome.dom.carouselWrapper);
  }
}

export default Home;