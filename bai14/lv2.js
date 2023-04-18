let arr = [1,2,3,8,5,6,7]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%3 ===0){
        sum += arr[i]
    }
}
console.log(sum)