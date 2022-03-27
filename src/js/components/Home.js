import { select, templates} from '../settings.js';
import utils from '../utils.js';
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
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    const homeContainer = document.querySelector(select.containerOf.home);
    homeContainer.appendChild(thisHome.element);

    thisHome.dom = {};

    thisHome.dom.wrapper = element;
    thisHome.dom.carouselWrapper = document.querySelector(select.containerOf.carousel);

  }

  initWidgets(){
    const thisHome = this;

    thisHome.carouselWidget = new Carousel(thisHome.dom.carouselWrapper);
  }
}

export default Home;