import { viewHome } from './viewhome.js';
import { viewSpecialists } from './viewspecialists.js';

export const viewOftal = () => {
	document.getElementById('root').innerHTML = `
		<div class="oftal-container container">
      <div class="row route-title">
        <div class="col">
          <h6>
            <a href="#/home" role="button" id="a-to-home">Home</a>
            /
            <span><a href="#/especialistas" role="button" id="a-to-specialists">Lista especialistas</a></span>
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
                <p>- Hospital Salvador.  <a href="https://goo.gl/maps/ia1vwvADPzEUGySW6" target ="_blank"> Ver Mapa.</a> </p>
                <p>- Consulta Particular, Padre Mariano 10 Of. 501. <a href="https://goo.gl/maps/3gyoDUDJCd9kScTP9" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Enzo Castiglione</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Clínico U. de Chile. <a href="https://goo.gl/maps/Bd5Ns65mXUD5VPNp8" target ="_blank"> Ver Mapa.</a></p>
                <p>- Clínica Oftalmológica 2020 (particular). <a href="https://goo.gl/maps/GMPTWm7mwEFZ3W7V9" target ="_blank"> Ver Mapa.</a></p>
                <p>- Clínica Oftalmológica Pasteur (Fonasa, Isapre). <a href="https://goo.gl/maps/UZzaztGkkvvuEHpm7" target ="_blank"> Ver Mapa.</a></p>
                <p>- Clínica Oftalmológica Pedro de Valdivia. <a href="https://goo.gl/maps/3TmL3K4XnCzBWjmw9" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Pablo Sabat</p>
              </td>
              <td class="td-specialists">
                <p>- Centro de la Visión - Clínica las Condes, Camino el Alba 9500 (particular, algunas Isapres). <a href="https://goo.gl/maps/CkZnFGJQtNi7vu2u6" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Guillermo Merino</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Salvador. <a href="https://goo.gl/maps/ia1vwvADPzEUGySW6" target ="_blank"> Ver Mapa.</a></p>
                <p>- Consulta particular Padre Mariano 10 Of. 501. <a href="https://goo.gl/maps/3gyoDUDJCd9kScTP9" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Luis Peña García</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico UC San Joaquín. <a href="https://goo.gl/maps/Cqu6UxA4fvX5ESAg8" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Cristian Carpentier Giglio</p>
              </td>
              <td class="td-specialists">
                <p>- Fundación Oftalmológica Los Andes. <a href="https://goo.gl/maps/9p5i2ZKPF4nAMry29" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Juan Verdaguer (hijo)</p>
              </td>
              <td class="td-specialists">
                <p>- Fundación oftalmológica Los Andes. <a href="https://goo.gl/maps/9p5i2ZKPF4nAMry29" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Rolando Espinoza</p>
              </td>
              <td class="td-specialists">
                <p>- Red de Salud UC CHRISTUS.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Marco Soto</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital San Borja. <a href="https://goo.gl/maps/RHbBUqWRUSWq2xc86" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Pedro Gianello Garrido</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Oftalmológica 2020. <a href="https://goo.gl/maps/GMPTWm7mwEFZ3W7V9" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Rodrigo Álvarez Nazer</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Médico UC San Joaquín. <a href="https://goo.gl/maps/Cqu6UxA4fvX5ESAg8" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Sergio Galaz Díaz</p>
              </td>
              <td class="td-specialists">
                <p>- Pedro Lagos 1090 depto. 603-605, Iquique. <a href="https://goo.gl/maps/DVedNdXVt3U5duta9" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Gonzalo Duarte</p>
              </td>
              <td class="td-specialists">
                <p>- 4 norte 1330, Viña del Mar. Particular. <a href="https://goo.gl/maps/r4VFbVvwwVQ9YdPS6" target ="_blank"> Ver Mapa.</a></p>
                <p>- Clínica ISV. Av. Libertar 1348 Piso 6, Torre Marina Arauco. Viña del Mar. <a href="https://goo.gl/maps/ciFCcF8MxeFzrG627" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Claudio Ramírez</p>
              </td>
              <td class="td-specialists">
                <p>- Antonio Varas 687 of. 304, Temuco (Fonasa e Isapres). <a href="https://goo.gl/maps/SsVkZy7SnocMcyuPA" target ="_blank"> Ver Mapa.</a></p>
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
