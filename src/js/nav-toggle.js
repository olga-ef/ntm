const toggleBtn = document.querySelector('.header__nav-toggle');
const nav = document.querySelector('.header__nav');
const itemsDropdown = document.querySelectorAll('.main-nav__item.has-dropdown');

function toggleNav () {
	toggleBtn.classList.toggle('is-active');
	nav.classList.toggle('is-active');
}

function subnavToggle (e) {
	if (document.documentElement.clientWidth > 991 || e.target !== this.firstElementChild) return;

	e.preventDefault();
	if (this.classList.contains('is-active')) {
		this.classList.remove('is-active');
	} else {
		this.classList.add('is-active');
	}
}

export function addToggleNav () {
	toggleBtn.addEventListener('click', toggleNav);
	[].forEach.call(itemsDropdown, (item) => {
		item.addEventListener('click', subnavToggle);
	});
}

