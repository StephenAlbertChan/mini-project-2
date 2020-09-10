const playerInput = document.querySelector('.tictactoe-field');
const display = document.querySelector('.tictactoe-display');
var inputMoves = document.getElementsByClass('.field');
var i = 0;

playerInput.addEventListener('click', e=>{
    if (e.target.matches('td')) {
    const key = e.target;
    const action = key.dataset.action;
    
    console.log(inputMoves);
    

    

    }


})

