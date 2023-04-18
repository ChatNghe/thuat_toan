let soTien = 20000
for (let i = 0; i <= Math.floor(soTien / 5000); i++) {
    for (let j = 0; j <= Math.floor((soTien - i * 5000)/2000); j++) {
        let k = (soTien - i * 5000 - j * 2000) / 1000
        console.log(`Số tiền ${soTien} cần ${i} tờ 5000, ${j} tờ 2000, ${k} tờ 1000`)
    }
}
