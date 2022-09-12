function answer(str) {
    let arr = str.split('');
    let b = [];
    let result = '';

    for (let i in arr) {
        if (arr[i] === arr[i].toLowerCase()) {
            b.push(arr[i].toUpperCase());
        } else {
            b.push(arr[i].toLowerCase());
        }
    }

    for (let j = 0; j < b.length; j++) {
        result += b[j];
    }
    console.log(result);
}
answer('AAABBBcccddd');
