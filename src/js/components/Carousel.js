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

    console.log(thisCarousel.element);
  }

  initPlugin(){
    const thisCarousel = this;

    const options = {
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
      wrapAround: true,
    };

    const flkty = new Flickity( thisCarousel.element, options );

  }
}
export default Carousel;