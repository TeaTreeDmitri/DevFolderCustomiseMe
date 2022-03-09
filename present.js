const urlParams = new URLSearchParams(window.location.search);

const ingredienta = urlParams.get("ingredienta")
const ingredientb= urlParams.get("ingredientb")
const color = urlParams.get("color");
const shape = urlParams.get("shape");

function getReview() {
    document.querySelector("#presentIMG").src = color;
    document.querySelector("#presentIMG").src += shape;
    document.querySelector("#ingredientDisplayItemA").src = ingredienta;
    document.querySelector("#ingredientDisplayItemB").src = ingredientb;
}

