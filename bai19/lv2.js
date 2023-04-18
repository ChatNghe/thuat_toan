let arr = [1,2,3,4,5,6,7]

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[j]%2 === 1 && arr[j+1]%2 === 0){
            let temp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j]= temp
        }
    }
}
console.log(arr)