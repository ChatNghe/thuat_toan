let arr = [1,2,3,4,5,6,7,8]
let sum = 10
let newArr = []
let b = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
         if (arr[i]+ arr[j] === sum){
             newArr.push(arr[i])
             newArr.push(arr[j])
             b.push([arr[i],arr[j]])
         }
    }
}
console.log(b)
