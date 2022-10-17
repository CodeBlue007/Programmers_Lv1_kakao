function solution(id_list, report, k) {
    
    let reported = {};
    let answer = {};
    
    for(let i=0; i<id_list.length; i++){
        reported[id_list[i]] = new Set();
        answer[id_list[i]] = 0;
    }
    
    report.forEach(val => {
        let array = val.split(' ');
        reported[array[1]].add(array[0]);
    });
    
    
    for(let key in reported){
        if(reported[key].size >= k){
            let array = [...reported[key]];
            array.forEach(val => {
                answer[val] += 1;
            });
        }
    }
    
    
    return Object.values(answer).map(x => parseInt(x));
}