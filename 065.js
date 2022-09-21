const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let c = [];

//map : 리턴값에 값을 넣어주면 된다.
c = a.map(function (e, i) {
    if (i % 2 === 0) {
        return [e, b[i]];
    } else {
        return [b[i], e];
    }
});
console.log(c);

//forEach : return 값이 undefined 여서 리턴대신 새 배열에 넣는 방식으로 해줘야한다.
a.forEach(function (e, i) {
    if (i % 2 === 0) {
        c.push([e, b[i]]);
    } else {
        c.push([b[i], e]);
    }
});

console.log(c);
