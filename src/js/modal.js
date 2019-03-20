import { isEscPress } from './util';

class Modal {
	constructor(myModal, openBtn) {
		this.modal = myModal;
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