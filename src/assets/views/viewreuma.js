import { viewHome } from './viewhome.js';
import { viewSpecialists } from './viewspecialists.js';

export const viewReuma = () => {
	document.getElementById('root').innerHTML = `
		<div class="reuma-container container">
      <div class="row route-title">
        <div class="col">
          <h6 class="${window.titles}">
            <a href="#/home" role="button" id="a-to-home">Home</a>
            /
            <span><a>Especialistas</a></span>
            /
            <span><a href="#/especialistas" role="button" id="a-to-specialists">Lista médicos Chile</a></span>
            /
            <span><a>Reumatólogos</a></span>
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
          <h5 class="${window.titles}">Reumatólogos</h5>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table style="width:100%">
            <tr class="tr-specialists">
              <td>
                <p>Tomás Sepúlveda</p>
              </td>
              <td class="td-specialists">
                <p>- Ahumada 312 Of. 224 (Fonasa e Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Carolina Llanos</p>
              </td>
              <td class="td-specialists">
                <p>- UC San Jorge (Isapre).</p>
                <p>- UC San Joaquín (Fonasa e Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Francisca Saburgo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Clínico U. de Chile (Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Neva Cáceres</p>
              </td>
              <td class="td-specialists">
                <p>- Salvador 95 Of. 608 (Fonasa).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Jaime Ochoa</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital San José.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dra. Bezanilla</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico Vival fono 226305500.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Cristian Carpentier Giglio</p>
              </td>
              <td class="td-specialists">
                <p>- Atiende en Fundación Oftalmológica Los Andes.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dra. García</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital San Juan.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Pamela Díaz</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Católica, Campus San Joaquín, Red Salud Uc Fonasa e Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Mariola Cerda</p>
              </td>
              <td class="td-specialists">
                <p>- Redsalud Providencia, (Fonasa e Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Paola Burgos</p>
              </td>
              <td class="td-specialists">
                <p>- Red Salud UC (Fonasa e Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Paola Kusnir</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Santa María (Isapre y Particular).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Sergio Aguilera</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Indisa (Isapre y Particular).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Viviana Maluje Badiola</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Santa María (Fonasa e Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Sergio Jacobelli</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Sótero del Río.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Verónica Mezzano</p>
              </td>
              <td class="td-specialists">
                <p>- San Jorge y Marcoleta UC (Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Omar Valenzuela</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Alemana (particular).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dr. Gallo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital San Borja (Fonasa).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Marcela Cisternas</p>
              </td>
              <td class="td-specialists">
                <p>- Edificio Alcantara UC.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Francisco Radrigan</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Sótero del Río.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Paula Pozo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital san Borja.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Milena Mímica</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico UC San Joaquín (Fonasa).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Carlos Baumert</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico Dinamarca (Fonasa e Isapre).</p>
                <p>- Clínica Alemana (Particular).</p>
                <p>- Hospital Regional de Temuco (Fonasa, Auge).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Carmen María Pinochet</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital de Talca, Clínica de la U. Católica.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Vicente Gonzalez/p>
              </td>
              <td class="td-specialists">
                <p>- Obelisco 14, Antofagasta (Particular).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dr. Seguel</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Naval, Talcahuano.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dr. Grespo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital de Huasco de Vallenar (Fonasa y Otros).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Andrea Reyes</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Guillermo Grau Benavente, Concepción.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Sandra Pino Pinilla</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica U. De Concepción de San Pedro, Concepción.</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Gustavo Roll</p>
              </td>
              <td class="td-specialists">
                <p>- La Serena (Fonasa e Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Ulises Verdejo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Carlos Van Burén, Valparaíso (Fonasa e Isapre).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Elena Jarpa</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Naval (Isapre y Particular).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Christian Vergara</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Médico Clínico del Mar entre 12-13 Norte, Viña del Mar.</p>
                <p>- Hospital Van Burén, Viña del Mar</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Ricardo Jerez</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Gustavo Fricke, Viña del Mar.</p>
                <p>- Edificio Gala Arlegui, Viña del Mar.</p>
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
  })
  document.getElementById('a-to-specialists').addEventListener('click', () => {
    viewSpecialists();
    window.location.hash = '#/especialistas'
  })
  document.getElementById('btn-to-specialists').addEventListener('click', () => {
    viewSpecialists();
    window.location.hash = '#/especialistas'
  })
}
