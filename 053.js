let n = '(())';

let result = [];
let count = 0;

function answer(input) {
    const arr = n.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr === '(') {
            count++;
        }
        if (arr === ')') {
            count--;
        }
    }
    if (count !== 0) {
        return false;
    }

    for (let i in arr) {
        if (arr[i] === '(') {
            result.push('(');
        }
        if (arr[i] === ')') {
            if (arr.length === 0) {
                return false;
            }
            result.pop();
        }
    }
    return true;
}

if (answer(n) === true) {
    console.log('Yes');
} else {
    console.log('No');
}
