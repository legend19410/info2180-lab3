document.addEventListener('DOMContentLoaded', function (){
    const board = document.getElementById('board');
    const boardChildern = Array.from(board.children);
    const statusMessage = document.getElementById('status');
    let turn = 0;
    let gameState = [['0', '1', '2'], 
                     ['3', '4', '5'],
                     ['6', '7', '8']];

    boardChildern.forEach((box, index) => {
        box.addEventListener('click',function(){
            let id = box.getAttribute('id');
            if(turn === 0){
                for(let state of gameState){
                    if (state.includes(id)){
                        box.classList.add("X");
                        box.textContent = "X";
                        let id_index = state.indexOf(id);
                        state[id_index] = 'X';
                        turn = 1;
                        console.log(gameState);
                        if(isAWinner(gameState,'X')){
                            statusMessage.innerHTML = "Congratulations! X is the Winner!";
                            statusMessage.classList.add("you-won");
                        }
                        break;
                    }
                }
            }else{
                for(let state of gameState){
                    if (state.includes(id)){
                        box.classList.add("O");
                        box.textContent = "O";
                        let id_index = state.indexOf(id);
                        state[id_index] = 'O';
                        turn = 0;
                        console.log(gameState);
                        if(isAWinner(gameState,'O')){
                            statusMessage.innerHTML = "Congratulations! O is the Winner!";
                            statusMessage.classList.add("you-won");
                        }
                        
                        break;
                    }
                }
            }
        });

        box.addEventListener('mouseover', ()=>{
            box.classList.add("hover");
        });
        box.addEventListener('mouseleave', ()=>{
            box.classList.remove('hover');
        });
        
        box.classList.add('square');
        box.setAttribute('id', index);

        function isAWinner(gS,player){
            for(let i=0; i<gS.length; i++){
                if(gS[i][0] === player && gS[i][1]=== player && gS[i][2]=== player){
                    return true;
                }
                if(gS[0][i]=== player && gS[1][i]=== player && gS[2][i]=== player){
                    return true;
                }
                
            }

            if(gS[0][0]=== player && gS[1][1]=== player && gS[2][2]=== player){
                return true;
            }

            if(gS[0][2]=== player && gS[1][1]=== player && gS[2][0]=== player){
                return true;
            }
      
        }
           
        
        
    });

    boardChildern.forEach((element)=>{
        console.log(element.getAttribute("id"));
    });

    

});