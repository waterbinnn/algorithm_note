const n = '1 4 2 3 7';
let arr = n.split(' ').map((n) => parseInt(n, 10));
arr.sort();

function answer(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return 'No';
        }
    }
    return 'Yes';
}

console.log(answer(arr));
