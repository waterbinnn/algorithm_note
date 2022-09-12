function isPrime(n) {
    for (let i = 2; i < n; i++) {
        const result = n % i;
        if (result === 0) {
            console.log('No');
            return false;
        }
        if (n === 1) {
            console.log('No');
            return;
        }
    }
    console.log('YES');
}

isPrime(10);
isPrime(5);
