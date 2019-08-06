import { viewHome } from './viewhome.js'

export const viewAbout = () => {
	
	document.getElementById('root').innerHTML = `
	<div class="about-container container">
		<div class="row">
			<div class="col">
				<h6>
					<a href="" role="button" id="a-to-home">Home</a>
					/
					<span><a>Quiénes somos</a></span>
				</h6>
			</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>Foto</h1>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h3 class="about-title">Sobre nosotros</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-8">
					<p>Somos Síndrome-Vogt-Koyanagi Harada Chile. Nuestra agrupación iniciada el 2017, busca hacer visible el síndrome en Chile y el mundo. Llevamos 2 años conectándonos con personas que que tienen el síndrome y otros que quieren conocer más sobre esto. Hemos crecido mucho como agrupación gracias a todos sus miembros. La Agrupación comenzó por Cristian Quijada, padre de una paciente, quien al querer conocer más sobre este síndrome empezó a buscar redes para encontrar tramientos y especialistas. Comenzamos como agrupación en Facebook, una comunidad que hasta el día de hoy sigue activa. Ha sido un arduo camino para poder brindar apoyo a otras personas que también tienen el síndrome y dar apoyo y guía a las familias.</p>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h3 class="about-title">Nuestra misión</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-8">
					<p>Nuestro propósito es poder hacer más conocida este síndrome en Chile y poder entrar al AUGE Y GES para poder financiar el tratamiento, ya que al ser considerada una enfermedad “rara”, no tiene financiamiento.</p>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h3 class="about-title">Nuestros objetivos</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-8">
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