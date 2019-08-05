import { viewContact } from "./viewcontact.js";
import { viewAbout } from "./viewabout.js";
import { viewSpecialists } from "./viewspecialists.js"
import { viewInfo } from "./viewinfo.js"
import { viewSintoms } from "./viewsintoms.js"

export const viewHome = () => {
	document.getElementById('root').innerHTML = `
		<h1>Hola soy el home</h1>
        <button id="btn-home-to-about">Ir a about</button>
        <button id="btn-home-to-info">Ir a info</button>
        <button id="btn-home-to-specialists">Ir a specialists</button>
        <button id="btn-home-to-contact">Ir a contact</button>
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
    document.getElementById('btn-home-to-sintoms').addEventListener('click', () => {
        viewSintoms();
        window.location.hash = '#/sintomas';
    })
}

