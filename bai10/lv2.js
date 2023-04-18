// let a = 1
// let b = 2
// let c = 3
// for (let i = 100; i < 1000; i++) {
//     if((Math.floor(i/100) === a || Math.floor(i/100) === b ||Math.floor(i/100) === c)
//         &&(Math.floor((i -Math.floor(i/100)*100 )/10) === a   || Math.floor((i -Math.floor(i/100)*100 )/10) === b || Math.floor((i -Math.floor(i/100)*100 )/10) === c )
//         &&(i - Math.floor(i/100)*100 - Math.floor((i -Math.floor(i/100)*100 )/10)*10 === a || i - Math.floor(i/100)*100 - Math.floor((i -Math.floor(i/100)*100 )/10)*10 === b || i - Math.floor(i/100)*100 - Math.floor((i -Math.floor(i/100)*100 )/10)*10 === c)){
//         console.log(i)
//     }
// }

let a = 1
let b = 2
let c = 2
let arr = ['1','2','2']
let str = ''
let number = []
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            str+= arr[i] +arr[j]+ arr[k]
            number.push(str)
            str = ''
        }
    }
}
let result = number.filter((value, index, array) => array.indexOf(value) === index);

console.log(result)