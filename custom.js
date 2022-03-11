const basket = {
    ingredienta: "",
    ingredientb: "",
    shape: "",
    color: "",
    name: "",
    quantity: 4
};

const nothing = "";


const cedarwoodColour = "hsla(36, 28%, 44%, 0.5)";
const sandalwoodColour = "hsla(24, 76%, 24%, 0.5)";
const bergamotColour = "hsla(61, 69%, 80%, 0.5)";
const orangeColour = "hsla(23, 84%, 48%, 0.5)";
const rosemaryColour = "hsla(181, 52%, 27%, 0.5)";
const cinnamonColour = "hsla(26, 100%, 28%, 0.5)";
const gingerColour = "hsla(10, 85%, 21%, 0.5)";
const lavenderColour = "hsla(279, 37%, 62%, 0.5)";

let firstColour;



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
document.querySelector("#confirmingredients").addEventListener("click", confirmIngredient);
document.querySelector("#confirmingshape").addEventListener("click", confirmShape);


function confirmIngredient() {
    document.querySelector(".customiseingredientsgrid").style.display = "none";
    document.querySelector(".customiseshapegrid").style.display = "grid";
}

function confirmShape() {
    document.querySelector(".customiseshapegrid").style.display = "none";
    document.querySelector(".customisecolorsgrid").style.display = "grid";
}



function addCedarwoodToBasket() {
    if (document.querySelector("#iconDisplayOne").style.backgroundImage == false) {
        document.querySelector("#iconDisplayOne").style.backgroundImage = "url(../icons/cedarwood.svg)";
        document.querySelector(".confirmChoice").href += "ingredient1=cedarwood";
        document.querySelector("body").style.backgroundImage = `linear-gradient(to bottom right, ${cedarwoodColour} , white)`;
        firstColour = cedarwoodColour;
        basket.ingredienta = "cedarwood";
    } else {
        console.log("bim bam")
        document.querySelector("#iconDisplayTwo").style.backgroundImage = "url(../icons/cedarwood.svg)";
        document.querySelector(".confirmChoice").href += "ingredient2=cedarwood";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${cedarwoodColour})`;
        basket.ingredientb = "cedarwood";

    }
}

function addSandalwoodToBasket() {
    if (document.querySelector("#iconDisplayOne").style.backgroundImage == false) {
        document.querySelector("#iconDisplayOne").style.backgroundImage = "url(../icons/sandalwood.svg)";
        document.querySelector(".confirmChoice").href += "ingredient1=sandalwood";
        document.querySelector("body").style.backgroundImage = `linear-gradient(to bottom right, ${sandalwoodColour} , white)`;
        firstColour = sandalwoodColour;
        basket.ingredienta = "sandalwood";
    } else {
        document.querySelector("#iconDisplayTwo").style.backgroundImage = "url(../icons/sandalwood.svg)";
        document.querySelector(".confirmChoice").href += "&ingredient2=cedarwood";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${sandalwoodColour})`;
        basket.ingredientb = "sandalwood";
    }
}

function addBergamotToBasket() {
    if (document.querySelector("#iconDisplayOne").style.backgroundImage == false) {
        document.querySelector("#iconDisplayOne").style.backgroundImage = "url(../icons/bergamot.svg)";
        document.querySelector(".confirmChoice").href += "ingredient1=bergamot";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${bergamotColour}, white)`;
        firstColour = bergamotColour;
        basket.ingredienta = "bergamot";
    } else {
        document.querySelector("#iconDisplayTwo").style.backgroundImage = "url(../icons/bergamot.svg)";
        document.querySelector(".confirmChoice").href += "&ingredient2=bergamot";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${bergamotColour})`;
        basket.ingredientb = "bergamot";
    }
}

function addOrangeSweetToBasket() {
    if (document.querySelector("#iconDisplayOne").style.backgroundImage == false) {
        document.querySelector("#iconDisplayOne").style.backgroundImage = "url(../icons/orange.svg)";
        document.querySelector(".confirmChoice").href += "ingredient1=orange";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${orangeColour}, white)`;
        firstColour = orangeColour;
        basket.ingredienta = "orange";
    } else {
        document.querySelector("#iconDisplayTwo").style.backgroundImage = "url(../icons/orange.svg)";
        document.querySelector(".confirmChoice").href += "&ingredient2=orange";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${orangeColour})`;
        basket.ingredientb = "orangeS";
    }
}

function addRosemaryToBasket() {
    if (document.querySelector("#iconDisplayOne").style.backgroundImage == false) {
        document.querySelector("#iconDisplayOne").style.backgroundImage = "url(/icons/rosemary.svg)";
        document.querySelector(".confirmChoice").href += "ingredient1=rosemary";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${rosemaryColour}, white)`;
        firstColour = rosemaryColour;
        basket.ingredienta = "rosemary";
    } else {
        document.querySelector("#iconDisplayTwo").style.backgroundImage = "url(../icons/rosemary.svg)";
        document.querySelector(".confirmChoice").href += "&ingredient2=rosemary";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${rosemaryColour})`;
        basket.ingredientb = "rosemary";

    }
}

