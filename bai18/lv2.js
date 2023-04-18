let arr = [1,3,5,4,1,2,3,8,7]
let a = []
let b = []
for (let i = 0; i < arr.length; i++) {
    if(arr[i+1] - arr[i] === 1 || arr[i] - arr[i+1] === 1) a.push(arr[i])
    else {
        a.push(arr[i])
        b.push(a)
        a = []
    }
}
console.log(b)
let sum = 0
let sumArr = []
for (let i = 0; i < b.length; i++) {
    sum = 0
    for (let j = 0; j < b[i].length; j++) {
        sum += b[i][j]
    }
    sumArr.push(sum)
}
let max = sumArr[0]
let index = 0

for (let i = 0; i < sumArr.length; i++) {
    if(sumArr[i]>max) max = sumArr[i]
}

for (let i = 0; i < sumArr.length; i++) {
    if(sumArr[i] === max) index = i
}
console.log(b[index])
