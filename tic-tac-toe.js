document.addEventListener('DOMContentLoaded', function (){
    const board = document.getElementById('board');
    const boardChildern = board.children;
    for(let box of boardChildern){
        box.classList.add('square');
    }

});