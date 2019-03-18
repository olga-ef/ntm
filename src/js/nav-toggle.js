const BREAKPOINT = 991;
const toggleBtn = document.querySelector('.header__nav-toggle');
const nav = document.querySelector('.header__nav');
const itemsDropdown = document.querySelectorAll('.main-nav__item.has-dropdown');

function toggleNav () {
	toggleBtn.classList.toggle('is-active');
	nav.classList.toggle('is-active');
}

function subnavToggle (e) {
	if (document.documentElement.clientWidth > BREAKPOINT) return;

	e.preventDefault();
	if (this.classList.contains('is-active')) {
		this.classList.remove('is-active');
	} else {
		this.classList.add('is-active');
	}
	console.log(this)
}

export function addToggleNav () {
	toggleBtn.addEventListener('click', toggleNav);
	[...itemsDropdown].forEach((item) => {
		item.addEventListener('click', subnavToggle);
	});
}

