document.addEventListener('DOMContentLoaded', function (){
    const board = document.getElementById('board');
    const boardChildern = Array.from(board.children);
    let turn = 0;
    let gameState = [['0', '1', '2'], 
                     ['3', '4', '5'],
                     ['6', '7', '8']];

    boardChildern.forEach((box, index) => {
        box.addEventListener('click',function(){
            if(turn === 0){
                let id = box.getAttribute('id');
                for(let state of gameState){
                    if (state.includes(id)){
                        box.classList.add("X");
                        box.textContent = "X";
                        let id_index = state.indexOf(id);
                        state[id_index] = true;
                        turn = 1;
                        console.log(gameState);
                        break;
                    }
                }
            }else{
                let id = box.getAttribute('id');
                for(let state of gameState){
                    if (state.includes(id)){
                        box.classList.add("O");
                        box.textContent = "O";
                        let id_index = state.indexOf(id);
                        state[id_index] = false;
                        turn = 0;
                        console.log(gameState);
                        break;
                    }
                }
            }
        });
        
        box.classList.add('square');
        box.setAttribute('id', index);
           
        
        
    });

    boardChildern.forEach((element)=>{
        console.log(element.getAttribute("id"));
    });

    

});