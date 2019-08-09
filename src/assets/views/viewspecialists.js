import { viewHome } from './viewhome.js';
import { viewOftal } from './viewoftal.js';
import { viewReuma } from './viewreuma.js';

export const viewSpecialists = () => {
	document.getElementById('root').innerHTML = `
		<div class="specialists-container container">
			<div class="row route-title">
				<div class="col">
					<h6 class="${window.titles}">
						<a href="#/home" role="button" id="a-to-home">Home</a>
						/
						<span><a>Especialistas</a></span>
						/
						<span><a>Lista médicos Chile</a></span>
					</h6>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-6">
					<img class="specialists-img" src="./assets/img/oftal.png" alt="Imagen de oftalmólogo"></img>
					<h4 class="specialists-title ${window.titles}">Oftalmólogos</h4>
					<p>Lista de oftalmólogos en Chile</p>
					<button id="btn-to-oftal" class="btn ${window.btns}">Ver más</button>
				</div>
				<div class="col-sm-12 col-md-6">
					<img class="specialists-img" src="./assets/img/reuma.png" alt="Imagen de reumatólogo"></img>
					<h4 class="specialists-title ${window.titles}">Reumatólogos</h4>
					<p>Lista de reumatólogos en Chile</p>
					<button id="btn-to-reuma" class="btn ${window.btns}">Ver más</button>
				</div>
			</div>
		</div>
    `
	document.getElementById('a-to-home').addEventListener('click', () => {
			viewHome();
			window.location.hash = '#/home';
	})
	document.getElementById('btn-to-oftal').addEventListener('click', () => {
		viewOftal();
		window.location.hash = '#/oftalmologos'
	})
	document.getElementById('btn-to-reuma').addEventListener('click', () => {
		viewReuma();
		window.location.hash = '#/reumatologos'
	})
}

