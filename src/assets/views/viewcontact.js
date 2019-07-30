import { viewHome } from './viewhome.js'

export const viewContact = () => {
	document.getElementById('root').innerHTML = `
		<h1>Hola soy el contacto</h1>
		<button id="btn-contact-to-home">Ir a home</button>
	`
    document.getElementById('btn-contact-to-home').addEventListener('click', () => {
        viewHome();
        window.location.hash = '#/home';
    })
}

