const urlParams = new URLSearchParams(window.location.search);
const ingredient1 = urlParams.get("ingredient1");
const ingredient2 = urlParams.get("ingredient2");
const shape = urlParams.get("shape");
const color = urlParams.get("color");

presentSoap();
colorBackground();

function presentSoap() {
    document.querySelector("#presentImg").src = `/productphoto/${shape}-${color}.png`;
}

function colorBackground() {
    document.querySelector("#bgColor").style.backgroundColor = color;
}


function getName() {
    const val = document.querySelector("#soapname").value;
    console.log(val);
    document.querySelector("#jeffWord").textContent = val.repeat(500);
  }


document.querySelector("#soapname").addEventListener("keypress", getName)



