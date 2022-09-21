// let str = '복잡한 세상 편하게 살자';

function answer(str) {
    let word = str.split(' ');
    let result = '';

    for (let s of word) {
        result += s.slice(0, 1);
    }
    console.log(result);
}

answer('복잡한 세상 평하게 살자');
answer('To Much Information');
