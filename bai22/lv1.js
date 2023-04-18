let arr = [1,2,1,4,5,1]
let cnt = 0
let k = 5;
function soLanXuatHien(i){
    if(i == arr.length){
        return;
    }
    if(arr[i] === k){
        cnt++
    }
    soLanXuatHien(i+1)
}

soLanXuatHien(0)
console.log(cnt)