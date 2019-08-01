export const modifySize = () => {
  let fontSize = document.getElementById("body");
  if(fontSize.classList.contains("normal-size")){
    fontSize.classList.remove("normal-size");
    fontSize.classList.add("bigger-size");
  }
  else if(fontSize.classList.contains("bigger-size")){
    fontSize.classList.remove("bigger-size");
    fontSize.classList.add("biggest-size");
  }
}

export const backToNormal = () => {
  let fontSize = document.getElementById("body");
  if(fontSize.classList.contains("bigger-size")){
    fontSize.classList.remove("bigger-size");
    fontSize.classList.add("normal-size");
  }
  else if(fontSize.classList.contains("biggest-size")){
    fontSize.classList.remove("biggest-size");
    fontSize.classList.add("bigger-size");
  }
}