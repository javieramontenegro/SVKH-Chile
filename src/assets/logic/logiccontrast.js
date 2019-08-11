export const changeContrast = () => {
  let body = document.getElementById("body");
  
	if(body.classList.contains("normal-content")) {
      let titlesh = document.querySelectorAll(".normal-color");
      let buttons = document.querySelectorAll(".blue-btn");
      let anchors = document.querySelectorAll(".normal-a");
      window.titles = "high-contrast-color";
      window.btns = "white-btn";
      window.anchors = "high-contrast-a";
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
      anchors.forEach(element => {
        element.classList.remove("normal-a");
        element.classList.add("high-contrast-a")
      })
		}
	else {
    let titlesh = document.querySelectorAll(".high-contrast-color");
    let buttons = document.querySelectorAll(".white-btn");
    let anchors = document.querySelectorAll(".high-contrast-a");
		body.classList.remove("high-contrast-content");
    body.classList.add("normal-content");
    window.titles = "normal-color";
    window.btns = "blue-btn";
    window.anchors = "normal-a";
    titlesh.forEach(element => {
      element.classList.remove("high-contrast-color");
      element.classList.add("normal-color");
    })
    buttons.forEach(element => {
      element.classList.remove("white-btn");
      element.classList.add("blue-btn");
    })
    anchors.forEach(element => {
      element.classList.remove("high-contrast-a");
      element.classList.add("normal-a")
    })
	}
}