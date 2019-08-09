import { viewHome } from './viewhome.js';

export const viewSymtoms = () => {
  document.getElementById('root').innerHTML = `
  <div class="row route-title">
    <div class="col">
      <h6 class="${window.titles}">
        <a href="#/home" role="button" id="a-to-home">Home</a>
        /
        <span><a>¿Qué es el SVKH?</a></span>
        /
        <span><a>Síntomas</a></span>
      </h6>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h2 class="${window.titles} page-title">Primeros Síntomas</h2>
    </div>
  </div>
  <div class="row symptoms">
    <div class="col-md-6 ">
      <p>La fase inicial o prodrómica tiene síntomas similares a la gripe que pueden incluir:</p>
      <ul>
        <li> Dolor de cabeza </li>
        <li> Fiebre baja </li>
        <li> Mareos </li>
        <li> Meningismo </li>
        <li> Náuseas y vómitos </li>
        <li> Pérdida de la audición y trastornos relacionados con el oído interno, disacusia y tinnitus) y vertigo.</p> </li>
      </ul>
    </div> 
    <div class="col-md-6">
      <img class="img-fluid" src="./assets/img/ninahoja.png" alt="niña tapando un hojo con una hoja">
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h2 class="${window.titles} page-title">Fase Uveitica</h2>
    </div>
  </div>
  <div class="row symptoms">
    <div class="col-md-6">
      <img class="img-fluid" src="./assets/img/mujercabeza.png" alt="mujer se toca la cabeza">
    </div>
    <div class="col-md-6">
      <p>Estos síntomas generalmente son seguidos en pocas semanas por:</p>
      <ul>
        <li> La inflamación de varias partes del ojo (panuveítis) que puede ocurrir
        en ambos ojos al mismo tiempo o alternados.</li>
        <li> Pérdida repentina de visión en uno o ambos ojos.</li>
        <li> Hinchazón e irritación de los ojos. </li>
        <li> Ver puntos oscuros y flotantes (flotadores) debido a desprendimientos de la retina. </li>
      </ul>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h2 class="${window.titles} page-title">Fase Convaleciente</h2>
    </div>
  </div>
  <div class="row symptoms">
    <div class="col-md-6">
      <p>Esta etapa se caracteriza por:</p>
      <ul>
        <li> Coroides, pérdida de color en la capa del ojo. </li>
        <li> Pequeños nódulos amarillos en partes de la retina. </li>
        <li> Vitiligo, cambios en la coloración de la piel, y mechones blancos en el cabello. </li>
        <li> Poliosis pelos blancos en las cejas o pestañas </li>
      </ul>     
      <p> Generalmente se observan tres meses después de que aparecen los primeros síntomas y en muchos casos son permanentes. </p>
    </div>
    <div class="col-md-6">
      <img class="img-fluid" src="./assets/img/tomamano.png" alt="personas tomadas de la mano">
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h2 class="${window.titles} page-title">Etapa Crónica</h2>
    </div>
  </div>
  <div class="row symptoms">
    <div class="col-md-6">
      <img class="img-fluid" src="./assets/img/ojo.png" alt="pupila son svk en etapa crónica" border="0">
    </div>
    <div class="col-md-6">
      <p>Estos síntomas generalmente son seguidos en pocas semanas por:</p>
      <ul>
        <li> Cataratas.</li>
        <li> Glaucoma.</li>
        <li> Neovascularización coroidea.</li>
        <li> Fibrosis subretiniana en que hay formación de placas de fibrosis después de la inflamación del ojo. </li>
      </ul>
    </div>
  </div>
  `
  document.getElementById('a-to-home').addEventListener('click', () => {
    viewHome();
    window.location.hash = '#/home';
  });
}