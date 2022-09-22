function answer(n) {
    let p = 0;
    let total = 0;
    let temp = 0;

    while (true) {
        total = parseInt((p * (p - 1)) / 2, 10);
        if (n < total) {
            break;
        }
        temp = total;
        p += 1;
    }
    return [parseInt(n - temp, 10), p];
}
console.log(answer(59));

// 참가자 = n
// 악수의 수 = n-1 + n-2 + n-3 + ... + 1;
// 100 + 99 + 98 + ... + 3 + 2 + 1 === 101 * 50
// n-1(n)/2 -> 총 악수숫자
