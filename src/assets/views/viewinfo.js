import { viewHome } from './viewhome.js'

export const viewInfo = () => {
	document.getElementById('root').innerHTML = `
		<h1>Hola soy el info</h1>
		<button id="btn-info-to-home">Ir a home</button>
	`
    document.getElementById('btn-info-to-home').addEventListener('click', () => {
        viewHome();
        window.location.hash = '#/home';
    })
}

