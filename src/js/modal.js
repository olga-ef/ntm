import { isEscPress } from './util';

// const callbackModal = document.getElementById('callbackModal');
// const callBackBtn = document.getElementById('callbackBtn');


// function closeModal (e, modal) {
// 	modal.classList.removeClass('is-open');
// 	window.removeEventListener('kewdown', )
// }

// function onEscPress (e, modal) { 
// 	if (isEscPress(e)) {

// 	}

// }

// function openModal (e, modal) {
// 	e.preventDefault();
// 	modal.classLIst.add('is-open');
// 	window.addEventListener('kewdown', onEscPress);
// }

// callbackBtn.addEventListener('click', (e) => openModal(e, callbackModal));

class Modal {
	constructor(myModal, openBtn) {
		this.modal = myModal;
		console.log(this.modal)
		this.openBtn = openBtn;
		this.bind();
	}

	openModal(e) {
		const onEscPress = (e) => this.onEscPress(e);
		this.modal.classList.add('is-open');
	}

	closeModal(e) {
		this.modal.classList.remove('is-open');
	}

	onEscPress(e) {
		if (isEscPress(e)) {
			this.closeModal(e)
		}
	}

	bind() {
		const closeBtn = this.modal.querySelector('.modal__close');

		this.openBtn.addEventListener('click', (e) =>  {
			e.preventDefault();
			this.openModal(e);
		});
		closeBtn.addEventListener('click', (e) => {
			e.preventDefault();
			this.closeModal(e);
		});
	}
}

export default Modal;