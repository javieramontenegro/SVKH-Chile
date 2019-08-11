import { viewHome } from './viewhome.js';
import { viewSpecialists } from './viewspecialists.js';

export const viewReuma = () => {
	document.getElementById('root').innerHTML = `
		<div class="reuma-container container">
      <div class="row route-title">
        <div class="col">
          <h6 class="${window.titles}">
            <a href="#/home" role="button" id="a-to-home" class="${window.anchors}">Home</a>
            /
            <span><a>Especialistas</a></span>
            /
            <span><a href="#/especialistas" role="button" id="a-to-specialists" class="${window.anchors}">Lista médicos Chile</a></span>
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
                <p>- Ahumada 312 Of. 224 (Fonasa e Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/zzYqFbsD1myH9wxM6" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Carolina Llanos</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico UC, San Jorge (Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/Cqu6UxA4fvX5ESAg8" target ="_blank"> Ver Mapa.</a></p>
                <p>- Centro Medico UC, San Joaquín (fonasa e isapre). <a class="${window.anchors}" href="https://goo.gl/maps/Cqu6UxA4fvX5ESAg8" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Francisca Saburgo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Clínico U. de Chile (Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/Bd5Ns65mXUD5VPNp8" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Neva Cáceres</p>
              </td>
              <td class="td-specialists">
                <p>- Salvador 95 Of. 608 (Fonasa). <a class="${window.anchors}" href="https://goo.gl/maps/rnK7BT2eopmFgUPn7" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Jaime Ochoa</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital San José. <a class="${window.anchors}" href="https://goo.gl/maps/qaPombuwbhZTEbFZ9" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dra. Bezanilla</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico Vival fono 226305500. <a class="${window.anchors}" href="https://goo.gl/maps/GKueM5vFEaUZhiRz9" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Cristian Carpentier Giglio</p>
              </td>
              <td class="td-specialists">
                <p>- Atiende en Fundación Oftalmológica Los Andes. <a class="${window.anchors}" href="https://goo.gl/maps/9p5i2ZKPF4nAMry29" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dra. García</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital San Juan. <a class="${window.anchors}" href="https://goo.gl/maps/NpP5K7MS97e27n369" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Pamela Díaz</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico UC San Joaquín. (Fonasa e isarpe) <a class="${window.anchors}" href="https://goo.gl/maps/Cqu6UxA4fvX5ESAg8" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Mariola Cerda</p>
              </td>
              <td class="td-specialists">
                <p>- Redsalud Providencia, (Fonasa e Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/CSLTdyMiFHiUXaFa6" target ="_blank"> Ver Mapa.</a></p>
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
                <p>- Clínica Santa María (Isapre y Particular). <a class="${window.anchors}" href="https://goo.gl/maps/f6qHHMumH7UWeaNN6" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Sergio Aguilera</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Indisa (Isapre y Particular). <a class="${window.anchors}" href="https://goo.gl/maps/XssXqm4ZGKREUhi68" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Viviana Maluje Badiola</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Santa María (Fonasa e Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/f6qHHMumH7UWeaNN6" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Sergio Jacobelli</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Sótero del Río. <a class="${window.anchors}" href="https://goo.gl/maps/CNgprUpsdiaCjTZR6" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Verónica Mezzano</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico San Jorge (Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/6u9cQ8RiAEUuMTzy5" target ="_blank"> Ver Mapa.</a></p>
                <p>- Centro Medico UC Marcoleta (Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/YCisJHce5p97Ny2a6" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Omar Valenzuela</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica Alemana (particular). <a class="${window.anchors}" href="https://goo.gl/maps/D95128MeyaCEk3EV8" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dr. Gallo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital San Borja (Fonasa). <a class="${window.anchors}" href="https://goo.gl/maps/RHbBUqWRUSWq2xc86" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Marcela Cisternas</p>
              </td>
              <td class="td-specialists">
                <p>- Edificio Alcantara UC. <a class="${window.anchors}" href="https://goo.gl/maps/RtAYU9tLhDifQQLAA" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Francisco Radrigan</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Sótero del Río. <a class="${window.anchors}" href="https://goo.gl/maps/CNgprUpsdiaCjTZR6" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Paula Pozo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital san Borja. <a class="${window.anchors}" href="https://goo.gl/maps/RHbBUqWRUSWq2xc86" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Milena Mímica</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico UC San Joaquín (Fonasa). <a class="${window.anchors}" href="https://goo.gl/maps/Cqu6UxA4fvX5ESAg8" target ="_blank"> Ver Mapa.</a></p></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Carlos Baumert</p>
              </td>
              <td class="td-specialists">
                <p>- Centro Medico Dinamarca (Fonasa e Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/RqkZ2a3PiUtxAQqZ8" target ="_blank"> Ver Mapa.</a></p>
                <p>- Clínica Alemana (Particular). <a class="${window.anchors}" href="https://goo.gl/maps/ovLgtkckBFMQtsy27" target ="_blank"> Ver Mapa.</a></p>
                <p>- Hospital Regional de Temuco (Fonasa, Auge). <a class="${window.anchors}" href="https://goo.gl/maps/1ZtY1LTQbkpxc4Ef7" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Carmen María Pinochet</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital de Talca. <a class="${window.anchors}" href="https://goo.gl/maps/G46zwvEJRvdw1bN68" target ="_blank"> Ver Mapa.</a></p>
                <p>- Clínica de la U. Católica. <a class="${window.anchors}" href="https://goo.gl/maps/NvJKQa24kkT23Vvt7" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Vicente Gonzalez/p>
              </td>
              <td class="td-specialists">
                <p>- Obelisco 14, Antofagasta *(Particular).</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dr. Seguel</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Naval, Talcahuano. <a class="${window.anchors}" href="https://goo.gl/maps/7P9xEmM7jodkPGDCA" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Dr. Grespo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital de Huasco de Vallenar (Fonasa y Otros). <a class="${window.anchors}" href="https://goo.gl/maps/wQMtrXNZ3GU2pmGu5" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Andrea Reyes</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Guillermo Grand Benavente, Concepción. <a class="${window.anchors}" href="https://goo.gl/maps/umuzM892tQefoDZc8" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Sandra Pino Pinilla</p>
              </td>
              <td class="td-specialists">
                <p>- Clínica U. De Concepción de San Pedro, Concepción. *</p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Gustavo Roll</p>
              </td>
              <td class="td-specialists">
                <p>- Huanhuali 330, La Serena (Fonasa e Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/ajqof83VkQRaJEHg8" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Ulises Verdejo</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Van Buren, Valparaíso (Fonasa e Isapre). <a class="${window.anchors}" href="https://goo.gl/maps/6C5SkhyTFfiRp6ZKA" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Elena Jarpa</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Naval (Isapre y Particular). <a class="${window.anchors}" href="https://goo.gl/maps/Bww9i68j8rFDSQGk7" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr class="tr-specialists">
              <td>
                <p>Christian Vergara</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Van Buren, Valparaíso <a class="${window.anchors}" href="https://goo.gl/maps/6C5SkhyTFfiRp6ZKA" target ="_blank"> Ver Mapa.</a></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Ricardo Jerez</p>
              </td>
              <td class="td-specialists">
                <p>- Hospital Gustavo Fricke, Viña del Mar. <a class="${window.anchors}" href="https://goo.gl/maps/jgL1gTqAsZ3L1UHd8" target ="_blank"> Ver Mapa.</a></p>
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
