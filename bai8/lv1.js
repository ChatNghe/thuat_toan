let soTien = 8000
let a = Math.floor(soTien/5000)
let b = Math.floor((soTien - a*5000)/2000)
let c = (soTien - a*5000 - b*2000)/1000

console.log(`Số tiền ${soTien} cần ${a} tờ 5000, ${b} tờ 2000, ${c} tờ 1000`)


