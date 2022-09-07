// 1,2,3 등까지 사탕 제공, 쩜수가 같을 경우 모두 다 줘야 함

let score = [];
let candy = 0;
let result = [];

function answer(scores) {
    score = scores.split(' ').map((n) => {
        return parseInt(n, 10);
    });
    score.sort((a, b) => a - b);

    console.log(score);

    while (result.length < 3) {
        let n = score.pop();
        // console.log(n);
        if (!result.includes(n)) {
            result.push(n);
        }
        candy += 1;
    }
    console.log(candy);
}

answer('97 86 75 66 55 97 85 97 97 95');
