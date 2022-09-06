function answer(str) {
    let sorted = '';

    sorted = str
        .split(' ')
        .sort((a, b) => a - b)
        .join('');

    if (str.split(' ').join('') == sorted) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

answer('176 156 155 165 166 169');
answer('155 156 165 166 169 176');
