import { initRouter } from "./routes.js";
import { changeContrast } from "./assets/logic/logiccontrast.js"
//import { biggerSize } from "./assets/logic/logicsize.js"

const init = () => {
    initRouter()
}

window.addEventListener('load', init)

let contrast = document.getElementById("contrast");
contrast.addEventListener('click', () => {
    changeContrast()
})

/* let size = document.getElementById("size");
size.addEventListener('click', () => {
    biggerSize();
}) */