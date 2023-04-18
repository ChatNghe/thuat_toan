let arr = [1,2,3,4,5,6,7]
let sumOdd = 0
let sumEven = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2 === 0)
        sumEven += arr[i]
    if(arr[i]%2 === 1)
        sumOdd += arr[i]
}
if(sumEven> sumOdd) console.log('Tổng chẵn lớn hơn')
if(sumOdd> sumEven) console.log('Tổng lẻ lớn hơn')
console.log(sumEven)
console.log(sumOdd)