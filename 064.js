let result = 0;

function answer(n) {
    while (true) {
        if (n % 7 === 0) {
            result += parseInt(n / 7, 10);
            console.log(result);
            break;
        }
        n -= 3;
        result += 1;
        if (n < 0) {
            console.log(-1);
            break;
        }
    }
}

answer(24);
