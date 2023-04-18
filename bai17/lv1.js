let arr1 = [1,2,3,3,4]
let arr2 = [2,2,3,5,4]
let arr = []
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if(arr1[i]===arr2[j]){
            arr.push(arr1[i])
        }
    }
}
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr[j] = ''
            }
        }

    }
}
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number") newArr.push(arr[i])
}
console.log(newArr)