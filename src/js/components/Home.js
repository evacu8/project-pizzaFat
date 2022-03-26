import { templates } from '../settings.js';

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

  }
}

export default Home;