import { viewHome } from './viewhome.js';
import { viewSpecialists } from './viewspecialists.js';

export const viewOftal = () => {
	document.getElementById('root').innerHTML = `
		<div class="oftal-container container">
      <div class="row route-title">
        <div class="col">
          <h6>
            <a href="#/especialistas" role="button" id="a-to-home">Home</a>
            /
            <span><a href="#/especialistas" role="button" id="a-to-specialists">Lista especialistas</a></span>
            /
            <span><a>Oftalmólogos</a></span>
          </h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table style="width:100%">
            <tr>
              <td>
                <p>Víctor Velásquez</p>
              </td>
              <td>
                <p>- Hospital Salvador</p>
                <p>- Consulta Particular, Padre Mariano 10 Of. 501</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Enzo Castiglione</p>
              </td>
              <td>
                <p>- Hospital Clínico U. de Chile</p>
                <p>- Clínica Oftalmológica 2020 (particular)</p>
                <p>- Clínica Oftalmológica Pasteur (Fonasa, Isapre)</p>
                <p>- Clínica Oftalmológica, Pedro de Valdivia.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Pablo Sabat</p>
              </td>
              <td>
                <p>- Clínica las Condes de Camino el Alba 9500 (particular, algunas Isapres).</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Guillermo Merino</p>
              </td>
              <td>
                <p>- Hospital Salvador</p>
                <p>- Consulta particular Padre Mariano 10 Of. 501.</p>
              </td>
            </tr>
          </table>
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
