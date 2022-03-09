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
// Double check if truthy/falsey values work with == iunstead of if(#iconChoiceOne) for true, or if(!#iconChoiceOne)////////////////////////////////////////

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
    if (document.querySelector("#iconChoiceOne") == true) {
        document.querySelector("#iconChoiceOne").src = "cedarwood.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=cedarwood";
    } else {
        document.querySelector("#iconChoiceTwo").src = "cedarwood.svg";

    }
}

function addSansalwoodToBasket() {
    document.querySelector(".customisegrid").classList.add("sandalwoodColor");
    if (document.querySelector("#iconChoiceOne") == true) {
        document.querySelector("#iconChoiceOne").src = "sandalwood.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=sandalwood";

    } else {
        document.querySelector("#iconChoiceTwo").src = "sandalwood.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=sandalwood";

    }
}

function addBergamotToBasket() {
    document.querySelector(".customisegrid").classList.add("bergamotColor");
    document.querySelector(".confirmChoice").href += "bergamot";

    if (document.querySelector("#iconChoiceOne") == true) {
        document.querySelector("#iconChoiceOne").src = "bergamot.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=bergamot";

    } else {
        document.querySelector("#iconChoiceTwo").src = "bergamot.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=bergamot";

    }
}

function addOrangeSweetToBasket() {
    document.querySelector(".customisegrid").classList.add("orangeSweetColor");
    document.querySelector(".confirmChoice").href += "orangeSweet";

    if (document.querySelector("#iconChoiceOne") == true) {
        document.querySelector("#iconChoiceOne").src = "orangesweet.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=orangesweet";

    } else {
        document.querySelector("#iconChoiceTwo").src = "orangesweet.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=orangesweet";

    }
}

function addRosemaryToBasket() {
    document.querySelector(".customisegrid").classList.add("rosemaryColor");
    document.querySelector(".confirmChoice").href += "rosemary";

    if (document.querySelector("#iconChoiceOne") == true) {
        document.querySelector("#iconChoiceOne").src = "rosemary.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=rosemary";

    } else {
        document.querySelector("#iconChoiceTwo").src = "rosemary.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=rosemary";

    }
}

function addCinnamonToBasket() {
    document.querySelector(".customisegrid").classList.add("cinnamonColor");
    document.querySelector(".confirmChoice").href += "cinnamon";

    if (document.querySelector("#iconChoiceOne") == true) {
        document.querySelector("#iconChoiceOne").src = "cinnamon.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=cinnamon";

    } else {
        document.querySelector("#iconChoiceTwo").src = "cinnamon.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=cinnamon";

    }
}

function addGingerToBasket() {
    document.querySelector(".customisegrid").classList.add("gingerColor");
    document.querySelector(".confirmChoice").href += "ginger";

    if (document.querySelector("#iconChoiceOne") == true) {
        document.querySelector("#iconChoiceOne").src = "ginger.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=ginger";

    } else {
        document.querySelector("#iconChoiceTwo").src = "ginger.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=ginger";
    }
}

function addLavenderToBasket() {
    document.querySelector(".customisegrid").classList.add("lavenderColor");
    document.querySelector(".confirmChoice").href += "lavender";

    if (document.querySelector("#iconChoiceOne") == true) {
        document.querySelector("#iconChoiceOne").src = "lavender.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=lavender";
    } else {
        document.querySelector("#iconChoiceTwo").src = "lavender.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=lavender";
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
    document.querySelector(".confirmChoice").href += "&shape=heart";
    basket.shape = "heart";
}

function addSquareToBasket() {
    document.querySelector(".customiseSoap").src = "square.png";
    document.querySelector(".confirmChoice").href += "&shape=square";

    basket.shape = "square";
}

function addRoundToBasket() {
    document.querySelector(".customiseSoap").src = "round.png";
    document.querySelector(".confirmChoice").href += "&shape=round";

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

function addWhitetoBasket() {
    basket.color = "white";
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=white";
}

function addBlacktoBasket() {
    basket.color = "black";
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=black";
}

function addPinktoBasket() {
    basket.color = "pink";
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=pink";
}

function addBluetoBasket() {
    basket.color = "blue";
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=blue";
}

function addPurpletoBasket() {
    basket.color = "purple"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=purple";
}

function addOrangetoBasket() {
    basket.color = "orange"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=orange";
}

function addRedtoBasket() {
    basket.color = "red"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=red";
}

function addUltramarinetoBasket() {
    basket.color = "ultramarine"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=ultramarine";
}

function addYellowtoBasket() {
    basket.color = "yellow"
    document.querySelector(".customiseSoap").src = `${basket.shape} + ${basket.color} + .png`;
    document.querySelector(".confirmChoice").href += "&color=yellow";
}