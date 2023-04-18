let a = 15
let b = 21
let x = a
let y = b
while (y > 0){
    let temp = x
    x = y
    y = temp % y
}
console.log(x)
console.log(a*b/x)

// function gcd_rec(a, b) {
//     if (b) {
//         return gcd_rec(b, a % b);
//     } else {
//         return Math.abs(a);
//     }
// }
//
// console.log(gcd_rec(15,21))
// 15,6
// 6,9
// 9,6
// 6,3
// 3,0
