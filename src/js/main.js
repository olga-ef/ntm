import { addToggleNav } from './nav-toggle';
import Modal from './modal';
import $ from 'jquery';
import './lightbox/lightbox.js';
import {
	mainSliderSettings,
	featuresSettings,
	clientsSliderSettings,
	recomendSliderSettings,
	newsSliderSettings
} from './slider-settings';
import { startSlider } from './slider'; 

const callbackModal = document.querySelector('#callbackModal');
const callbackBtn = document.querySelector('#callbackBtn');
const mainSlider = document.querySelector('#mainSlider');
const featuresSlider = document.querySelector('.features__list');
const clientsSlider = document.querySelector('#clientsSlider');
const recomendSlider = document.querySelector('#recomendSlider');
const newsSlider = document.querySelector('#newsSlider');

function init(){ 
  // Создание карты.
  const map = document.getElementById('map');
  if (!map) return;  
  var myMap = new ymaps.Map('map', {
    center: [55.768512, 37.498591],
    zoom: 16
  });

 	var myPlacemark = new ymaps.Placemark([55.768512, 37.498591], {}, {
	  iconLayout: 'default#image',
    iconImageHref: 'img/placeholder.png',
    iconImageSize: [50, 68],
    iconImageOffset: [-25, -68]
	});

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom'); 
}

addToggleNav();
startSlider(mainSlider, mainSliderSettings);

$(document).ready(() => {
	const myModal = new Modal(callbackModal, callbackBtn);
	startSlider(featuresSlider, featuresSettings, 561);
	startSlider(clientsSlider, clientsSliderSettings);
	startSlider(recomendSlider, recomendSliderSettings);
	startSlider(newsSlider, newsSliderSettings);
	ymaps.ready(init);
});


const orderBtn = document.querySelector('#orderBtn');
const orderForm = document.querySelector('#orderModal');


if (orderForm && orderBtn) {
	const orderModal = new Modal(orderForm, orderBtn);
}
