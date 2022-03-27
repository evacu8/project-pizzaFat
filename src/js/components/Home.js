import { select, templates, classNames} from '../settings.js';
import utils from '../utils.js';
import Carousel from './Carousel.js';

class Home{
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
    thisHome.initActions();
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
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);
  }

  initWidgets(){
    const thisHome = this;

    thisHome.carouselWidget = new Carousel(thisHome.dom.carouselWrapper);
  }

  initActions(){
    const thisHome = this;

    const links = thisHome.element.querySelectorAll('a');

    for(let link of links){
      link.addEventListener('click', function(){
        const linkId = link.getAttribute('href').replace('#', '');
        thisHome.activatePage(linkId);
        window.location.hash = `#/${linkId}`;
      });
    }
  }

  activatePage(pageId){
    const thisHome = this;
    for(let page of thisHome.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for(let link of thisHome.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == `#${pageId}`);
    }
  }
}

export default Home;