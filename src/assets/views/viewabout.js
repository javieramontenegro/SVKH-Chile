import { viewHome } from './viewhome.js'

export const viewAbout = () => {
	
	document.getElementById('root').innerHTML = `
		<h1>Hola soy el about</h1>
		<button id="btn-about-to-home">Ir a home</button>
	`

	document.getElementById('btn-about-to-home').addEventListener('click', () => {
		viewHome();
		window.location.hash = '#/home';
	})
}