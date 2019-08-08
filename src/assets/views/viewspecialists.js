import { viewHome } from './viewhome.js';
import { viewOftal } from './viewoftal.js';
import { viewReuma } from './viewreuma.js';

export const viewSpecialists = () => {
	document.getElementById('root').innerHTML = `
		<div class="specialists-container container">
			<div class="row route-title">
				<div class="col">
					<h6>
						<a href="" role="button" id="a-to-home">Home</a>
						/
						<span><a>Lista especialistas</a></span>
					</h6>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-6">
					<img src="https://i.ibb.co/QFJp4WN/Rectangle-2.png" alt="Imagen de oftalmólogo"></img>
					<h4 class="specialists-title">Oftalmólogos</h4>
					<p>Lista de oftalmólogos en Chile</p>
					<button id="btn-to-oftal" class="btn blue-btn">Ver más</button>
				</div>
				<div class="col-sm-12 col-md-6">
					<img src="https://i.ibb.co/Lh2zYY9/Rectangle-2-1.png" alt="Imagen de reumatólogo"></img>
					<h4 class="specialists-title">Reumatólogos</h4>
					<p>Lista de reumatólogos en Chile</p>
					<button id="btn-to-reuma" class="btn blue-btn">Ver más</button>
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

