let a = [1,2,3]
let b = [1,6,5,3,7,2]
let count = 0
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if(a[j] === b[i]) count++
    }
}
if(count === a.length) console.log('có')
else console.log('không')