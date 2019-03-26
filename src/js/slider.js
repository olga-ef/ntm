import $ from 'jquery';
import './slick/slick.min.js';

const activateSlider = (slider, settings) => {
  $(slider).slick(settings);
  slider.isSlider = !slider.isSlider;
};

const deactivateSlider = (slider, settings) => {
  $(slider).slick('unslick');
  slider.isSlider= !slider.isSlider;
};


export const startSlider = (slider, settings, breakpoint) => {
  if (slider) {
    slider.isSlider = false;
    if (breakpoint) {
      window.addEventListener('resize', () => {
        if (window.innerWidth <= breakpoint && !slider.isSlider) {
          activateSlider(slider, settings);  
        }
        if (window.innerWidth > breakpoint && slider.isSlider) {
          deactivateSlider(slider, settings);
        } 
      });
      return
    }
    activateSlider(slider, settings);
  }
};

