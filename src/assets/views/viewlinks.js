import { viewHome } from './viewhome.js';

export const viewLinks = () => {
  document.getElementById('root').innerHTML = `
    <div class="links-container container">
      <div class="row route-title">  
        <div class="col">
          <h6 class="${window.titles}">
            <a href="#/especialistas" role="button" id="a-to-home" class="${window.anchors}">Home</a>
            /
            <span><a>Especialistas</a></span>
            /
            <span><a>Links de interés</a></span>
          </h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h3 class="${window.titles}">Links de interés</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>Acá puedes encontrar links de especialistas y sitios de interés:</p>
          <br>
          <ul>
            <li><a class="a-link ${window.anchors}" title="Alfredo Adan" href="https://www.alfredoadan.es/el-sindrome-de-vkh/">Dr. Alfredo Adan</a></li>
            <li><a class="a-link ${window.anchors}" title="Orpha" href="https://www.orpha.net/consor/cgi-bin/OC_Exp.php?Lng=GB&Expert=3437">Orpha</a></li>
            <li><a class="a-link ${window.anchors}" title="Fenpof Chile" href="https://www.facebook.com/FenpofChile/">Fenpof Chile</a></li>
            <li><a class="a-link ${window.anchors}" title="Coalivi" href="https://www.coalivi.cl/">Coalivi</a></li>
            <li><a class="a-link ${window.anchors}" title="Birdshot" href="https://birdshot.org.uk/">Birdshot Uveitis Society</a></li>
            <li><a class="a-link ${window.anchors}" title="Ley Ricarte Soto" href="https://www.minsal.cl/leyricarte/">Ley Ricarte Soto</a></li>
          </ul>

        </div>
      </div>
    </div>
  `
  document.getElementById('a-to-home').addEventListener('click', () => {
    viewHome();
    window.location.hash = '#/home';
  });
}