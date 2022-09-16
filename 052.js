function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // console.log(quickSort(left));
    // console.log(quickSort(right));

    return quickSort(left).concat(pivot, quickSort(right));
}

const str = '1 3 6 5 7 8 2 9 4';

const array = str.split(' ').map((n) => parseInt(n, 10));
console.log(quickSort(array));
