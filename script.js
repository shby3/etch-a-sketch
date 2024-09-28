// Code to make a 16 by 16 grid of divs with the "square" class and put them in
// index.html's square-container.

const grid = document.querySelector("#square-container");

function makeColumn() {
    const column = document.createElement("div");
    column.className = "column";
    grid.appendChild(column);

    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.className = "square";
        column.appendChild(square);
    }
}

function makeGrid() {
    for (let i = 0; i < 16; i++) {
        makeColumn();
    }
}

makeGrid();