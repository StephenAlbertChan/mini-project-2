const playerInput = document.querySelector('.tictactoe-field');
const display = document.querySelector('.tictactoe-display');
const reset = document.querySelector('.tictactoe-main');
var inputMoves = document.getElementsByClassName('.field');
var i = 0;
var player = 1;
var win = 0;
var tie = 0;

playerInput.addEventListener('click', e=>{
    if (e.target.matches('div')) {
    const key = e.target;
    const id = key.id;
    
    console.log(inputMoves);
    
        if (id === 'block_0' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }
        

        if (id === 'block_1' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }

        if (id === 'block_2' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }

        if (id === 'block_3' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }

        if (id === 'block_4' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }

        if (id === 'block_5' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }

        if (id === 'block_6' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }

        if (id === 'block_7' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }

        if (id === 'block_8' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
            }
        }


    }
})

// reset.addEventListener('click', e=>{
//     if (e.target.matches('button')) {
//         const playerInput = document.querySelector('.tictactoe-field');
//         const key = e.target;

//         playerInput
    
        




//     }
// })

function winCheck(){


}