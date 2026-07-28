const container = document.querySelector(".container");
const btn = document.querySelector(".grid-button");

let containerSize = 600;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

let gridSize = 16;
let boxSize = containerSize / gridSize;

function createGrid(gridSize, boxSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let box = document.createElement("div");
            box.classList.add("grid")
            box.style.height = `${boxSize}px`;
            box.style.width = `${boxSize}px`;
            container.appendChild(box); 
            box.addEventListener("mouseover", () => box.style.backgroundColor = randomColor());
        }
    }
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

createGrid(gridSize, boxSize);

btn.addEventListener("click", () => {
    let value = Number(prompt("Grid size(Max: 100): "));
    while (value <= 0 || value > 100 || !Number.isInteger(value)) {
        value = Number(prompt("Grid size(Max: 100): "));
    }
    if (value) {
        container.innerHTML = "";
        createGrid(value, containerSize / value);
    }
})
