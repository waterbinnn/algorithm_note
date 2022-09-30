// 행렬곱하기
[
    //     [a[0][0] * b[0][0] + a[0][1] * b[1][0], 
    //      a[0][0] * b[0][1] + a[0][1] * b[1][1]],
    //      a[1][0] * b[0][0] + a[1][1] * b[1][0],
    //      a[1][0] * b[0][1] + a[1][1] * b[1][1],
    // ];
    
    

function answer(a, b) {
    let result = [];
    const len = a[0].length;

    if (len === b.length) {
        //곱할 수 있는 행렬인지 확인
        for (let i = 0; i < len; i++) {
            let row = []; //행
            for (let j = 0; j < len; j++) {
                let el = 0; //원소의 값이 들어감
                for (let k = 0; k < len; k++) {
                    el += a[i][k] * b[k][j];
                }
                row.push(el);
            }
            result.push(row);
        }
        return result;
    } else {
        return -1;
    }
}

let a = [
    [1, 2],
    [2, 4],
];

let b = [
    [1, 0],
    [0, 3],
];

console.log(answer(a, b));
