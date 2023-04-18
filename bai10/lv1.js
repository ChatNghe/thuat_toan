let a = 1
let b = 2
let c = 3
let count = 0
for (let i = 100; i < 1000; i++) {
    if((Math.floor(i/100) === a || Math.floor(i/100) === b ||Math.floor(i/100) === c)
        &&(Math.floor((i -Math.floor(i/100)*100 )/10) === a   || Math.floor((i -Math.floor(i/100)*100 )/10) === b || Math.floor((i -Math.floor(i/100)*100 )/10) === c )
        &&(i - Math.floor(i/100)*100 - Math.floor((i -Math.floor(i/100)*100 )/10)*10 === a || i - Math.floor(i/100)*100 - Math.floor((i -Math.floor(i/100)*100 )/10)*10 === b || i - Math.floor(i/100)*100 - Math.floor((i -Math.floor(i/100)*100 )/10)*10 === c)){
        count++
    }
}
console.log(count)