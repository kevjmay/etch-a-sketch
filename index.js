//Etch-A-Sketch Logic below

document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector('.container');

    // Create 16x16 grid
    const number = 16;
    for (let i = 0; i < number * number; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');

        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'black';
        });

        container.appendChild(grid);
        }

});