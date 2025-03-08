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
        if (divM.id === "containerM") {
            giveListenerDefault(elemr);
        } else if (divM.id === "containerR") {
            giveListenerRainbow(elemr);
        } else {console.log("broke")}
        midDiv.appendChild(elemr);
    }
}

createGrid(gridSize);


//step 3: inside function > make each div with the styles and stuff
function giveListenerDefault(elem) {
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
            let divid = divM.id;
            console.log(divid);
            divM.remove();
            divM = document.createElement("div")
            if (divid === "containerM") {
                divM.id = "containerM"
            } else if (divid === "containerR") {
                divM.id = "containerR"
            } else {
                console.log("broken in size")
            }
            body.appendChild(divM);
            //console.log(divM);
            let sizing = +num;
            gridSize = sizing;
            createGrid(gridSize);
        }
    } else {
        alert("Failed, try again");
    }
}


function getPromptB() {
    let message = prompt("Number of squares per side? \nMax size 100 each")
    numChecker(message);
}
let sizeBtn = document.querySelector("#size");
sizeBtn.addEventListener("click",() => getPromptB())

//add mode switching
let modeBtn = document.querySelector("#mode");
modeBtn.addEventListener("click",() => getPromptM())

function getPromptM() {
    let message = prompt("Switch Mode? Type Y/N")
    if (message === "Y" || message === "y") {
        divM.remove();
        divM = document.createElement("div")
        divM.id = "containerR"
        body.appendChild(divM);
        console.log(divM.id);
        createGrid(gridSize);
    }
}

//rainbow
function randomColor() {
    let resultr = Math.floor(Math.random() *(255 + 1));
    let resultg = Math.floor(Math.random() *(255 + 1));
    let resultb = Math.floor(Math.random() *(255 + 1));
    let rgb = `rgb(${resultr},${resultg},${resultb})`;
    return rgb;
}

function giveListenerRainbow(elem) {
    elem.addEventListener("mouseenter",(e) => {
        let hovElement = e.target;
        hovElement.classList.add("rainbow");
        rgb = randomColor();
        hovElement.style.backgroundColor = rgb;
        hovElement.style.opacity = 0.1;  
    })
}