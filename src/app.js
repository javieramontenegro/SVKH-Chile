import { initRouter } from "./routes.js";
import { changeContrast } from "./assets/logic/logiccontrast.js"
import { modifySize, backToNormal } from "./assets/logic/logicsize.js"

const init = () => {
    initRouter()
}

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