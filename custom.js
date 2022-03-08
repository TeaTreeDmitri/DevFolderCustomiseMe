const basket = {
    ingredienta: "",
    ingredientb: "",
    shape: "",
    color: "",
    name: "",
    quantity: 4
};

let reviewLink = "";

// cedarwood, sandalwood, bergamot, orangeSweet, rosemary, cinnamon, ginger, lavender


// USER CLICKS INGREDIENT 1 or 2 ////////////////////////////////////////////////////////////////////

document.querySelector("#cedarwood").addEventListener("click", addCedarwoodToBasket);
document.querySelector("#sandalwood").addEventListener("click", addSandalwoodToBasket);
document.querySelector("#bergamot").addEventListener("click", addBergamotToBasket);
document.querySelector("#orangeSweet").addEventListener("click", addOrangeSweetToBasket);
document.querySelector("#rosemary").addEventListener("click", addRosemaryToBasket);
document.querySelector("#cinnamon").addEventListener("click", addCinnamonToBasket);
document.querySelector("#ginger").addEventListener("click", addGingerToBasket);
document.querySelector("#lavender").addEventListener("click", addLavenderToBasket);


function addCedarwoodToBasket() {
    document.querySelector(".customisegrid").classList.add("cedarwoodColor");
    
    if (document.querySelector("#iconChoiceOne") == false) {
        document.querySelector("#iconChoiceOne").src = "cedarwood.svg";
    } else {
        document.querySelector("#iconChoiceTwo").src = "cedarwood.svg";
    }
}

function addSansalwoodToBasket() {
    document.querySelector(".customisegrid").classList.add("sandalwoodColor");
    if (document.querySelector("#iconChoiceOne") == false) {
        document.querySelector("#iconChoiceOne").src = "sandalwood.svg";
    } else {
        document.querySelector("#iconChoiceTwo").src = "sandalwood.svg";
    }
}

function addBergamotToBasket() {
    document.querySelector(".customisegrid").classList.add("bergamotColor");
    if (document.querySelector("#iconChoiceOne") == false) {
        document.querySelector("#iconChoiceOne").src = "bergamot.svg";
    } else {
        document.querySelector("#iconChoiceTwo").src = "bergamot.svg";
    }
}

function addOrangeSweetToBasket() {
    document.querySelector(".customisegrid").classList.add("orangeSweetColor");
    if (document.querySelector("#iconChoiceOne") == false) {
        document.querySelector("#iconChoiceOne").src = "orangesweet.svg";
    } else {
        document.querySelector("#iconChoiceTwo").src = "orangesweet.svg";
    }
}

function addRosemaryToBasket() {
    document.querySelector(".customisegrid").classList.add("rosemaryColor");
    if (document.querySelector("#iconChoiceOne") == false) {
        document.querySelector("#iconChoiceOne").src = "rosemary.svg";
    } else {
        document.querySelector("#iconChoiceTwo").src = "rosemary.svg";
    }
}

function addCinnamonToBasket() {
    document.querySelector(".customisegrid").classList.add("cinnamonColor");
    if (document.querySelector("#iconChoiceOne") == false) {
        document.querySelector("#iconChoiceOne").src = "cinnamon.svg";
    } else {
        document.querySelector("#iconChoiceTwo").src = "cinnamon.svg";
    }
}

function addGingerToBasket() {
    document.querySelector(".customisegrid").classList.add("gingerColor");
    if (document.querySelector("#iconChoiceOne") == false) {
        document.querySelector("#iconChoiceOne").src = "ginger.svg";
    } else {
        document.querySelector("#iconChoiceTwo").src = "ginger.svg";
    }
}

function addLavenderToBasket() {
    document.querySelector(".customisegrid").classList.add("lavenderColor");
    if (document.querySelector("#iconChoiceOne") == false) {
        document.querySelector("#iconChoiceOne").src = "lavender.svg";
    } else {
        document.querySelector("#iconChoiceTwo").src = "lavender.svg";
    }
}

// USER CLICKS SHAPE ////////////////////////////////////////////////////////////////
// square, round, heart, 
// change defaultfile names to existing files.

document.querySelector("#heart").addEventListener("click", addHeartToBasket);
document.querySelector("#square").addEventListener("click", addSquareToBasket);
document.querySelector("#round").addEventListener("click", addRoundToBasket);

function addHeartToBasket() {
    document.querySelector(".customiseSoap").src = "heart.png";
    basket.shape = "heart";
}

function addSquareToBasket() {
    document.querySelector(".customiseSoap").src = "square.png";
    basket.shape = "square";
}

function addRoundToBasket() {
    document.querySelector(".customiseSoap").src = "round.png";
    basket.shape = "round"
}

// USER CLICKS COLOR /////////////////////////////////////////////////////////////////
//arcticWhite, black, candy pink, lightBlue, purple passion, orange, redIron, ultramarine, yellow

document.querySelector("#arcticWhite").addEventListener("click", addWhiteToBasket);
document.querySelector("#black").addEventListener("click", addBlackToBasket);
document.querySelector("#candyPink").addEventListener("click", addPinkToBasket);
document.querySelector("#lightBlue").addEventListener("click", addBlueToBasket);
document.querySelector("#purplePassion").addEventListener("click", addPurpleToBasket);
document.querySelector("#orange").addEventListener("click", addOrangeToBasket);
document.querySelector("#redIron").addEventListener("click", addRedToBasket);
document.querySelector("#ultramarine").addEventListener("click", addUltramarineToBasket);
document.querySelector("#yellow").addEventListener("click", addYellowToBasket);

function addWhitetoBasket () {
    basket.color = "white";
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

function addBlacktoBasket () {
    basket.color = "black";
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

function addPinktoBasket () {
    basket.color = "pink";
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

function addBluetoBasket () {
    basket.color = "blue";
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

function addPurpletoBasket () {
    basket.color = "purple"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

function addOrangetoBasket () {
    basket.color = "orange"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

function addRedtoBasket () {
    basket.color = "red"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

function addUltramarinetoBasket () {
    basket.color = "ultramarine"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

function addYellowtoBasket () {
    basket.color = "yellow"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
}

