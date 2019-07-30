import { viewHome } from './viewhome.js'

export const viewSpecialists = () => {
	document.getElementById('root').innerHTML = `
		<h1>Hola soy el nosotros</h1>
		<button id="btn-specialist-to-home">Ir a home</button>
    `
    document.getElementById('btn-specialist-to-home').addEventListener('click', () => {
        viewHome();
        window.location.hash = '#/home';
    })
}

