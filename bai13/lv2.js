let arr = [1,2,3,8,5,6,7]
let max = arr[0]
let index = 0
for (let i = 1; i < arr.length; i++) {
    if(arr[i]>max){
        max = arr[i]
        index = i
    }
}
let newArr = [...arr]
newArr.splice(index,1)
let secondMax = newArr[0]
for (let i = 1; i < newArr.length; i++) {
    if(newArr[i]>secondMax){
        secondMax = newArr[i]
    }
}
console.log(secondMax)