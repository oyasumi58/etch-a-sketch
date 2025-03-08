//step 1: declare gridsize and canvas size variables
console.log("jh")
let gridSize = 10;
const CANVAS_SIZE = 960;
let divM = document.querySelector("#containerM");
const body = document.querySelector("body");

//step 2: make createGrid function
function createGrid(gridSize) {
    //console.log(elSize);
    // for (i=0; i < gridSize; i++) {
    //     console.log("hello");
    //     let elem = document.createElement('div');
    //     elem.id = "midDiv";
    //     divM.appendChild(elem);
    //     makeSmallDiv(gridSize,elem);
    // }
    for (i=0 ; i < gridSize; i++) {
        console.log("loop");
        let elem = document.createElement('div');
        elem.id = "midDiv";
        //console.log(elem);
        let midDiv = elem
        divM.appendChild(midDiv);
        makeSmallDiv(gridSize,midDiv); 
    }
    
}

function makeSmallDiv(gridSize,midDiv) {
    let elSize = (CANVAS_SIZE / gridSize);
    for (j=0 ; j < gridSize ; j++) {
        let elemr = document.createElement('div')
        elemr.id = "smallDiv";
        giveListener(elemr);
        midDiv.appendChild(elemr);
    }
}

createGrid(gridSize);


//step 3: inside function > make each div with the styles and stuff
function giveListener(elem) {
    elem.addEventListener("mouseenter", (e) => {
        e.target.classList = "hover";
        //console.log(e.target);
    })
}

//step 5: size
function numChecker(num) {
    if (Number.isInteger(+num)) {
        if (+num > 100 || +num < 1) {
            alert("Size limit breached, try again");
        } else {
            divM.remove();
            divM = document.createElement("div")
            divM.id = "containerM"
            body.appendChild(divM);
            console.log(divM);
            let sizing = +num;
            gridSize = sizing;
            createGrid(gridSize);
        }
    } else {
        alert("Failed, try again");
    }
}


function getPrompt() {
    let message = prompt("Number of squares per side? \nMax size 100 each")
    numChecker(message);
}
let sizeBtn = document.querySelector("#size");
sizeBtn.addEventListener("click",() => getPrompt())


