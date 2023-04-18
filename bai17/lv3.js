let n = 5
let arr = [1,3,5,4,1,2,3,8,7]
let count = 0
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i === arr[j]) {
            count++
            break;
        }
    }
}
if (count === n) console.log('có')
else console.log('không')