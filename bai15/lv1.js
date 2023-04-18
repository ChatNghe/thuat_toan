let arr = [1,2,3,5,6,7]
let flag = true
for (let i = 0; i < arr.length; i++) {
    if(arr[i+1]<arr[i]){
        flag = false
    }
}
if(flag === true){
    console.log('mảng tăng dần')
}
if(flag === false){
    console.log('mảng không tăng dần')
}
