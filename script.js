const gridContainer = document.querySelector(".grid-container");
console.log(gridContainer.offsetWidth);

function createGrids(width, height) {
    const squareHeight = (gridContainer.offsetWidth) / width;

    console.log(squareHeight);

    for(let i = 0; i < width * height; i++) {
        const square = document.createElement("div");
        square.className = "square";
        console.log(square.offsetWidth);
        square.style.cssText = `
        height: ${squareHeight}px;
        width: calc(100% * (1/${width}));
        `
        
        gridContainer.append(square)
    } 

    initializePen()
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function initializePen() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "Black";
    }));

    squares.forEach((square) => square.addEventListener("mouseout", (e) => {
        if (e.target.id != "selected") {
            e.target.style.backgroundColor = "White";
        };
    }));

    squares.forEach((square) => square.addEventListener("click", (e) => {
        let currentOpacity = parseFloat(e.target.style.opacity || 0);

        if (currentOpacity < 1){
            e.target.style.opacity = currentOpacity + 0.05;
        }
        e.target.id = "selected"

        e.target.style.backgroundColor = getRandomColor(); 
    }));

    squares.forEach((square) => square.addEventListener("auxclick", (e) => {
        e.target.id = ""
    }));
}


let width, height;

const newGridButton = document.createElement("button");
newGridButton.textContent = 'New grid';
newGridButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.remove());

    do {
        width = parseInt(prompt(`Enter how many squares width`));
        height = parseInt(prompt(`Enter how many squares height`));

        if (width > 100 || height > 100) alert("Maximum width or height allowed is 100");

    } while (width > 100 || height > 100);
    
    createGrids(width, height);
})

createGrids(16, 16);
initializePen();


const gridWrapper = document.querySelector(".grid-wrapper");
gridWrapper.append(newGridButton);
