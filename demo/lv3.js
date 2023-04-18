// let arr = [1,2,3,4,5,6,8,7,11,19]
//
// function sortAndRemoveNonPrime(arr){
//     let sortArray = []
//     let flag = true
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>=2) {
//             for (let j = 2; j < arr[i]; j++) {
//                 if(arr[i] % j === 0) flag = false
//             }
//             if (flag === true) sortArray.push(arr[i])
//         }
//         flag = true
//
//     }
//     return sortArray.sort((a,b)=> a - b)
// }
//
// console.log(sortAndRemoveNonPrime(arr))

let arr = [1, 2, 3, 4];
let visit = [];
let res = [];
let k = 4;
let a = new Map();

console.log(a.set(arr.sort().join(","), 1))
// function backTracking(tmp) {
//     if (tmp.length === k) {
//         let tmp1 = [...tmp];
//         a.set(tmp1.sort().join(","), 1);
//         return;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (visit[i] !== 1) {
//             tmp.push(arr[i]);
//             visit[i] = 1;
//             backTracking(tmp);
//             visit[i] = 0;
//             tmp.pop();
//         }
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     visit[i] = 1;
//     backTracking([arr[i]]);
//     visit[i] = 0;
// }
// for (const item of a) {
//     console.log(item[0].split(",").map(Number));
// }