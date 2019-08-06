
export const viewTreatment = () => {
  document.getElementById('root').innerHTML = `

    <div class="row symptoms">
    
      <div class="col-md-6 ">
      
        <h1>Tratamiento</h1>
        <p>El mejor manejo de la enfermedad de Vogt-Koyanagi-Harada envuelve a varios especialistas,
        incluyendo los dermatólogos, oftalmólogos, y neurólogos.</p>
             
      </div> 
  
      <div class="col-md-6"></div>     

    </div>

    <div class="row symptoms">
    
      <div class="col-md-6">
        <h2>Corticoides Sistémicos</h2>
        <p>El tratamiento debe ser hecho con corticoides sistémicos en altas dosis, 
        durante por lo menos 6 meses, en cuanto se sepa el diagnóstico de la enfermedad. Sin embargo,
        las dosis altas de corticoides se asocian con efectos secundarios como: </p>
        <ul>
          <li> Hiperglucemia.</li>
          <li> Presión alta (hipertensión).</li>
          <li> Baja de las defensas del cuerpo a las infecciones (inmunodeficiencia). </li>
          <li> Glaucoma secundario. </li>
        </ul>
      </div>

      <div class="col-md-6">
        <img class="img-fluid" src="./assets/img/tratamiento.png" alt="mujer se toca la cabeza">
      </div>
        
   	</div>
  
    <div class="row symptoms">

      <div class="col-md-6">
        <h2>Inmunomodulador</h2>
        <p>La disminución de los corticoides se hace de forma gradual durante un período de por lo menos 6 meses,
        para evitar la recurrencia y las complicaciones.<br>
        La adición de los medicamentos inmunomoduladores (como metotrexato, azatioprina, ciclosporina A, micofenolato mofetilo y agentes alquilantes).<br>
        Resulta más efectivo y puede reducir el riesgo de que la retina sea afectada.</p>

      </div>
      
      <div class="col-md-6">
        <img class="img-fluid" src="./assets/img/tomamano.png" alt="personas tomadas de la mano">
      </div>

    </div>

    <div class="row symptoms">

      <div class="col-md-6">
        <img class="img-fluid" src="./assets/img/ojo.png" alt="pupila son svk en etapa crónica" border="0">
      </div>
    
      <div class="col-md-6">
        <h2>Etapa Crónica</h2>
        <p>Estos síntomas generalmente son seguidos en pocas semanas por:</p>
          <ul>
            <li> Cataratas.</li>
            <li> Glaucoma.</li>
            <li> Neovascularización coroidea.</li>
            <li> Fibrosis subretiniana en que hay formación de placas de fibrosis después de la inflamación del ojo. </li>
          </ul>

      </div>
        
    </div>
  `

}