export const changeContrast = () => {
	let normalContrast = document.getElementById("body");
	if(normalContrast.getAttribute("class") === "normal-content") {
			normalContrast.classList.remove("normal-content");
			normalContrast.classList.add("high-contrast-content");
	}
	else {
		normalContrast.classList.remove("high-contrast-content");
		normalContrast.classList.add("normal-content");
	}
}