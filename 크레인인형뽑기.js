function solution(board, moves) {
    let answer = 0;
    let stack = [];
    let top = -1;
    let transpose = board.map((x,idx1) => x.map((_,idx2)=> board[idx2][idx1]));
    
    const IsValid = (target) => {
        if(top === -1){
            top++;
            stack.push(target);
        }
        else{
            if(stack[top] === target){
                stack.pop();
                top --;
                answer +=2;
            }
            else{
                top++;
                stack.push(target);
            }
        }
    }

    
    moves.forEach(val => {
        let target = transpose[val-1].findIndex(x => x !== 0);
        if(target !== -1){
            IsValid(transpose[val-1][target]);
            transpose[val-1][target] = 0; 
        }
    });
    
    return answer;
}