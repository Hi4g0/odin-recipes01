const gridContainer = document.querySelector('#grid');
const resetButton = document.querySelector('#reset-button');

function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(squaresPerSide) {
    gridContainer.innerHTML = '';

    const containerSize = gridContainer.clientWidth;
    const squareSize = containerSize / squaresPerSide;

    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = gerarCorAleatoria();
            });
            gridContainer.appendChild(square);
        }
    }
}

createGrid(16);

resetButton.addEventListener('click', () => {
    const userInput = prompt('Quantos quadrados por lado na nova grade? (máx: 100)');
    const newSize = parseInt(userInput);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Por favor, insira um número entre 1 e 100.');
    }
});

