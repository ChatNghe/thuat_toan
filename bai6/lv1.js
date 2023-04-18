let a = 100;

for (let i = 1; i <= Math.ceil(a / 2); i++) {
    if (a % i === 0) {
        console.log(i)
    }
}
for (let i = 1; i <= Math.ceil(a / 2); i++) {
    if (a % i === 0 && i<100) {
        console.log(i)
    }
}
