import { viewHome } from './viewhome.js';
import { viewSpecialists } from './viewspecialists.js';

export const viewOftal = () => {
	document.getElementById('root').innerHTML = `
		<div class="oftal-container container">
      <div class="row route-title">
        <div class="col">
          <h6 class="${window.titles}">
            <a href="#/home" role="button" id="a-to-home">Home</a>
            /
            <span><a>Especialistas</a></span>
            /
            <span><a href="#/especialistas" role="button" id="a-to-specialists">Lista médicos Chile</a></span>
            /
            <span><a>Oftalmólogos</a></span>
          </h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h4 class="${window.titles}">Lista de especialistas tratantes en Chile.</h4>
        </div>
      </div>
      <div class="row specialists-title">
        <div class="col">
          <h5 class="${window.titles}">Oftalmólogos</h5>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table style="width:100%">
            <tr class="tr-specialists">
              <td>
                <p>Víctor Velásquez</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Salvador.</p>
                <p>- Consulta Particular, Padre Mariano 10 Of. 501.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Enzo Castiglione</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Clínico U. de Chile.</p>
                <p>- Clínica Oftalmológica 2020 (particular).</p>
                <p>- Clínica Oftalmológica Pasteur (Fonasa, Isapre).</p>
                <p>- Clínica Oftalmológica, Pedro de Valdivia.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Pablo Sabat</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica las Condes de Camino el Alba 9500 (particular, algunas Isapres).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Guillermo Merino</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Salvador.</p>
                <p>- Consulta particular Padre Mariano 10 Of. 501.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Luis Peña García</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico UC San Joaquín.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Cristian Carpentier Giglio</p>
              </td>
              <td class="td-specialists">
                <p>- Fundación Oftalmológica Los Andes.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Juan Verdaguer (hijo)</p>
              </td>
              <td class="td-specialists">
                <p>- Fundación oftalmológica Los Andes.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Juan Verdaguer (hijo)</p>
              </td>
              <td class="td-specialists">
                <p>- Fundación oftalmológica Los Andes.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Rolando Espinoza</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico UC.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Marco Soto</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital San Borja.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Pedro Gianello Garrido</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Oftalmológica 2020.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Rodrigo Álvarez Nazer</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Médico UC San Joaquín.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Sergio Galaz Díaz</p>
              </td>
              <td class="td-specialists">
                <p>- Pedro Lagos 1090 depto. 603-605, Iquique.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Gonzalo Duarte</p>
              </td>
              <td class="td-specialists">
                <p>- 4 norte 1330, Viña del Mar. Particular.</p>
                <p>- Clínica ISV. Av. Libertar 1348 Piso 6, Torre Marina Arauco. Viña del Mar.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Claudio Ramírez</p>
              </td>
              <td class="td-specialists">
                <p>- Antonio Varas 687 of. 304, Temuco (Fonasa e Isapres).</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row back-btn">
        <div class="col">
          <button id="btn-to-specialists" class="btn ${window.btns} float-right">Volver</button>
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
  document.getElementById('btn-to-specialists').addEventListener('click', () => {
    viewSpecialists();
    window.location.hash = '#/especialistas'
  });
}
