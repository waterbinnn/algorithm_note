function answer(n) {
    let sum = 0;
    while (n !== 0) {
        sum += n % 10;
        console.log(sum);

        n = Math.floor(n / 10);
    }
    console.log(sum);
}

answer(18234); //18
