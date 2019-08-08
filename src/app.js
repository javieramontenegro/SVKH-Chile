import { initRouter } from "./routes.js";
import { changeContrast } from "./assets/logic/logiccontrast.js"
import { modifySize, backToNormal } from "./assets/logic/logicsize.js"

const init = () => {
    normalTitle();
    normalBtn();
    initRouter();
}

normalTitle();
normalBtn();

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

export function normalTitle () {
    console.log("holaaaa")
    window.titles = "normal-color";
}
export function normalBtn () {
    window.btns = "blue-btn";
}

export function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }