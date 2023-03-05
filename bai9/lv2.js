let N = 100
let soLan
if (N%9 === 0) soLan = N/9
else soLan = Math.floor(N/9) + 1

console.log(`Cần tối thiểu ${soLan} lần rán`)
