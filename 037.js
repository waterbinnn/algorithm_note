function answer(str) {
    const arr = str.split(' ');
    let result = {};
    let winner = '';

    for (let index in arr) {
        let val = arr[index];
        result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
    }
    winner = Object.keys(result).reduce((a, b) => {
        return result[a] > result[b] ? a : b;
    });

    console.log(`${winner}이가 총 ${result[winner]}표로 반장이 되었습니다.`);
}

answer('원범 원범 혜원 혜원 혜원 혜원 유진 유진');
