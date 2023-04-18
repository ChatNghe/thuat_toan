
// Tạo mảng A[n][n] với các phần tử đều là số ngẫu nghiên trong khoảng từ 1 dến 100000 không trùng nhau.
let A = []
let subArr = [];
let n = 10
for (let i = 0; i < n; i++) {
    while (subArr.length < n) {
        let r = Math.floor(Math.random() * 100000) + 1;
        if (A.flat().indexOf(r) === -1 && subArr.indexOf(r) === -1) subArr.push(r);
        if (subArr.length === n) A.push(subArr)
    }
    subArr = []
}
console.log(A)

// Tìm tất cả các số nguyên tố trong mảng A
let primeNumbers = [...A].flat()
let flag = true
for (let i = 0; i < primeNumbers.length; i++) {
    flag = true;
    if (primeNumbers[i] < 2) flag = false
    for (let j = 2; j <= Math.sqrt(primeNumbers[i]); j++) {
        if (primeNumbers[i] % j === 0) flag = false
    }
    if (flag === true) console.log(primeNumbers[i])
}

