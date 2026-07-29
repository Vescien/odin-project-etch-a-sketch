const container = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector(".grid-button");
const displayGridSize = document.querySelector(".displayGridSize");
const solidBtn = document.querySelector(".solid-button");
const rainbowBtn = document.querySelector(".rainbow-button");
const eraserBtn = document.querySelector(".eraser-button");
const toggleButtons = document.querySelectorAll("#toggle")

let containerSize = 600;
let gridSize = 16;
let boxSize = containerSize / gridSize;
let currentMode = "solid";

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;
displayGridSize.textContent = `${gridSize} x ${gridSize}`;

solidBtn.addEventListener("click", () => {
    currentMode = "solid";
    selectedButtonColor(solidBtn);
});

rainbowBtn.addEventListener("click", () => {
    currentMode = "rainbow";
    selectedButtonColor(rainbowBtn);
});

eraserBtn.addEventListener("click", () => {
    currentMode = "eraser";
    selectedButtonColor(eraserBtn);
});

function createGrid(gridSize, boxSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let box = document.createElement("div");
            box.classList.add("grid")
            box.style.height = `${boxSize}px`;
            box.style.width = `${boxSize}px`;
            container.appendChild(box);
            box.addEventListener("mouseover", () => {
                if (currentMode === "solid") {
                    box.style.backgroundColor = "black";
                    box.style.opacity = "1";
                } else if (currentMode === "rainbow") {
                    box.style.backgroundColor = randomColorRGB();
                    box.style.opacity = "1";
                } else if (currentMode === "eraser") {
                    box.style.opacity -= "0.5";
                }
            })
        }
    }
}

function randomColorRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

function selectedButtonColor(button) {
    for (btn of toggleButtons) {
        btn.style.backgroundColor = "";
    }
    button.style.backgroundColor = "#84f542";
}

gridSizeBtn.addEventListener("click", () => {
    let value = Number(prompt("Grid size(Max: 100): "));
    while (value <= 0 || value > 100 || !Number.isInteger(value)) {
        value = Number(prompt("Grid size(Max: 100): "));
    }
    if (value) {
        container.innerHTML = "";
        createGrid(value, containerSize / value);
        displayGridSize.textContent = `${value} x ${value}`;
    }
})

createGrid(gridSize, boxSize);
