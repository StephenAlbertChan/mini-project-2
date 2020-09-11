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

    for(i=0;i<9;i++){
        if (id === 'block_'+i && key.textContent === '?'){
            if (player === 1){
                key.textContent = 'X';
                inputMoves[i] = 1;
                win = winCheck(player,inputMoves);
                tie = checkTie(tie,inputMoves);
                done = displayWinOrTie(win,tie,done);
                player = 2;
            }
            else
            if (player === 2){
                key.textContent = 'O';
                inputMoves[i] = 2;
                win = winCheck(player,inputMoves);
                tie = checkTie(tie,inputMoves);
                done = displayWinOrTie(win,tie,done);
                player = 1;
            }
            whosTurn(player);
            if (done === 1)
                player = 0;
        }
    }
    }
})

reset.addEventListener('click', e=>{
    if (e.target.matches('button')) {
       
        for(i=0;i<=8;i++){
            inputMoves[i] = 0;
            playerInput.querySelector('#block_'+i).textContent = "?"
        }

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
        return tie=1;
    else
        return tie=0;
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