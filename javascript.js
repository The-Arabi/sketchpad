let grid = document.querySelector(".grid");
let gridItems;
let button = document.querySelector("button");
function createGrid(dim = 16) {
    if (isNaN(dim) || dim > 100) {
        do {
            dim = prompt("give the grid dimenstions")
        }
        while(isNaN(dim) || dim > 100)
    }
    grid.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
    grid.innerHTML = null;
    for (i = 0; i < dim**2; i++) grid.innerHTML = grid.innerHTML + '<div class="grid-item"></div>';
    gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => gridItem.addEventListener("mouseover", () => gridItem.style.backgroundColor = "black"));
}
createGrid();
button.addEventListener("click", createGrid);