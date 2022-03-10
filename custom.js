const basket = {
    ingredienta: "",
    ingredientb: "",
    shape: "",
    color: "",
    name: "",
    quantity: 4
};


const cedarwoodColour = "#8f7650";
const sandalwoodColour = "#6c340f";
const bergamotColour = "#eeefa8";
const orangeColour = "#e36414";
const rosemaryColour = "#216869";
const cinnamonColour = "#8f3e00";
const gingerColour = "#621708";
const lavenderColour = "#aa7bc3";

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



// // #grad {
//   background-image: linear-gradient(to bottom right, red, yellow);
// }

// // function colorBackground() {
//     document.querySelector("#bgColor").style.backgroundColor = color;
// }

// // function setGradient() {
//  body.style.background = 
//  "linear-gradient(to right, " 
//  + color1.value 
//  + ", " 
//  + color2.value 
//  + ")";
//  css.textContent = body.style.background + ";";
// // }

function addCedarwoodToBasket() {
    if (document.querySelector("#iconChoiceOne").getAttribute("src") == "/icons/off.png") {
        document.querySelector("#iconChoiceOne").src = "/icons/cedarwood.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=cedarwood";
        console.log(cedarwoodColour)
        document.querySelector("body").style.backgroundImage = `linear-gradient(to bottom right, ${cedarwoodColour} , white)`;
        firstColour = cedarwoodColour;
        basket.ingredienta = "cedarwood";
        console.log(basket.ingredienta)
    } else {
        document.querySelector("#iconChoiceTwo").src = "/icons/cedarwood.svg";
        document.querySelector(".confirmChoice").href += "ingredient2=cedarwood";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${cedarwoodColour})`;
        basket.ingredientb = "cedarwood";

    }
}

function addSandalwoodToBasket() {
    if (document.querySelector("#iconChoiceOne").getAttribute("src") == "/icons/off.png") {
        document.querySelector("#iconChoiceOne").src = "/icons/sandalwood.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=sandalwood";
        document.querySelector("body").style.backgroundImage = `linear-gradient(to bottom right, ${sandalwoodColour} , white)`;
        firstColour = sandalwoodColour;
        basket.ingredienta = "sandalwood";
    } else {
        document.querySelector("#iconChoiceTwo").src = "/icons/sandalwood.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=cedarwood";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${sandalwoodColour})`;
        basket.ingredientb = "sandalwood";
    }
}

function addBergamotToBasket() {
    if (document.querySelector("#iconChoiceOne").getAttribute("src") == "/icons/off.png") {
        document.querySelector("#iconChoiceOne").src = "/icons/bergamot.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=bergamot";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${bergamotColour}, white);`;
        firstColour = bergamotColour;
        basket.ingredienta = "bergamot";
    } else {
        document.querySelector("#iconChoiceTwo").src = "/icons/bergamot.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=bergamot";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${bergamotColour})`;
        basket.ingredientb = "bergamot";
    }
}

function addOrangeSweetToBasket() {
    if (document.querySelector("#iconChoiceOne").getAttribute("src") == "/icons/off.png") {
        document.querySelector("#iconChoiceOne").src = "/icons/orange.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=orangeSweet";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${orangeColour}, white);`;
        firstColour = orangeColour;
        basket.ingredienta = "orangeSweet";
    } else {
        document.querySelector("#iconChoiceTwo").src = "/icons/orange.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=orangeSweet";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${orangeColour})`;
        basket.ingredientb = "orangeSweet";
    }
}

function addRosemaryToBasket() {
    if (document.querySelector("#iconChoiceOne").getAttribute("src") == "/icons/off.png") {
        document.querySelector("#iconChoiceOne").src = "/icons/rosemary.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=rosemary";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${rosemaryColour}, white);`;
        firstColour = rosemaryColour;
        basket.ingredienta = "rosemary";
    } else {
        document.querySelector("#iconChoiceTwo").src = "/icons/rosemary.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=rosemary";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${rosemaryColour})`;
        basket.ingredientb = "rosemary";

    }
}

function addCinnamonToBasket() {
    document.querySelector(".customisegrid").classList.add("cinnamonColor");

    if (document.querySelector("#iconChoiceOne").getAttribute("src") == "/icons/off.png") {
        document.querySelector("#iconChoiceOne").src = "/icons/cinnamon.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=cinnamon";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${cinnamonColour}, white);`;
        firstColour = cinnamonColour;
        basket.ingredienta = "cinnamon";
    } else {
        document.querySelector("#iconChoiceTwo").src = "/icons/cinnamon.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=cinnamon";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${cinnamonColour})`;
        basket.ingredientb = "cinnamon";
    }
}

function addGingerToBasket() {
    document.querySelector(".customisegrid").classList.add("gingerColor");
    if (document.querySelector("#iconChoiceOne").getAttribute("src") == "/icons/off.png") {
        document.querySelector("#iconChoiceOne").src = "/icons/ginger.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=ginger";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${gingercolour}, white);`;
        firstColour = gingerColour;
        basket.ingredienta = "ginger";
    } else {
        document.querySelector("#iconChoiceTwo").src = "/icons/ginger.svg";
        document.querySelector(".confirmChoice").href += "&ingredient2=ginger";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${firstColour}, ${gingerColour})`;
        basket.ingredientb = "ginger";
    }
}

function addLavenderToBasket() {
    document.querySelector(".customisegrid").classList.add("lavenderColor");
    if (document.querySelector("#iconChoiceOne").getAttribute("src") == "/icons/off.png") {
        document.querySelector("#iconChoiceOne").src = "/icons/lavender.svg";
        document.querySelector(".confirmChoice").href += "ingredient1=lavender";
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${lavenderColour}, white);`;
        firstColour = lavenderColour;
        basket.ingredienta = "lavender";
    } else {
        document.querySelector("#iconChoiceTwo").src = "/icons/lavender.svg";
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
    document.querySelector(".confirmChoice").href += "&shape=heart";
}

function addSquareToBasket() {
    basket.shape = "square";
    document.querySelector(".confirmChoice").href += "&shape=square";

}

function addRoundToBasket() {
    basket.shape = "round"
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
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=white";
}

function addBlackToBasket() {
    basket.color = "black";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=black";
}

function addPinkToBasket() {
    basket.color = "pink";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=pink";
}

function addBlueToBasket() {
    basket.color = "lightBlue";
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=lightBlue";
}

function addPurpleToBasket() {
    basket.color = "purple"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=purple";
}

function addOrangeToBasket() {
    basket.color = "orange"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=orange";
}

function addRedToBasket() {
    basket.color = "red"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=red";
}

function addUltramarineToBasket() {
    basket.color = "blue"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=blue";
}

function addYellowToBasket() {
    basket.color = "yellow"
    document.querySelector("html").offsetHeight;
    document.querySelector(".customiseSoap").src = `/productphoto/${basket.shape}-${basket.color}.png`;
    document.querySelector(".confirmChoice").href += "&color=yellow";
}