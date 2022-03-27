/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class Carousel {
  constructor(element){
    const thisCarousel = this;
    thisCarousel.element = element;

    thisCarousel.render(element);
    thisCarousel.initPlugin();
  }

  render(element){
    const thisCarousel = this;
  }

  initPlugin(){
    const thisCarousel = this;

    const options = {
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
      wrapAround: true,
      prevNextButtons: false,
    };

    const flkty = new Flickity( thisCarousel.element, options );

  }
}
export default Carousel;