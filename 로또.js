function solution(lottos, win_nums) {
    let map = new Map([[1,6],[2,5],[3,4],[4,3],[5,2],[6,1],[0,6]])
    win_nums.forEach(value => {
        lottos = lottos.filter(x => x !== value);
    });
    let count =0;
    lottos.forEach(value => value ===0? count++ : null);
    let sameNum = 6-lottos.length;
    
    let answer = [map.get(sameNum+count), map.get(sameNum)]
    
    return answer;
    
}