let arr = [1,2,3,4,5,6,7,8]
let S = 0
for (let i = 1; i < arr.length; i+=2) {
    S += arr[i];
}
console.log(S)