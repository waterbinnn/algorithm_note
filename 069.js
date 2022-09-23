let prime = [];
let isPrime = true;
let val = 100;
let result = []; //골드바흐파티션

for (let i = 2; i < val; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        prime.push(i);
    }
    isPrime = true;
}

for (let n of prime) {
    if (prime.includes(val - n) && n <= val - n) {
        result.push([n, val - n]);
    }
}

let s = result.map((e) => e[1] - e[0]);

console.log(result); //골드바흐 파티션

let small = result[s.indexOf(Math.min.apply(null, s))];
let big = result[s.indexOf(Math.max.apply(null, s))];

console.log(small);
console.log(big);
