let arr = [1, 1,  2, 1, 3, 4,2, 5]
let count = 0;
for (let i = 0; i < arr.length; i++) {
    count = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
            count++
        }
    }
    if (count === 1) console.log(arr[i])
}