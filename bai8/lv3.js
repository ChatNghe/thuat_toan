let arr = [1,2,3,4]
let sumOdd = 0
let sumEven = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 ===0) sumEven += arr[i];
    else sumOdd += arr[i]
}
if (sumOdd>sumEven) console.log('Tổng lẻ lớn hơn')
else console.log('Tổng chẵn lớn hơn')