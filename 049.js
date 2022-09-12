let num = '10 9 8 7 6 5 4 3 2 1';

function answer(n) {
    let arr = [];
    arr = n.split(' ');
    arr.sort((a, b) => b - a);
    console.log(arr[0]);
}

answer(num);
