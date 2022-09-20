function answer(n) {
    let s = '';
    for (let i = 0; i <= n; i++) {
        s += i;
    }
    let count = 0;
    for (let j in s) {
        if (s[j] == 1) {
            count++;
        }
    }
    console.log(count);
}

answer(1000);

//2번 답안 - 정규표현식 사용
let s = '';
for (let i = 0; i <= 1000; i++) {
    s += i;
}
console.log(s.match(/1/g).length);
