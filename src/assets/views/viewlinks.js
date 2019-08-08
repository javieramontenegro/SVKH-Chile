import { viewHome } from './viewhome.js';
import { viewSpecialists } from './viewspecialists.js';

export const viewLinks = () => {
  document.getElementById('root').innerHTML = `
    <div class="links-container container">
      <div class="row route-title">  
        <div class="col">
          <h6>
            <a href="#/especialistas" role="button" id="a-to-home">Home</a>
            /
            <span><a href="#/especialistas" role="button" id="a-to-specialists">Lista especialistas</a></span>
            /
            <span><a>Links de interés</a></span>
          </h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h1 class="${window.titles}">Página en construcción</h1>
        </div>
      </div>
    </div>
  `
  document.getElementById('a-to-home').addEventListener('click', () => {
    viewHome();
    window.location.hash = '#/home';
  });
  document.getElementById('a-to-specialists').addEventListener('click', () => {
    viewSpecialists();
    window.location.hash = '#/especialistas'
  });
}