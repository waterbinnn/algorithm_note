function answer(str) {
    let arr = [];
    for (let i = 0; i < 25; i++) {
        arr.push('=');
    }
    console.log(arr.join('') + str + arr.join(''));
}

answer('hi');

//방법2
const str = 'hello';

const n = 25 + parseInt(str.length / 2, 10);

//왼쪽부터 채우기
const a = str.padStart(n, '=');

//오른쪽까지 채워서 출력
console.log(a.padEnd(50, '='));

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
