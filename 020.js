function answer(a, b) {
    const result = Math.floor(parseInt(a, 10) / parseInt(b, 10));
    const left = parseInt(a, 10) % parseInt(b, 10);

    console.log(result, left);
}

answer(10, 2);
