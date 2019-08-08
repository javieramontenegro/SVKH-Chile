export const changeContrast = () => {
  let body = document.getElementById("body");
  
	if(body.classList.contains("normal-content")) {
      let titlesh = document.querySelectorAll(".normal-color");
      let buttons = document.querySelectorAll(".blue-btn");
      window.titles = "high-contrast-color";
      window.btns = "white-btn"
			body.classList.remove("normal-content");
      body.classList.add("high-contrast-content");
      titlesh.forEach(element => {
        element.classList.remove("normal-color");
        element.classList.add("high-contrast-color");
      })
      buttons.forEach(element => {
        element.classList.remove("blue-btn");
        element.classList.add("white-btn");
      })
		}
	else {
    let titlesh = document.querySelectorAll(".high-contrast-color");
    let buttons = document.querySelectorAll(".white-btn");
		body.classList.remove("high-contrast-content");
    body.classList.add("normal-content");
    window.titles = "normal-color";
    window.btns = "blue-btn";
    titlesh.forEach(element => {
      element.classList.remove("high-contrast-color");
      element.classList.add("normal-color");
    })
    buttons.forEach(element => {
      element.classList.remove("white-btn");
      element.classList.add("blue-btn");
    })
	}
}