function addCinnamonToBasket() {
    document.querySelector(".customisegrid").classList.add("cinnamonColor");

    if (document.querySelector("#iconDisplayOne").style.backgroundImage == false) {
        document.querySelector("#iconDisplayOne").style.backgroundImage = "url(/icons/cinnamon.svg)";
        document.querySelector(".confirmChoice").href += "ingredient1=cinnamon";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${cinnamonColour}, white)`;
        firstColour = cinnamonColour;
        basket.ingredienta = "cinnamon";
    } else {
        document.querySelector("#iconDisplayTwo").style.backgroundImage = "url(/icons/cinnamon.svg)";
        document.querySelector(".confirmChoice").href += "&ingredient2=cinnamon";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${cinnamonColour})`;
        basket.ingredientb = "cinnamon";
    }
}

function addGingerToBasket() {
    document.querySelector(".customisegrid").classList.add("gingerColor");
    if (document.querySelector("#iconDisplayOne").style.backgroundImage == false) {
        document.querySelector("#iconDisplayOne").style.backgroundImage = "url(../icons/ginger.svg)";
        document.querySelector(".confirmChoice").href += "ingredient1=ginger";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${gingercolour}, white)`;
        firstColour = gingerColour;
        basket.ingredienta = "ginger";
    } else {
        document.querySelector("#iconDisplayTwo").style.backgroundImage = "url(../icons/ginger.svg)";
        document.querySelector(".confirmChoice").href += "&ingredient2=ginger";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${gingerColour})`;
        basket.ingredientb = "ginger";
    }
}

function addLavenderToBasket() {
    document.querySelector(".customisegrid").classList.add("lavenderColor");
    if (document.querySelector("#iconDisplayOne").style.backgroundImage == false) {
        document.querySelector("#iconDisplayOne").style.backgroundImage = "url(../icons/lavender.svg)";
        document.querySelector(".confirmChoice").href += "ingredient1=lavender";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${lavenderColour}, white)`;
        firstColour = lavenderColour;
        basket.ingredienta = "lavender";
    } else {
        document.querySelector("#iconDisplayTwo").style.backgroundImage = "url(../icons/lavender.svg)";
        document.querySelector(".confirmChoice").href += "&ingredient2=lavender";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${lavenderColour})`;
        basket.ingredientb = "lavender";
    }
}

// USER CLICKS SHAPE ////////////////////////////////////////////////////////////////
// square, round, heart, 
// change defaultfile names to existing files.

document.querySelector("#heart").addEventListener("click", addHeartToBasket);
document.querySelector("#square").addEventListener("click", addSquareToBasket);
document.querySelector("#round").addEventListener("click", addRoundToBasket);

function addHeartToBasket() {
    basket.shape = "heart";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-white.png`;
    document.querySelector(".confirmChoice").href += "&shape=heart";
}

function addSquareToBasket() {
    basket.shape = "square";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-white.png`;
    document.querySelector(".confirmChoice").href += "&shape=square";

}

function addRoundToBasket() {
    basket.shape = "round"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-white.png`;
    document.querySelector(".confirmChoice").href += "&shape=round";
}

// USER CLICKS COLOR /////////////////////////////////////////////////////////////////

document.querySelector("#arcticWhite").addEventListener("click", addWhiteToBasket);
document.querySelector("#black").addEventListener("click", addBlackToBasket);
document.querySelector("#candyPink").addEventListener("click", addPinkToBasket);
document.querySelector("#lightBlue").addEventListener("click", addBlueToBasket);
document.querySelector("#purplePassion").addEventListener("click", addPurpleToBasket);
document.querySelector("#orange").addEventListener("click", addOrangeToBasket);
document.querySelector("#redIron").addEventListener("click", addRedToBasket);
document.querySelector("#ultramarine").addEventListener("click", addUltramarineToBasket);
document.querySelector("#yellow").addEventListener("click", addYellowToBasket);


function addWhiteToBasket() {
    basket.color = "white";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=white";
}

function addBlackToBasket() {
    basket.color = "black";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=black";
}

function addPinkToBasket() {
    basket.color = "pink";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=pink";
}

function addBlueToBasket() {
    basket.color = "lightBlue";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=lightBlue";
}

function addPurpleToBasket() {
    basket.color = "purple"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=purple";
}

function addOrangeToBasket() {
    basket.color = "orange"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=orange";
}

function addRedToBasket() {
    basket.color = "red"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=red";
}

function addUltramarineToBasket() {
    basket.color = "blue"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=blue";
}

function addYellowToBasket() {
    basket.color = "yellow"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `../productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=yellow";
}