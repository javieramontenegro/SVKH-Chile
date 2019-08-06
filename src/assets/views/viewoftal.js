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
          <tbody>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
            <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
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
