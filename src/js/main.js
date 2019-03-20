import { addToggleNav } from './nav-toggle';
import Modal from './modal';
import $ from 'jquery';
import slick from './slick/slick.min.js';

const callbackModal = document.querySelector('#callbackModal');
const callbackBtn = document.querySelector('#callbackBtn');



// главнй слайдер
const mainSlider = $('#mainSlider');
const mainSliderSettings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	appendArrows: $('.main-screen__slider-arrows'),
	prevArrow: '<button class="arrow arrow--left">вперед</button>',
	nextArrow: '<button class="arrow arrow--right">назад</button>',
  // autoplay: true,
  autoplaySpeed: 5000, //change speed 1s = 1000ms
  zIndex: 0,
  dots: true,
  dotsClass: 'slider-dots main-screen__slider-dots',
  lazyLoad: true
}

// преимущества
const featuresSlider = $('.features__list');
const featuresSettings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	zIndex: 0,
	dots: true,
	dotsClass: 'slider-dots features__dots',
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 561,
		settings: 'unslick'
	}
	]
}

// клиенты
const clientsSlider = $('#clientsSlider');
const clientsSliderSettings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	zIndex: 0,
	dots: true,
	dotsClass: 'client__slider-dots slider-dots slider-dots--orange',
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 992,
		settings: 'unslick'
	}
	]
}

// Сертификаты
const recomendSlider = $('#recomendSlider');
const recomendSliderSettings = {
	slidesToShow: 6,
	slidesToScroll: 6,
	infinite: true,
	arrows: false,
	zIndex: 0,
	dots: true,
	dotsClass: 'recomend__slider-dots slider-dots slider-dots--orange',
	responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}

	]
}

// новости
const newsSlider = $('#newsSlider');
const newsSliderSettings = {
	slidesToShow: 3,
	slidesToScroll: 3,
	infinite: true,
	arrows: false,
	zIndex: 0,
	dots: true,
	dotsClass: 'news__slider-dots slider-dots slider-dots--orange',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}

	]
}

function startSlider(slider, settings, callback) {
	if(!slider) return;
	$(slider).slick(settings);

	if (callback) {
		callback();
	} 
}

const myModal = new Modal(callbackModal, callbackBtn);
addToggleNav();
startSlider(mainSlider, mainSliderSettings);
startSlider(featuresSlider, featuresSettings);
startSlider(clientsSlider, clientsSliderSettings);
startSlider(recomendSlider, recomendSliderSettings);
startSlider(newsSlider, newsSliderSettings);