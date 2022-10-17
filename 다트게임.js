function solution(dartResult) {
    let answer = [];
    let numStack = [];
    
    for(let i=0; i<dartResult.length; i++){
        if(dartResult[i] === 'S'){
            let num = parseInt(numStack.join(''));
            numStack = [];
            answer.push(num);
        }
        else if(dartResult[i] === 'D'){
            let num = parseInt(numStack.join(''));
            numStack = [];
            answer.push(num*num);
        }
        else if(dartResult[i] === 'T'){
            let num = parseInt(numStack.join(''));
            numStack = [];
            answer.push(Math.pow(num,3));
        }
        else if(dartResult[i] === '*'){
           if(answer.length === 1){
               answer.push(answer.pop()*2);
           }
           else{
                let pop1 = answer.pop()*2;
                let pop2 = answer.pop()*2;
               answer.push(pop2);
               answer.push(pop1);
            }
        }
        else if(dartResult[i] === '#'){
            answer.push(answer.pop()*(-1));
        }
        else{
            numStack.push(dartResult[i]);
        }
    }
    
    return answer.reduce((acc,cur) => acc+=cur);
}