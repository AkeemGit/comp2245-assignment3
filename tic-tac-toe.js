document.addEventListener('DOMContentLoaded', function(){
    //console.log("Content Loaded");
    let squares = document.querySelectorAll("#board div");
    let button = document.querySelector(".btn");
    let currentPlayer = 'X';
    let boardState = Array(9).fill(null);

    
    

    let winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ];

     function checkWin(player){
        for (let combination of winningCombinations){
            let hasWon = true;

            //Checking each winning combinations against the current board
            for (let index of combination){
                if (boardState[index] !== player){
                    hasWon = false;
                    break;
                }
            }
            //A winning combination has been found.
            if (hasWon){
                return true;
            }
        }
        //no winning combination found
        return false;
     }


    
    function resetGame(){
        boardState = Array(9).fill(null);
        currentPlayer = 'X';

        let message = document.querySelector("#status.you-won");
        if (message){
            message.classList.remove("you-won");
            message.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        }
        

        squares.forEach(square => {
            square.textContent = '';
            square.className = 'square';
        });

        
    }



    squares.forEach((square, index) =>{
        square.classList.add('square');

        square.addEventListener('mouseenter', () =>{
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave', () =>{
            square.classList.remove('hover');
        });

        square.addEventListener('click', () => {
            //Preventing box from changing
            if (boardState[index] !== null) return;
            
            //adding play to array
            boardState[index] = currentPlayer;
            
            //Adding content to box
            square.textContent = currentPlayer;

            //Updating square style based on player
            square.classList.add(currentPlayer);

            

            if (checkWin(currentPlayer)){
                
                let message = document.querySelector("#status");
                message.classList.add('you-won');
                message.innerHTML = `Congratulations! ${currentPlayer} is the Winner!`;
                //console.log("Won");
            }

            //Changing player
            if (currentPlayer === 'X'){
                currentPlayer = 'O';
            }else{
                currentPlayer = 'X';
            }
             
        });

    });

    button.addEventListener('click', resetGame);
    

});

