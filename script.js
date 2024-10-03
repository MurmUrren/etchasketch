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
}


let width, height;

const newGridButton = document.createElement("button");
newGridButton.textContent = 'New grid';
newGridButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.remove());
    width = prompt(`Enter how many squares width`);
    height = prompt(`Enter how many squares height`);
    createGrids(width, height);
})

createGrids(16, 16)

document.body.append(newGridButton);
