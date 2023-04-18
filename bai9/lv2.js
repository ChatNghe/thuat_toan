let N = 2
let S = 3
for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= S - i ; j++) {
        let k = S - i - j
        console.log(`(${i},${j},${k})`)
    }
}