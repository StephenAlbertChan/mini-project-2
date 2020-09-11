const playerInput = document.querySelector('.tictactoe-field');
const display = document.querySelector('.tictactoe-display');
const turn = document.querySelector('.whos-turn');
const reset = document.querySelector('.restartButton');
var inputMoves = [0,0,0,0,0,0,0,0,0];
var i = 0;
var player = 1;
var win = 0;
var tie = 0;
var done = 0;

playerInput.addEventListener('click', e=>{

    if (e.target.matches('div')) {
    const key = e.target;
    const id = key.id;

        if (id === 'block_0' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[0] = 1;

            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[0] = 2;

            }
        }
        
        if (id === 'block_1' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[1] = 1;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[1] = 2;
            }
        }

        if (id === 'block_2' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[2] = 1;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[2] = 2;
            }
        }

        if (id === 'block_3' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[3] = 1;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[3] = 2;
            }
        }

        if (id === 'block_4' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[4] = 1;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[4] = 2;
            }
        }

        if (id === 'block_5' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[5] = 1;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[5] = 2;
            }
        }

        if (id === 'block_6' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[6] = 1;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[6] = 2;
            }
        }

        if (id === 'block_7' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[7] = 1;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[7] = 2;
            }
        }

        if (id === 'block_8' && key.textContent !== 'X' && key.textContent !== 'O'){
            if (player === 1){
                key.textContent = 'X';
                player = 2;
                inputMoves[8] = 1;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                player = 1;
                inputMoves[8] = 2;
            }
        }

        whosTurn(player);
        win = winCheck(player,inputMoves);
        tie = checkTie(tie,inputMoves);
        done = displayWinOrTie(win,tie,done);
            if (done === 1)
                player = 0;

    }
})

reset.addEventListener('click', e=>{
    if (e.target.matches('button')) {
        var block_0 = playerInput.querySelector('#block_0');
        var block_1 = playerInput.querySelector('#block_1');
        var block_2 = playerInput.querySelector('#block_2');
        var block_3 = playerInput.querySelector('#block_3');
        var block_4 = playerInput.querySelector('#block_4');
        var block_5 = playerInput.querySelector('#block_5');
        var block_6 = playerInput.querySelector('#block_6');
        var block_7 = playerInput.querySelector('#block_7');
        var block_8 = playerInput.querySelector('#block_8');

        for(i=0;i<=8;i++){
            inputMoves[i] = 0;
        }

        block_0.textContent = "?";
        block_1.textContent = "?";
        block_2.textContent = "?";
        block_3.textContent = "?";
        block_4.textContent = "?";
        block_5.textContent = "?";
        block_6.textContent = "?";
        block_7.textContent = "?";
        block_8.textContent = "?";
        display.textContent = " ";
        turn.textContent = "Player 1's Turn";
        player = 1;
    }
})

function whosTurn(player){

    if(player === 1){
        turn.textContent = "Player 1's Turn";
    } else
    if (player === 2){
        turn.textContent = "Player 2's Turn";
    }
}

function winCheck(player, inputMoves){

    if (inputMoves[0] === player && inputMoves[1] === player && inputMoves[2] === player)
        win = player;
    else
    if (inputMoves[3] === player && inputMoves[4] === player && inputMoves[5] === player)
        win = player
    else
    if (inputMoves[6] === player && inputMoves[7] === player && inputMoves[8] === player)
    win = player;
    else
    if (inputMoves[0] === player && inputMoves[3] === player && inputMoves[6] === player)
    win = player;
    else
    if (inputMoves[1] === player && inputMoves[4] === player && inputMoves[7] === player)
    win = player;
    else
    if (inputMoves[2] === player && inputMoves[5] === player && inputMoves[8] === player)
    win = player;
    else
    if (inputMoves[0] === player && inputMoves[4] === player && inputMoves[8] === player)
    win = player;
    else
    if (inputMoves[2] === player && inputMoves[4] === player && inputMoves[6] === player)
    win = player;
    else
    win = 0;
    
    return win;
}

function checkTie(tie,inputMoves){

    for(i=0;i<9;i++){
        if (inputMoves[i] !== 0 && win === 0){
            tie++;
        }
    }
    if (tie === 9)
        tie = 1;
    else
        tie = 0;
    
    return tie;
}

function displayWinOrTie(win,tie){

    if (win === 1 && tie === 0){
        display.textContent = "Player 1 wins!";
        done = 1;
    }
    else
    if (win === 2 && tie === 0){
        display.textContent = "Player 2 wins!";
        done = 1;
    }
    else
    if (win === 0 && tie === 1){
        display.textContent = "Game is a tie!";
        done = 1;
    }
    else
        done = 0;

return done;
}