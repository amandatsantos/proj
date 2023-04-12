const form = document.querySelector('form');
const input = document.querySelector('#name');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = input.value;
	alert(`Nome capturado!! Seja bem vind, ${name}!`);
});