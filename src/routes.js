//import todas las vistas

import { viewAbout } from './assets/views/viewabout.js';
import { viewContact } from './assets/views/viewcontact.js';
import { viewHome } from './assets/views/viewhome.js';
import { viewInfo } from './assets/views/viewinfo.js';
import { viewSpecialists } from './assets/views/viewspecialists.js';
import { viewSymtoms } from './assets/views/viewsymtoms.js';
import { viewTreatment } from './assets/views/viewtreatment.js'
import { viewOftal } from './assets/views/viewoftal.js'
import { viewReuma } from './assets/views/viewreuma.js';




const changeRoute = (hash) => {
  if (hash === '#/nosotros' || hash === '#/contacto' || hash === '#/home' || hash === '#/info' || hash === '#/especialistas' || hash === '#/oftalmologos' || hash === '#/reumatologos' || hash === '#/sintomas' || hash === '#/tratamiento' || hash === '' || hash === '#/' || hash === '/#') {
    return showView(hash);
  }
  return showView(hash);
}

const showView = (hash) => {
  const router = hash.substring(2); 
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (router === ''){
    viewHome();
  }
  else if ( router === 'home') {
      viewHome()
  }
  else if (router === 'nosotros'){
    viewAbout();
  }
  else if (router === 'contacto'){
    viewContact();
  }
  else if (router === 'info'){
    viewInfo();
  }
  else if (router === 'especialistas'){
    viewSpecialists();
  }
  else if (router === 'oftalmologos'){
    viewOftal();
  }
  else if (router === 'reumatologos'){
    viewReuma();
  }
  else if (router === 'sintomas'){
    viewSymtoms();
  }
  else if (router === 'tratamiento'){
    viewTreatment();
  }

  else {
    root.innerHTML = `<h1>Error 404</h1>`
  }
}

export const initRouter = () => {
  console.log("hola1?")
  window.addEventListener('load', changeRoute(window.location.hash));
  if ('onhashchange' in window) {
    console.log("hola?2")
    window.onhashchange = () => {
      console.log("hola?3")
      changeRoute(window.location.hash);
    }
  }
}