let grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";
for (i = 0; i < 16*16; i++) grid.innerHTML = grid.innerHTML + '<div class="grid-item"></div>'
let gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach(gridItem => gridItem.addEventListener("mouseover", () => gridItem.style.backgroundColor = "black"))