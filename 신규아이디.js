function solution(new_id) {
    let check_id = 
        new_id.toLowerCase() // 소문자로 바꿈
    .replace(/[^a-z0-9-_.]/g,'') // 알파벳 소문자 빼기 밑줄 마침표 제외 제거
    .replace(/[.]+/g, '.') / 마침표 연속되었다면 하나로 만듬.
    .replace(/^[.]/ || /[.]$/, ''); // or연산자 사용, 문장 앞에 . 이랑 문장 뒤에 .제거
    
    
    check_id.length === 0 ? check_id += 'a' : null  // 0이면 a추가
    check_id.length >= 16 ? check_id = check_id.slice(0,15) : null // 16보다 크면 자른다.
    check_id = check_id.replace(/[.]$/,''); // 문장끝에 온점제거
    
    while(check_id.length <=2){
        check_id += check_id[check_id.length-1]; //마지막 문자 넣는 과정.
    }
    
    return check_id;
}