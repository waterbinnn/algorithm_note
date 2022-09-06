let data = ['   + -- + - + -   ', '   + --- + - +   ', '   + -- + - + -   ', '   + - + - + - +   '];
let result = '';
for (let s of data) {
    const newArr = s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0');
    result += String.fromCharCode(parseInt(newArr, 2));
}
console.log(result);
