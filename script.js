const container = document.querySelector(".container");
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
        }
    }
}

createGrid(gridSize, boxSize);