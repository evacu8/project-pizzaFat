/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { select } from '../settings.js';

class Carousel {
  constructor(){
    const thisCarousel = this;

    thisCarousel.render();
    thisCarousel.initPlugin();
  }

  render(){

  }

  initPlugin(){

    const flkty = new Flickity( select.containerOf.carousel, {
      // options
      cellAlign: 'left',
      contain: true
    });

  }
}
export default Carousel;