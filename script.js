const container = document.querySelector(".container");

let n = 20;
let boxSize = 500 / n;

function createGrid(n, boxSize) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let box = document.createElement("div");
            box.classList.add("grid")
            box.style.height = `${boxSize}px`;
            box.style.width = `${boxSize}px`;
            container.appendChild(box); 
        }
    }
}

createGrid(n, boxSize);