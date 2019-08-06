import { viewContact } from "./viewcontact.js";
import { viewAbout } from "./viewabout.js";
import { viewSpecialists } from "./viewspecialists.js"
import { viewInfo } from "./viewinfo.js"
import { viewSymtoms } from "./viewsymtoms.js"

export const viewHome = () => {
	document.getElementById('root').innerHTML = `

    <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img src="./assets/img/home_1.png" class="home_1"alt="home_1" >
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <p class="txt-def">Somos Sindrome-Vogt-Koyanagi Harada Chile.
          Nuestra agrupación iniciada el 2017, busca hacer visible el sindrome en Chile y el mundo.
          Hoy estamos en proceso de convertirnos en fundación, para eso nocesitamos llegar a mas personas que nos reconozcan.
          <br>
          Conoce un poco mas de SVKH Chile. <p/>
          </div>
        </div>
      </div>
    </div>
  </div>
       
    
       
	`
    document.getElementById('btn-home-to-about').addEventListener('click', () => {
        viewAbout();
        window.location.hash = '#/nosotros';
    })
    document.getElementById('btn-home-to-info').addEventListener('click', () => {
        viewInfo();
        window.location.hash = '#/info';
    })
    document.getElementById('btn-home-to-specialists').addEventListener('click', () => {
        viewSpecialists();
        window.location.hash = '#/especialistas';
    })
    document.getElementById('btn-home-to-contact').addEventListener('click', () => {
        viewContact();
        window.location.hash = '#/contacto';
    })
    document.getElementById('btn-home-to-symtoms').addEventListener('click', () => {
        viewSymtoms();
        window.location.hash = '#/sintomas';
    })
}

