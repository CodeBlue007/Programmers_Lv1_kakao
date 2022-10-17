function solution(numbers, hand) {
    
    let [answer, leftpos, rightpos] = ['','*','#'];
    let leftset = new Set([1,4,7]); 
    let rightset = new Set([3,6,9]);
    
    const upDateLeft = (val) =>{
        answer += 'L';
        leftpos = val;
    }
    
     const upDateRight = (val) =>{
        answer += 'R';
        rightpos = val;
    }
    
    numbers.forEach(val =>{
        if(leftset.has(val)){
            upDateLeft(val);
        }
        else if(rightset.has(val)){
            upDateRight(val);
        }
        else{
            let Ldistance = findDistance(leftpos, val);
            let Rdistance = findDistance(rightpos, val);
            if(Ldistance > Rdistance){
                 upDateRight(val);
            }
            else if(Ldistance < Rdistance){
                 upDateLeft(val);
            }
            else{
                if(hand === "right"){
                   upDateRight(val);
                }
                else{
                   upDateLeft(val);
                }
            }
        }
    });
    
    return answer;
}

function findDistance(pos, target){
    let keypad = {
        '1':[1,1], '2':[1,2], '3':[1,3],
        '4':[2,1], '5':[2,2], '6':[2,3],
        '7':[3,1], '8':[3,2], '9':[3,3],
        '*':[4,1], '0':[4,2], '#':[4,3],
    }
    
    return (Math.abs(keypad[pos][0]-keypad[target][0]) + Math.abs(keypad[pos][1]-keypad[target][1]));
}