document.addEventListener('DOMContentLoaded', function(){
    //console.log("Content Loaded");
    let squares = document.querySelectorAll("#board div");

    squares.forEach(div =>{
        div.classList.add('square');
    });
    

});

