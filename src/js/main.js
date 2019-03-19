import { addToggleNav } from './nav-toggle';
import Modal from './modal';

const callbackModal = document.querySelector('#callbackModal');
const callbackBtn = document.querySelector('#callbackBtn');

const myModal = new Modal(callbackModal, callbackBtn);
addToggleNav();

