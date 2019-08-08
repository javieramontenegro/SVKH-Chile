import { viewHome } from './viewhome.js'

export const viewContact = () => {
	document.getElementById('root').innerHTML = `
	<div class="contact-page-container container">
		<div class="row route-title">
			<div class="col">
				<h6>
					<a href="#/home" role="button" id="a-to-home">Home</a>
					/
					<span><a>Contacto</a></span>
				</h6>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h3 class="contact-title page-title">Contáctanos</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-8">
				<p class="page-p">Si quieres comunicarte con nosotros para tener mayor información de la agrupación, del Síndrome VKH o apoyarnos en nuestar diferentes actividades puedes comunicarte con nosotros al correo:</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<p class="contact-email">agrupacionsvkhchile@gmail.com</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-8">
				<p>También puedes seguirnos en todas nuestras redes:</p>
			</div>
		</div>
		<div class="row">
			<span class="icon-container"><a href="#" data-toggle="tooltip" data-placement="right" title="Facebook" role="button"><i class="fab fa-facebook-square rs-icon"></i></a></span>
			<span class="icon-container"><a href="#" data-toggle="tooltip" data-placement="right" title="Instagram" role="button"><i class="fab fa-instagram rs-icon"></i></a></span>
			<span class="icon-container"><a href="#" data-toggle="tooltip" data-placement="right" title="Twitter" role="button"><i class="fab fa-twitter rs-icon"></i></a></span>
		</div>
	</div>
	`
    document.getElementById('a-to-home').addEventListener('click', () => {
        viewHome();
        window.location.hash = '#/home';
    })
}

