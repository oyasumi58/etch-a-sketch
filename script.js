console.log("test");
//grid making
let body = document.querySelector("body");
let divM = document.querySelector("#containerM");
//console.log(divM);
//middivs
let pixLength = 20;
let midDiv;

for (i=0; i<pixLength; i++) {
    midDiv = document.createElement("div")
    midDiv.classList = "midDiv";
    divM.appendChild(midDiv);
}



let midDivList = document.getElementsByClassName('midDiv');
//console.log(midDivList);
let midDivArray = Array.from(midDivList);
//console.log(midDivArray);
let smallDiv;
function passer() {
    midDivList = document.getElementsByClassName('midDiv');
    midDivArray = Array.from(midDivList);
    for (i=0;i<pixLength;i++) {
        let element = midDivArray[i];
        //console.log(midDivArray[i]);
        smallDiv = document.createElement("div");
        smallDiv.classList = "smallDiv"
        // smallDiv.id = `D-${j},`;
        // smallDiv.id += `F-${i}`;
        //console.log(j);
        //console.log(smallDiv);
        element.appendChild(smallDiv);
        console.log("passes lol");
    }
}

for (j=0; j<midDivArray.length; j++) {
    passer();
}

let smallDivs = document.querySelectorAll(".smallDiv");

//console.log(smallDivs);

//hover effect
function addHover(element) {
    hovElement = element
    //console.log(`${hovElement}is hover`);
    hovElement.classList.add("hover");
}

function rmHover(element) {
    hovElement = element
    //console.log(`${hovElement}is not hover`);
    hovElement.classList.remove("hover");
}

function addListener() {
    smallDivs = document.querySelectorAll(".smallDiv");
    smallDivsArray = Array.from(smallDivs);
    for (i=0;i<smallDivsArray.length;i++) {
        let element = smallDivsArray[i];
        //console.log(element);
        element.addEventListener("mouseenter",() => addHover(element));
        //element.addEventListener("mouseleave",() => rmHover(element));
    }
   
}

let smallDivsArray = Array.from(smallDivs);
//console.log(smallDivsArray);
addListener();


//button

function getPrompt() {
    let message = prompt("Number of squares per side? \nMax size 100 each")
    numChecker(message);
}


console.log(body);
function reshuffle() {
    //remove
    let child = document.querySelectorAll(".midDiv");
    for (i=0; i<child.length; i++) {
        let childpos = child[i];
        divM.removeChild(childpos);
    }
    //addback
    for (i=0; i<pixLength; i++) {
        //console.log(pixLength); 
        midDiv = document.createElement("div")
        midDiv.classList = "midDiv";
        divM.appendChild(midDiv);
       
    }
    for (j=0; j< midDivArray.length; j++) {
        // midDivList = document.getElementsByClassName('midDiv');
        // midDivArray = Array.from(midDivList);
        // let childpos = midDivArray[j];
        // let smallDiv = document.createElement("div")
        // smallDiv.classList = "smallDiv"
        // childpos.appendChild(smallDiv);
        // console.log(smallDiv);
        passer();
        addListener();
    }
}

function numChecker(num) {
    if (Number.isInteger(+num)) {
        if (+num > 100 || +num < 1) {
            alert("Size limit breached, try again");
        } else {
            let sizing = +num;
            pixLength = sizing;
            //console.log(pixLength);
            reshuffle();
        }
    } else {
        alert("Failed, try again");
    }
}

let sizeBtn = document.querySelector("#size");
sizeBtn.addEventListener("click",() => getPrompt())