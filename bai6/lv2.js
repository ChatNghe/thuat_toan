let a = 100;

for (let i = 1; i <= Math.ceil(a / 2); i++) {
    if (a % i === 0 && i%2 ===1) {
        console.log(i)
    }
}
