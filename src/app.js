import { initRouter } from "./routes.js";
import { changeContrast } from "./assets/logic/logiccontrast.js"
import { modifySize, backToNormal } from "./assets/logic/logicsize.js"

const init = () => {
    initRouter()
    
}
// FUNCION PARA BOTONES ACCESSIBILITY
/* function myFunction() {
    if (window.matchMedia("(max-width: 320px)").matches) { // If media query matches
      document.getElementById("accessibility").style.left = "7rem";
     } 
     else if (window.matchMedia("(max-width: 375px)").matches) { // If media query matches
        document.getElementById("accessibility").style.left = "8rem";
       } 
     else if (window.matchMedia("(max-width: 425x)").matches) { // If media query matches
        document.getElementById("accessibility").style.left = "11rem";
       } 
     else if (window.matchMedia("(max-width: 770px)").matches) { // If media query matches
        document.getElementById("accessibility").style.left = "30rem";
       } 
       else if (window.matchMedia("(max-width: 1024px)").matches) { // If media query matches
        document.getElementById("accessibility").style.left = "40rem";
       } 
     
       else if (window.matchMedia("(max-width: 2000px)").matches) { // If media query matches
        document.getElementById("accessibility").style.left = "60rem";
       } 
  } */
 /*  function screenTablets(tablets) {
    if (tablets.matches) { // If media query matches
      document.getElementById("accessibility").style.left = "40rem";
     
     } else {
     document.getElementById("accessibility").style.left = "60rem";
    
   }
  } */
  
  
 // Call listener function at run time
 /*  screenTablets(tablets) */
 







window.addEventListener('load', init)
 
let contrast = document.getElementById("contrast");
contrast.addEventListener('click', () => {
    changeContrast()
})

let biggerSize = document.getElementById("bigger-size");
biggerSize.addEventListener('click', () => {
    modifySize();
});

let smallerSize = document.getElementById("smaller-size");
smallerSize.addEventListener('click', () => {
    backToNormal();
});

export function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }