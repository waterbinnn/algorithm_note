const space = [
    '수성',
    '금성',
    '지구',
    '화성',
    '목성',
    '토성',
    '천왕성',
    '해왕성',
];

function getNum(n) {
    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            console.log(space[i]);
        }
    }
}
getNum(2);
