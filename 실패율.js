function solution(N, stages) {
    let map = new Map();
    let answer =[];

    for(let i=0; i<N; i++){
     let array = stages.filter(x => x >=i+1);
     let count = 0;
     array.forEach(value => value===i+1 ? count++ : null);
     let faultRate = array.length ===0 ? 0 : count/array.length;
     map.set(i+1, faultRate);
    }   
    let fault = [...map.values()];
    fault.sort((a,b) => b-a);

        for(let i=0; i<fault.length; i++){
             for (let [key,value] of map){
                if(fault[i] === value){
                answer.push(key);
                map.delete(key);
                break;
                }
             }
         }

    return answer;
}


function solution(N, stages) {
    let answer = [];
    
    for(let i=1; i<=N; i++){
        let totalStage = stages.filter(x => x>=i).length;
        let notClear = stages.filter(x => x ===i).length;
        let faultRate = totalStage ===0? 0 : notClear/totalStage;
        answer.push([i,faultRate]);
    }
    answer.sort((a,b) => b[1]-a[1]);
    
    return answer.map(x => x[0]);
}