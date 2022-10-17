function solution(n, arr1, arr2) {
  
    let answer = [];
    for(let i=0; i<n; i++){
        let string = '';
        let arr1Binary = arr1[i].toString(2).padStart(n,"0");
        let arr2Binary = arr2[i].toString(2).padStart(n,"0");
        for(let i=0; i<arr1Binary.length;i++){
            arr1Binary[i]==='1' || arr2Binary[i] ==='1' ? string += '#': string += ' ';
        }
        answer.push(string);
    }
    return answer;
}
