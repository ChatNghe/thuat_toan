let count = 1
function soChuSo(n){
    if (n<10) {
        return count++;
    }
    else {
        count++
        return soChuSo(n/10);
    }
}

console.log(soChuSo(5110))