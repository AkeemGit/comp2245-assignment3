document.addEventListener('DOMContentLoaded', function(){
    //console.log("Content Loaded");
    let squares = document.querySelectorAll("#board div");
    let currentPlayer = 'X';
    let boardState = Array(9).fill(null);

    squares.forEach((square, index) =>{
        square.classList.add('square');

        square.addEventListener('click', () => {
            //Preventing box from changing
            if (boardState[index] !== null) return;
            
            //adding play to array
            boardState[index] = currentPlayer;
            
            //Adding content to box
            square.textContent = currentPlayer;

            //Updating square style based on player
            square.classList.add(currentPlayer.toLowerCase());

            //Changing player
            if (currentPlayer === 'X'){
                currentPlayer = 'O';
            }else{
                currentPlayer = 'X';
            }
            
            
            
        });
    });
    

});

