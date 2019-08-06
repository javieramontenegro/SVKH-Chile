import { viewHome } from './viewhome.js';
import { viewSpecialists } from './viewspecialists.js';

export const viewReuma = () => {
	document.getElementById('root').innerHTML = `
		<div class="reuma-container container">
      <div class="row route-title">
        <div class="col">
          <h6>
            <a href="" role="button" id="a-to-home">Home</a>
            /
            <span><a>Especialistas</a></span>
            /
            <span><a href="" role="button" id="a-to-specialists">Lista especialistas</a></span>
            /
            <span><a>Reumatólogos</a></span>
          </h6>
        </div>
      </div>
    </div>
    `
	document.getElementById('a-to-home').addEventListener('click', () => {
    viewHome();
    window.location.hash = '#/home';
  })
  document.getElementById('a-to-specialists').addEventListener('click', () => {
    viewSpecialists();
    window.location.hash = '#/especialistas'
  })
}
