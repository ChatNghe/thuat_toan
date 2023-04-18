let arr = [1,3,5,4,1,2,3,8,7]
let a = []
let b = []

for (let i = 0; i < arr.length; i++) {
    if(arr[i+1] - arr[i] === 1) a.push(arr[i])
    else {
        a.push(arr[i])
        b.push(a)
        a = []
    }
}
console.log(b)
let max=0
for (let i = 0; i < b.length; i++) {
    if(b[i].length > max) max = b[i].length
}
for (let i = 0; i < b.length; i++) {
    if(b[i].length === max) console.log(b[i])
}