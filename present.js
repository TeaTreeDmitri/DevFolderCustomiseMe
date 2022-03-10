const urlParams = new URLSearchParams(window.location.search);
const ingredient1 = urlParams.get("ingredient1");
const ingredient2 = urlParams.get("ingredient2");
const shape = urlParams.get("shape");
const color = urlParams.get("color");

presentSoap();
colorBackground();

function presentSoap() {
    document.querySelector("#presentImg").src = `/productphoto/${shape}-${color}.png`;
    document.querySelector("#ingredientDisplayItemA").style.backgroundImage = `url(/icons/${ingredient1}.svg)`;
    document.querySelector("#ingredientDisplayItemB").style.backgroundImage = `url(/icons/${ingredient2}.svg)`;
}

function colorBackground() {
    document.querySelector("#bgColor").style.background = `linear-gradient(to top left, ${color}, white)`;
    document.querySelector("h6").style.color = color;
}


function getName() {
    const name = document.querySelector("#soapName").value;
    document.querySelector("#jeffWord").textContent = name.repeat(500);
  }


document.querySelector("#soapName").addEventListener("keypress", getName)



