export const viewTestimonial = () => {
  document.getElementById('root').innerHTML = `

    <div class="row">
 
      <div class="col-md-12">
        <h1 class="${window.titles}">Testimonios</h1>
      </div>
        
    </div>
    <br>

    <div class="row">
      
      <div class="col-md-4">
        <img class="img-fluid" src="./assets/img/fabiola.png" alt="mujer que da su testimonio">
      </div>
        
      <div class="col-md-8 ">

      <blockquote class="body">
        <p class="mb-1"> <br>"Cuando descubrí que tenía la enfermedad VKH, de esto ya hace 2 años, el doctor que me atendió
        estuvo más de una hora conmigo explicándome el tratamiento a seguir. Me señaló que tendría efectos secundarios
        importantes, dada la cantidad de medicamentos que debía comenzar a tomar. <br><br>
        
        También me dijo que tomara citas con distintos profesionales, tal como Reumatólogo, Dermatólogo, Psicólogo. Este último
        era esencial, pues llegaría un momento en que iba a querer desertar de todo y todos. <br><br>

        Si bien, hoy en día, he logrado mantener estable mi vista gracias a los medicamentos, todos los días recuerdo las
        palabras del doctor y su frase: “vas a querer desertar de todo y todos, pues es una enfermedad difícil
        de llevar", pero con el apoyo de mi familia hemos logrado salir adelante y digo hemos porque ellos han
        formado parte de este proceso, me han apoyado y levantado las veces que he querido desertar."</p>
        <footer>-Fabiola, <cite title="Source Title">Contadora</cite></footer>
      </blockquote>

      
             
      </div>
      </div>
   

    </div>

    
    
  `

}