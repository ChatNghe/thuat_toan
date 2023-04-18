let soNgay = 400
let a = Math.floor(soNgay/365)
let b = Math.floor((soNgay - a*365)/30)
let c = (soNgay - a*365 - b*30)

console.log(`${a} nam`)
console.log(`${b} thang`)
console.log(`${c} ngay`)