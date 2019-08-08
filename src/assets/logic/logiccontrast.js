export const changeContrast = () => {
  let body = document.getElementById("body");
  
	if(body.classList.contains("normal-content")) {
      let titles = document.querySelectorAll(".normal-color");
      let buttons = document.querySelectorAll(".blue-btn");
			body.classList.remove("normal-content");
      body.classList.add("high-contrast-content");
      titles.forEach(element => {
        element.classList.remove("normal-color");
        element.classList.add("high-contrast-color");
      })
      buttons.forEach(element => {
        element.classList.remove("blue-btn");
        element.classList.add("white-btn");
      })
		}
	else {
    let titles = document.querySelectorAll(".high-contrast-color");
    let buttons = document.querySelectorAll(".white-btn");
		body.classList.remove("high-contrast-content");
    body.classList.add("normal-content");
    titles.forEach(element => {
      element.classList.remove("high-contrast-color");
      element.classList.add("normal-color");
    })
    buttons.forEach(element => {
      element.classList.remove("white-btn");
      element.classList.add("blue-btn");
    })
	}
}