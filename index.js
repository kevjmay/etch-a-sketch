//Etch-A-Sketch Logic below

document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector('.container');

const resetButton = document.createElement('resetButton');
resetButton.classList.add('resetButton')
resetButton.textContent = 'Reset';

const resizeButton = document.createElement('resizeButton');
resizeButton.classList.add('resizeButton')
resizeButton.textContent = 'Resize';

//function to resize the canvas with prompt

function resizeCanvas() {
    let newSize = prompt('Enter in a number between range: 2 - 100')

    //Validation
    newSize = parseInt(newSize);
    if (newSize < 2 || newSize > 100 || newSize === isNaN) {
        alert('Please enter a valid number between 2 and 100.')
        return;
    }

    //While loop to remove existing grid
    while(container.firstChild) {
        container.removeChild(container.firstChild);  
    }

    createGrid(newSize)

}

//function to reset the canvas to blank
function resetCanvas() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.style.backgroundColor = 'white';
    });
}

resetButton.addEventListener('click', resetCanvas)
resizeButton.addEventListener('click', resizeCanvas)

document.body.appendChild(resetButton)
document.body.appendChild(resizeButton)

//Create grid
    function createGrid(size) {
        for (let i = 0; i < size * size; i++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
    
            // Add event listener for mouseover
            grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'black';
            });
    
            container.appendChild(grid);
        
        }
    }

// const number = 16;
// for (let i = 0; i < number * number; i++) {
//     const grid = document.createElement('div');
//     grid.classList.add('grid');

//     grid.addEventListener('mouseover', function() {
//         grid.style.backgroundColor = 'black';
//     });

//     container.appendChild(grid);
//     }
createGrid(16)
});

