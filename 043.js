function answer(n) {
    let b = [];
    let result = '';

    while (n) {
        b.push(n % 2);
        n = parseInt(n / 2, 10);
    }

    b.reverse();

    b.forEach((i) => {
        result += i;
    });
    console.log(result);
}

answer(20);

//쉬운방법
let dec = 20;
console.log(dec.toString(2));
