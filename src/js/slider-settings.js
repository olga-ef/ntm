import $ from 'jquery';

// главный слайдер
const mainSliderSettings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	appendArrows: $('.main-screen__slider-arrows'),
	prevArrow: '<button class="arrow arrow--white"><svg class="arrow__icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
	nextArrow: '<button class="arrow arrow--white"><svg class="arrow__icon"><use xlink:href="img/sprite.svg#arow-right"></use></svg></button>',
  autoplay: true,
  autoplaySpeed: 5000, 
  dots: true,
  dotsClass: 'slider-dots main-screen__slider-dots',
  lazyLoad: true,
  responsive: [
  {
  	breakpoint: 992,
  	settings: {
  		dots: false
  	}
  }
  ]
};

// преимущества
const featuresSettings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	zIndex: 0,
	dots: true,
	dotsClass: 'slider-dots slider-dots--orange features__dots',
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 561,
		settings: 'unslick'
	}
	]
};

// клиенты
const clientsSliderSettings = {
	slidesToShow: 4,
	slidesToScroll: 4,
	infinite: true,
	arrows: true,
	prevArrow: '<button class="arrow arrow--dark arrow--left"><svg class="arrow__icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
	nextArrow: '<button class="arrow arrow--dark arrow--right"><svg class="arrow__icon"><use xlink:href="img/sprite.svg#arow-right"></use></svg></button>',
	zIndex: 0,
	dots: true,
	dotsClass: 'client__slider-dots slider-dots slider-dots--orange',
	responsive: [
		{
			breakpoint: 1360,
			settings: {
				arrows: false
			}
		},	
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		},
	]
};

// сертификаты 
const recomendSliderSettings = {
	slidesToShow: 6,
	slidesToScroll: 6,
	infinite: true,
	arrows: true,
	prevArrow: '<button class="arrow arrow--dark arrow--left"><svg class="arrow__icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
	nextArrow: '<button class="arrow arrow--dark arrow--right"><svg class="arrow__icon"><use xlink:href="img/sprite.svg#arow-right"></use></svg></button>',
	zIndex: 0,
	dots: true,
	dotsClass: 'recomend__slider-dots slider-dots slider-dots--orange',
	responsive: [
	{
		breakpoint: 1360,
		settings: {
			arrows: false
		}
	},
	{
		breakpoint: 1100,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: false
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false
		}
	},
	{
		breakpoint: 560,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}
	}
	]
};

// новости
const newsSliderSettings = {
	slidesToShow: 3,
	slidesToScroll: 3,
	infinite: true,
	arrows: true,
	prevArrow: '<button class="arrow arrow--dark arrow--left"><svg class="arrow__icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
	nextArrow: '<button class="arrow arrow--dark arrow--right"><svg class="arrow__icon"><use xlink:href="img/sprite.svg#arow-right"></use></svg></button>',
	zIndex: 0,
	dots: true,
	dotsClass: 'news__slider-dots slider-dots slider-dots--orange',
	responsive: [
	{
		breakpoint: 1360,
		settings: {
			arrows: false
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}
	},
	{
		breakpoint: 560,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}
	}
	]
};

export {
	mainSliderSettings,
	featuresSettings,
	clientsSliderSettings,
	recomendSliderSettings,
	newsSliderSettings
}