// A grid of 16 x 16 squares
const grid = document.querySelector("#square-container");
// Colors to choose from
const colors = ["black", "red", "blue", "green"];
// Array of square elements in the grid
let squares = [];
// Color to change squares to when drawn on
let penColor = "black";
// Will change the color of the square when true
let penDown = false;


// Make a column of 16 squares as a child of grid
function makeColumn() {
    const column = document.createElement("div");
    column.className = "column";
    grid.appendChild(column);

    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        squares.push(square);
        square.className = "square";
        column.appendChild(square);
    }
}


// Make 16 columns
function makeGrid() {
    for (let i = 0; i < 16; i++) {
        makeColumn();
    }
}


// Set square event listeners so that a square will be drawn on well the pointer is
// down.
function setSquares() {
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.setAttribute("drawnColor", "white");
        square.addEventListener("pointerdown", handlePenDown(square));
        square.addEventListener("pointerup", () => penDown = false);
        square.addEventListener("pointerenter", handlePenEnter(square));
        square.addEventListener("pointerleave", handlePenLeave(square));
    }
}


// Set an event listener for the grid so that penDown turns to false on pointer leave.
function setGrid() {
    grid.addEventListener("pointerleave", () => penDown = false);
}


// Return a function for square to change change back to its original color when
// pointer leaves if pointerdown is false
function handlePenLeave(square) {
    return () => {
        let isDrawn = square.getAttribute("isDrawn");
        let drawnColor = square.getAttribute("drawnColor");
        if ((!penDown && !isDrawn) || isDrawn && penColor !== drawnColor) {
            square.style.backgroundColor = drawnColor;
        }
    }
}


// Return function that changes a square's background color and sets it to drawn
// if pointerdown is true
function handlePenEnter(square) {
    return () => {
        square.style.backgroundColor = penColor;
        if (penDown) {
            square.setAttribute("isDrawn", true);
            square.setAttribute("drawnColor", penColor);
        }
    }
}


// Return function that sets penDown to true and sets the square's isDrawn
// attribute to true.
function handlePenDown(square) {
    return () => {
        penDown = true;
        square.setAttribute("isDrawn", true);
        square.setAttribute("drawnColor", penColor);
    }
}

//
function makeColorContainer() {
    const colorContainer = document.createElement("div");
    colorContainer.id = "colorContainer";
    grid.appendChild(column);
}


//
function makeColorButtons() {
    const colorContainer = document.querySelector("#color-container");
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const colorButton = document.createElement("div");
        colorButton.className = "color-button";
        colorButton.style.backgroundColor = color;
        colorButton.addEventListener("click", () => penColor = color);
        colorContainer.appendChild(colorButton);
    }
}


makeGrid();
setSquares();
setGrid();
makeColorButtons();