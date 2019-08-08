import { viewHome } from './viewhome.js'

export const viewAbout = () => {
	
	document.getElementById('root').innerHTML = `
	<div class="about-container container">
		<div class="row route-title">
			<div class="col">
				<h6>
					<a href="#/home" role="button" id="a-to-home">Home</a>
					/
					<span><a>Quiénes somos</a></span>
				</h6>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h3 class="about-title page-title">Sobre nosotros</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-8">
				<p>Somos Síndrome-Vogt-Koyanagi Harada Chile. Nuestra agrupación iniciada el 2017, busca hacer visible el síndrome en Chile y el mundo.</p> 
				<p>Llevamos 2 años conectándonos con personas que que tienen el síndrome y otros que quieren conocer más sobre esto. Hemos crecido mucho como agrupación gracias a todos sus miembros.</p>
				<p>Ha sido un arduo camino para poder brindar apoyo a otras personas que también tienen el síndrome, dar apoyo y guiar a las familias.</p>
			</div>
			<div class="col-sm-12 col-md-4">
				<img class="img-fluid" src="./assets/img/about.png" alt="Fotografía grupal de miembros de la organización">
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<h3 class="about-title page-title">Nuestra misión</h3>
				<p>Nuestro propósito es poder hacer más conocido este síndrome en Chile y poder entrar al AUGE Y GES para poder financiar el tratamiento, ya que al ser considerada una enfermedad “rara”, no tiene financiamiento.</p>
				</div>
			<div class="col-sm-12 col-md-6">
				<h3 class="about-title page-title">Nuestros objetivos</h3>
				<p>Hoy estamos en proceso de convertirnos en fundación, para eso necesitamos llegar a que más personas nos reconozcan.</p>
			</div>
		</div>
	</div>
	`

	document.getElementById('a-to-home').addEventListener('click', () => {
		viewHome();
		window.location.hash = '#/home';
	})
}