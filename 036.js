function answer(n) {
    let result = [];
    for (let i = 1; i < 10; i++) {
        result += i * n + ' ';
        console.log(result);
    }
}

answer(2);
