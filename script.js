console.log("test");
//grid making
const divM = document.querySelector("#containerM");
//console.log(divM);
//middivs
let pixLength = 100;
let midDiv;

for (i=0; i<pixLength; i++) {
    midDiv = document.createElement("div")
    midDiv.classList = "midDiv";
    divM.appendChild(midDiv);
}



const midDivList = document.getElementsByClassName('midDiv');
//console.log(midDivList);
const midDivArray = Array.from(midDivList);
//console.log(midDivArray);
let smallDiv;
function passer() {
    
    for (i=0;i<pixLength;i++) {
        let element = midDivArray[i];
        //console.log(element);
        smallDiv = document.createElement("div");
        smallDiv.classList = "smallDiv"
        // smallDiv.id = `D-${j},`;
        // smallDiv.id += `F-${i}`;
        //console.log(j);
        //console.log(smallDiv);
        element.appendChild(smallDiv);
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
