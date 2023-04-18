let N = 5
let a = [2,3,3]
let b1 = 0
let b2 = 0
let b3 = 0
let b4 = 0
let count = 0
for (let i = 0;i < a.length;i++){
    if(a[i] === 1) b1++
    if(a[i] === 2) b2++
    if(a[i] === 3) b3++
    if(a[i] === 4) b4++
}
console.log(b1,b2,b3,b4)
count += b4
if(b3 >= b1){
    count += b1
    b3 = b3 -b1
    if(b2 % 2 === 0){
        count+= b3
        count+= b2/2
    }else {
        count += b3
        count += Math.floor(b2/2) + 1
    }
}
if(b1 >= b3){
    count+= b3
    b1 = b1 -b3
    if(b2 % 2 === 0){
        count+= Math.ceil(b1/4)
        count+= b2/2
    }else {
        count += Math.floor(b2/2) + 1
        if(b1>2){
            count+= Math.ceil((b1-2)/4)
        }
    }
}
console.log(count)