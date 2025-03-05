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








//=================================
// // smallDiv.classList = "smallDiv"
//         smallDiv.id = `D-${j},`;
//         smallDiv.id += `F-${i}`;
        //console.log(j);
        //console.log(smallDiv);
        // element.appendChild(smallDiv);


// let div1 = document.createElement("div");
// let div2 = document.createElement("div");
// let div3 = document.createElement("div");
// let div4 = document.createElement("div");
// let div5 = document.createElement("div");
// let div6 = document.createElement("div");
// let div7 = document.createElement("div");
// let div8 = document.createElement("div");
// let div9 = document.createElement("div");
// let div10 = document.createElement("div");
// let div11 = document.createElement("div");
// let div12 = document.createElement("div");
// let div13 = document.createElement("div");
// let div14 = document.createElement("div");
// let div15 = document.createElement("div");
// let div16 = document.createElement("div");

// div16.classList = div15.classList = div14.classList = div13.classList = div12.classList = div11.classList = div10.classList = div9.classList = div8.classList = div7.classList = div6.classList = div5.classList = div4.classList = div3.classList = div2.classList = div1.classList = "midDiv"
// console.log(div10.classList);

// divM.appendChild(div1);
// divM.appendChild(div2);
// divM.appendChild(div3);
// divM.appendChild(div4);
// divM.appendChild(div5);
// divM.appendChild(div6);
// divM.appendChild(div7);
// divM.appendChild(div8);
// divM.appendChild(div9);
// divM.appendChild(div10);
// divM.appendChild(div11);
// divM.appendChild(div12);
// divM.appendChild(div13);
// divM.appendChild(div14);
// divM.appendChild(div15);
// divM.appendChild(div16);